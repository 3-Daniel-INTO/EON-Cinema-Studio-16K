/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  env: {
    RENDER_MODE: "HYPER-REALISTIC-16K",
    LENS_PROFILE: "ANAMORPHIC-40MM",
    GRAIN_DENSITY: "0.04",
    COLOR_SCIENCE: "ACES-LOG-C"
  }
}
export default nextConfig;
