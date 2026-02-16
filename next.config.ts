// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {

  output: "export",


  images: {
    unoptimized: true,
  },

  basePath: isProd ? "/techA9" : "",

  assetPrefix: isProd ? "/techA9" : "",
};

export default nextConfig;
