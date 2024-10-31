import {
  SiCsharp,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiPython,
  SiSwift,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiGit,
  SiMicrosoft,
} from "react-icons/si"; // Adding SiMicrosoft for Visual Basic
import { FaJava } from "react-icons/fa";

const languageIcons = {
  java: { icon: <FaJava size={30} />, hoverColor: "#007396" },
  csharp: { icon: <SiCsharp size={30} />, hoverColor: "#239120" },
  javascript: { icon: <SiJavascript size={30} />, hoverColor: "#f7df1e" },
  node: { icon: <SiNodedotjs size={30} />, hoverColor: "#339933" },
  react: { icon: <SiReact size={30} />, hoverColor: "#61dafb" },
  python: { icon: <SiPython size={30} />, hoverColor: "#306998" },
  swift: { icon: <SiSwift size={30} />, hoverColor: "#f05138" },
  cpp: { icon: <SiCplusplus size={30} />, hoverColor: "#00599c" },
  html: { icon: <SiHtml5 size={30} />, hoverColor: "#e34f26" },
  css: { icon: <SiCss3 size={30} />, hoverColor: "#1572b6" },
  php: { icon: <SiPhp size={30} />, hoverColor: "#777bb4" },
  mysql: { icon: <SiMysql size={30} />, hoverColor: "#4479a1" },
  mongodb: { icon: <SiMongodb size={30} />, hoverColor: "#47a248" },
  typescript: { icon: <SiTypescript size={30} />, hoverColor: "#3178c6" },
  git: { icon: <SiGit size={30} />, hoverColor: "#f05032" },
  visualbasic: { icon: <SiMicrosoft size={30} />, hoverColor: "#2b579a" }, // Visual Basic entry with SiMicrosoft
};

export default languageIcons;
