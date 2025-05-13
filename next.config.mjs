/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    //serverExternalPackages: ["@react-pdf/renderer"],
    transpilePackages: ["@react-pdf/renderer"],
};

export default nextConfig;
