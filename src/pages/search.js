import Footer from "components/Footer";
import Header from "components/Header";
import { useRouter } from "next/router";
import React from "react";
import { format, parseISO } from "date-fns";
import InfoCard from "components/InfoCard";
import Map from "components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { startDate, endDate, numberOfGuests, location } = router.query;
  let range;
  if (startDate && endDate) {
    const formatedStartDate = format(parseISO(startDate), "dd MMMM yy");
    const formatedEndDate = format(parseISO(endDate), "dd MMMM yy");
    range = `${formatedStartDate} - ${formatedEndDate}`;
  }

  return (
    <>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays from {range} for {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  star={star}
                  price={price}
                  description={description}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
