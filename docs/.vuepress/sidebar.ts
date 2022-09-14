import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  // "/slides",
  {
    text: "安装部署",
    icon: "creative",
    prefix: "/guide/",
    link: "/guide/",
    // children: "structure",
    children: ["environment-install.md", "paimon-install.md"]
  },
  {
    text: "功能配置",
    icon: "note",
    prefix: "/configs/",
    link: "/configs/",
    children: [
        "help.md",
      {
        text: "管理功能",
        icon: "note",
        prefix: "manage/",
        children: ["bot-manage.md", "plugin-manage.md"],
      },
      {
        text: "原神功能",
        icon: "note",
        prefix: "genshin/",
        children: ["bind-cookie.md",
          "genshin-info.md",
          "genshin-wiki.md",
          "genshin-notes.md",
          "genshin-autobbs.md",
        "genshin-gacha.md",
        "genshin-voice.md"],
      },
      {
        text: "群聊学习",
        icon: "note",
        prefix: "chat/",
        children: [],
      },
      {
        text: "其他功能",
        icon: "note",
        prefix: "other/",
        children: [],
      },
    ],
  },
  // {
  //   text: "文章",
  //   icon: "note",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "note",
  //       collapsable: true,
  //       prefix: "article/",
  //       children: ["article1", "article2", "article3", "article4"],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "note",
  //       children: [
  //         {
  //           text: "文章 5-8",
  //           icon: "note",
  //           collapsable: true,
  //           prefix: "article/",
  //           children: ["article5", "article6", "article7", "article8"],
  //         },
  //         {
  //           text: "文章 9-12",
  //           icon: "note",
  //           children: ["article9", "article10", "article11", "article12"],
  //         },
  //       ],
  //     },
  //   ],
  // },
]);
