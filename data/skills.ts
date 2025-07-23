import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";
import { FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbFileTypeSql } from "react-icons/tb";
import { MdDataObject } from "react-icons/md";
import { PiFileCSharpFill } from "react-icons/pi";

const skills = [
  {
    techImage: SiJavascript,
    techName: "JavaScript",
  },
  {
    techImage: SiTypescript,
    techName: "Typescript",
  },
  {
    techImage: FaNodeJs,
    techName: "Node.js",
  },
  {
    techImage: SiExpress,
    techName: "Express.js",
  },
  { techImage: PiFileCSharpFill, techName: "C#" },
  { techImage: SiDotnet, techName: ".Net Core" },
  {
    techImage: FaJava,
    techName: "Java",
  },
  {
    techImage: BiLogoSpringBoot,
    techName: "Spring Boot",
  },
  {
    techImage: FaGitAlt,
    techName: "Git",
  },
  {
    techImage: SiNextdotjs,
    techName: "Next.js",
  },
  {
    techImage: TbFileTypeSql,
    techName: "SQL",
  },
  {
    techImage: SiMongodb,
    techName: "NoSQL",
  },
  {
    techImage: SiTailwindcss,
    techName: "Tailwind",
  },
  {
    techImage: MdDataObject,
    techName: "Orm's",
  },
];

export default skills;
