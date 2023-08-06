// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'fi'], // List of supported locales
    defaultLocale: 'fi', // Default locale
  },
  localePath: path.resolve('./public/locales'), // Path to store translation files
};