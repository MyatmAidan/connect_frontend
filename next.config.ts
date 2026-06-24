import type { NextConfig } from "next";

const apiOrigin =
  process.env.NEXT_PUBLIC_APP_API_BASE_URL?.replace(
    /\/api\/v1\/admin\/?$/,
    "",
  ) || "http://127.0.0.1:8000";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/storage/:path*",
        destination: `${apiOrigin}/storage/:path*`,
      },
    ];
  },
};

export default nextConfig;
