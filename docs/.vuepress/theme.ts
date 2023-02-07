import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs.paimon.cherishmoon.fun",

  author: {
    name: "惜月",
    url: "https://github.com/CMHopeSunshine",
  },

  iconAssets: "iconfont",

  logo: "https://s1.ax1x.com/2023/02/05/pS62DJK.png",

  repo: "CMHopeSunshine/LittlePaimon",

  docsRepo: "https://github.com/CMHopeSunshine/LittlePaimon-Docs",

  docsBranch: "master",

  docsDir: "docs",

  print: false,

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "<a href=\"https://beian.miit.gov.cn\" target=\"_blank\">粤ICP备2022050246号</a>",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "PageView"],

  fullscreen: true,

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },


  plugins: {
    copyCode: {
      showInMobile: true
    },
    comment: {
      provider: "Waline",
      serverURL: "comment.cherishmoon.fun", // your server url
      dark: 'auto',
      meta: ['nick', 'mail'],
      requiredMeta: ['nick'],
      reaction: true
    },

    mdEnhance: {
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
