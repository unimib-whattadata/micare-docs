import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "MiCare",
  tagline: "A Digital Ecosystem for Mental Health",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://unimib-whattadata.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/micare-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Unimib Whattadata", // Usually your GitHub org/user name.
  projectName: "MiCare Docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [
            [
              require("@docusaurus/remark-plugin-npm2yarn"),
              { sync: true, converters: ["pnpm", "yarn", "bun"] },
            ],
          ],
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          remarkPlugins: [
            [
              require("@docusaurus/remark-plugin-npm2yarn"),
              { sync: true, converters: ["pnpm", "yarn", "bun"] },
            ],
          ],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://unimib-whattadata.github.io/micare-docs/",
      },
      { property: "og:title", content: "MiCare" },
      {
        property: "og:description",
        content: "A Digital Ecosystem for Mental Health",
      },
      {
        property: "og:image",
        content:
          "https://unimib-whattadata.github.io/micare-docs/img/micare-docs-preview.png",
      },
      { property: "twitter:card", content: "summary_large_image" },
      {
        property: "twitter:url",
        content: "https://unimib-whattadata.github.io/micare-docs/",
      },
      { property: "twitter:title", content: "MiCare" },
      {
        property: "twitter:description",
        content: "A Digital Ecosystem for Mental Health",
      },
      {
        property: "twitter:image",
        content:
          "https://unimib-whattadata.github.io/micare-docs/img/micare-docs-preview.png",
      },
    ],
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "MiCare",
      logo: {
        alt: "MiCare Logo",
        src: "img/logo.svg",
      },
      // items: [
      //   {
      //     type: 'docSidebar',
      //     sidebarId: 'tutorialSidebar',
      //     position: 'left',
      //     label: 'Documentation',
      //   },
      //   {
      //     href: 'https://unimib-datai.github.io/sti-website/',
      //     label: 'Our works',
      //     position: 'right',
      //   },
      //   {
      //     href: 'https://github.com/facebook/docusaurus',
      //     label: 'GitHub',
      //     position: 'right',
      //   },
      // ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Whattadata srl. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  // Tailwind
  plugins: [tailwindPlugin],
};

export default config;
