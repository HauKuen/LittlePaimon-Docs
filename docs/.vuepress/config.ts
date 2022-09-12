import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "LittlePaimon",
  description: "原神机器人小派蒙文档",

  base: "/",

  theme,
});
