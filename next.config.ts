import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // "standalone" çıktısı yalnızca Docker imajı için gereklidir (Dockerfile bu değişkeni ayarlar).
  // Vercel'de kullanılmaz; böylece Vercel dağıtımı varsayılan davranışıyla çalışır.
  output: process.env.DOCKER_BUILD === "1" ? "standalone" : undefined,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
