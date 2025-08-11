import type { Features, Site, Ui } from "./types";

export const SITE: Site = {
  website: "https://ismetalp.com",
  base: "/",
  title: "İsmet ALP",
  description: "Site is under maintenance — we will be back soon.",
  author: "Ismet Alp",
  lang: "en",
  ogLocale: "en_US",
  imageDomains: ["cdn.bsky.app", "images.unsplash.com"],
};

export const UI: Ui = {
  // [DISABLED_BY_ALP] original nav kept for later use
  internalNavs: [],
  // internalNavs: [
  //   {
  //     path: "/blog",
  //     title: "Blog",
  //     displayMode: "alwaysText",
  //     text: "Blog",
  //   },
  //   {
  //     path: "/projects",
  //     title: "Projects",
  //     displayMode: "alwaysText",
  //     text: "Projects",
  //   },
  //   {
  //     path: "/highlights",
  //     title: "Highlights",
  //     displayMode: "iconToTextOnMobile",
  //     text: "Highlights",
  //     icon: "i-ri-screenshot-line",
  //   },
  //   {
  //     path: "/photos",
  //     title: "Photos",
  //     displayMode: "iconToTextOnMobile",
  //     text: "Photos",
  //     icon: "i-ri-camera-ai-line",
  //   },
  //   {
  //     path: "/shorts",
  //     title: "Shorts",
  //     displayMode: "iconToTextOnMobile",
  //     text: "Shorts",
  //     icon: "i-meteor-icons-grid",
  //   },
  //   {
  //     path: "/changelog",
  //     title: "Changelog",
  //     displayMode: "iconToTextOnMobile",
  //     text: "Changelog",
  //     icon: "i-ri-draft-line",
  //   },
  // ],

  // [DISABLED_BY_ALP] original socialLinks kept for later use
  // socialLinks: [],
  socialLinks: [
    // {
    //   link: "https://github.com/lin-stephanie/astro-antfustyle-theme",
    //   title: "AntfuStyle on Github",
    //   displayMode: "alwaysIcon",
    //   icon: "i-uil-github-alt",
    // },
    {
      link: "https://www.linkedin.com/in/ismetalp/", // adjust if different username
      title: "LinkedIn",
      displayMode: "alwaysIcon",
      icon: "i-ri-linkedin-fill",
    },
    // {
    //   link: "https://bsky.app/profile/astro.build",
    //   title: "Astro on Bluesky",
    //   displayMode: "alwaysIcon",
    //   icon: "i-meteor-icons-bluesky",
    // },
  ],
  navBarLayout: {
    left: [],
    right: ["socialLinks", "themeButton"],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: "Changelog", path: "/changelog" },
    { title: "AstroBlog", path: "/feeds" },
    { title: "AstroStreams", path: "/streams" },
  ],
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  // [DISABLED_BY_ALP] original githubView kept for later use
  // githubView: {
  //   monorepos: [],
  //   mainLogoOverrides: [],
  //   subLogoMatches: [],
  // },
  githubView: {
    monorepos: [
      "withastro/astro",
      "withastro/starlight",
      "lin-stephanie/astro-loaders",
    ],
    mainLogoOverrides: [
      [/starlight/, "https://starlight.astro.build/favicon.svg"],
    ],
    subLogoMatches: [
      [/theme/, "i-unjs-theme-colors"],
      [/github/, "https://github.githubassets.com/favicons/favicon.svg"],
      [/tweet/, "i-logos-twitter"],
      [/bluesky/, "i-logos-bluesky"],
    ],
  },

  externalLink: {
    newTab: false,
    cursorType: "",
    showNewTabIcon: false,
  },
  postMetaStyle: "minimal",
};

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 60 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: "plum",
    },
  ],
  // Disabled features (kept minimal to satisfy required interface keys)
  // [DISABLED_BY_ALP] original toc kept for later use
  // toc: false,
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: "left",
      displayMode: "content",
    },
  ],

  // [DISABLED_BY_ALP] original share kept for later use
  // share: false,
  share: [
    true,
    {
      twitter: [true, "@ste7lin"],
      bluesky: [true, "@ste7lin.bsky.social"],
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],

  // [DISABLED_BY_ALP] original giscus kept for later use
  // giscus: false,
  giscus: [
    true,
    {
      "data-repo": "lin-stephanie/astro-antfustyle-theme",
      "data-repo-id": "R_kgDOLylKbA",
      "data-category": "Giscus",
      "data-category-id": "DIC_kwDOLylKbM4Cpugn",
      "data-mapping": "title",
      "data-strict": "0",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "bottom",
      "data-lang": "en",
    },
  ],
};
