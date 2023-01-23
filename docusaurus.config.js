// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
module.exports = {

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  title: 'filmlet documentation',
  tagline: 'Focus on filmmaking. Not planning.',
  url: 'https://docs.filmlet.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*    editUrl:
               'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', */
        },
        blog: {
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Changelog',
          showReadingTime: false,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*  editUrl:
             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', */
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'filmlet',
        logo: {
          alt: 'filmlet logo',
          src: 'img/logo.svg',

          height: 100,
        },
        items: [
          {
            type: 'doc',
            docId: '/category/callsheets',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Changelog', position: 'right' },
          {
            href: 'https://web.filmlet.app',
            label: 'Web-App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [

          {
            label: 'Imprint',
            href: 'https://filmlet.app/imprint'
          },
          {
            label: 'Privacy',
            href: 'https://filmlet.app/privacy'
          },
  
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - another tech startup UG`,
      },
       prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }, 
    }),
  scripts: [{ src: '/js/script.js', defer: true, 'data-domain': 'docs.filmlet.app' }],




}


