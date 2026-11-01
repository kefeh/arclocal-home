import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the public home page as a minimal standalone production server,
  // independent of the full source tree (matches the SoliiBridge deployment).
  output: "standalone",
};

export default nextConfig;
