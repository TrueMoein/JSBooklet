const siteConfig = {
  title: 'کتابچه جاوااسکریپت',
  tagline: 'آموزش‌های فارسی جاوااسکریپت و محصولات مرتبط',
  url: 'https://JSBooklet.ir',
  baseUrl: '/',

  projectName: 'JSBooklet',
  organizationName: 'IranJS.com',
  headerLinks: [
    // {search: true},
    {page: 'contributin', label: 'مشارکت'},
    {blog: true, label: 'وبلاگ'},
    {href: '/#booklets', label: 'کتابچه‌ها'},
  ],

  docsUrl: "booklets",

  booklets: [
    {
      name: "JavaScript",
      image: "img/booklets/javascript.png",
      url: "/booklets/javascript-introduction"
    },
    {
      name: "TypeScript",
      image: "img/booklets/typescript.png",
      url: "/booklets/javascript-introduction"
    },
    {
      name: "React",
      image: "img/booklets/react.png",
      url: "/booklets/javascript-introduction"
    },
    {
      name: "Vue.js",
      image: "img/booklets/vue.png",
      url: "/booklets/javascript-introduction"
    },
  ],

  headerIcon: 'img/jsbooklet.png',
  footerIcon: 'img/jsbooklet.png',
  favicon: 'img/jsbooklet.png',

  colors: {
    primaryColor: '#323330',
    secondaryColor: '#f7b92a',
  },
  
  docsSideNavCollapsible: true,
  editUrl: 'https://github.com/TrueMoein/JSBooklet/tree/master/docs/',

  copyright: `Copyright © ${new Date().getFullYear()} IranJS.com`,

  highlight: {
    theme: 'atom-one-dark',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  cleanUrl: true,

  gaTrackingId: "UA-134867882-1",

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },

  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  enableUpdateBy: true,

  enableUpdateTime: true,

    repoUrl: 'https://github.com/TrueMoein/JSBooklet',
};

module.exports = siteConfig;
