const nextConfig = {
  output: 'export', // Enables static export
  reactStrictMode: true, // Optional: keeps React in strict mode
  images: {
    unoptimized: true, // Necessary for static exports if you're using the `next/image` component
  },
};

module.exports = nextConfig;