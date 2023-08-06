module.exports = {
  // Other Next.js configuration options...

  // Custom configuration options
  pages: [
    {
      path: '/',
      enabled: true,
    },
    {
      path: '/about',
      enabled: false,
    },
    // Add more pages as needed
  ],

  // Custom function to modify the Next.js routing configuration
  async rewrites() {
    const enabledPages = pages.filter((page) => page.enabled);
    const rewrites = enabledPages.map((page) => ({
      source: page.path,
      destination: page.path,
    }));

    return rewrites;
  },
};