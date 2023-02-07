import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    // "/home",
    {text: "安装指南", icon: "creative", link: "/deploy.md"},
    {
        text: "功能列表及配置",
        icon: "config",
        children: [
            {
                text: "原神相关",
                prefix: "/configs/genshin/",
                children: [
                    "genshin-info",
                    "genshin-abyss",
                    "genshin-wiki",
                    "genshin-gacha",
                    "genshin-autobbs",
                    "genshin-notes",
                    "genshin-voice",
                    "miyoushe",
                    "get-cookie",
                    "bind-cookie"
                ]
            },
            {
                text: "Bot管理",
                prefix: "/configs/manage/",
                children: [
                    "help",
                    "bot-manage",
                    "web_ui",
                    "plugin-manage"
                ]
            },
            {
                text: "其他功能",
                prefix: "/configs/other/",
                children: [
                    "learning_chat",
                    "screenshot",
                    "world60s"
                ]
            }
        ]
    },
    {text: "常见问题", icon: "info", link: "/question.md"},
    {text: "致谢", icon: "advance", link: "/thanks.md"},
    {text: "QQ频道交流", icon: "slides", link: "https://pd.qq.com/s/kl9dor"},
    {text: "爱发电", icon: "note", link: "https://afdian.net/a/cherishmoon"},
]);
