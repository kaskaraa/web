import type { NextConfig } from "next";

const gone = ["/about", "/partnership", "/investment", "/comingsoon", "/applications/clinical", "/applications/research"];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about/team", destination: "/team", permanent: true },
      ...gone.map((source) => ({ source, destination: "/", permanent: true })),
    ];
  },
};

export default nextConfig;
