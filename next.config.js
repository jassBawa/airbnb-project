/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "wwww.jsonkeeper.com", "jsonkeeper.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiamFzc2Jhd2EiLCJhIjoiY2xkZGIycDJ5MDF0dDNxcXBsaWRpeW42eCJ9.wFN_zPGi_Bwte4f0tvwzpQ",
  },
};

module.exports = nextConfig;
