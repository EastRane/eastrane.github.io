// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  noIndex: true,

  title: 'EastRane',
  tagline: 'A collection of informative pages',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.eastrane.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eastrane', // Usually your GitHub org/user name.
  projectName: 'eastrane.github.io', // Usually your repo name.
  deploymentBranch: 'deployment',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          admonitions: {
            keywords: ['note', 'tip', 'info', 'warning', 'danger', 'question'],
            extendDefaults: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom')
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // eastrane start
      zoom: {
          selector: '.expand',
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          },
          config: {
            // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          }
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      // eastrane end
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'EastRane',
        logo: {
          alt: 'EastRane Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/eastrane/eastrane.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/dpQTQgdeeD',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `EastRane, ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['yaml'],
      },
    }),
};

export default config;
