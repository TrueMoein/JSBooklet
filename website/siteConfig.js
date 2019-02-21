/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'JavaScript کتابچه', // Title for your website.
  tagline: 'مقالات و آموزش های JavaScript',
  url: 'https://JSBooklet.ir', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'JSBooklet',
  organizationName: 'IranJS.com',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'
  // algolia: {
  //   apiKey: 'my-api-key',
  //   indexName: 'my-index-name',
  //   algoliaOptions: {} // Optional, if provided by Algolia
  // },
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // {search: true},
    {page: 'help', label: 'مشارکت'},
    {blog: true, label: 'مقالات'},
    {doc: 'javascript-introduction', label: 'کتابچه'},
  ],

  /* path to images for header/footer */
  headerIcon: 'img/jsbooklet.png',
  footerIcon: 'img/jsbooklet.png',
  favicon: 'img/jsbooklet.png',

  /* Colors for website */
  colors: {
    primaryColor: '#323330',
    secondaryColor: '#f7b92a',
  },
  
  docsSideNavCollapsible: true,
  editUrl: 'https://github.com/TrueMoein/JSBooklet/tree/master/docs/',

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} IranJS.com`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  gaTrackingId: "UA-134867882-1",

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/TrueMoein/JSBooklet',
};

module.exports = siteConfig;
