import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  images: {
    domains: ["cdn.builder.io"],
  }
});

export default nextConfig;
