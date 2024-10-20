import { SkillItem } from "../SkillItem/SkillItem";
import s from "./Skills.module.scss";
import htmlSvg from "@/shared/assets/icons/html.svg";
import cssSvg from "@/shared/assets/icons/css.svg";
import jsSvg from "@/shared/assets/icons/js.svg";
import reactSvg from "@/shared/assets/icons/react.svg";
import reduxSvg from "@/shared/assets/icons/redux.svg";
import bootstrapSvg from "@/shared/assets/icons/bootstrap.svg";
import tailwindSvg from "@/shared/assets/icons/tailwind.svg";
import sassSvg from "@/shared/assets/icons/sass.svg";
import gitSvg from "@/shared/assets/icons/git.svg";
import greensockSvg from "@/shared/assets/icons/greensock.svg";
import vscodeSvg from "@/shared/assets/icons/vscode.svg";
import githubSvg from "@/shared/assets/icons/github.svg";

const skillsSvg = [
  htmlSvg,
  cssSvg,
  jsSvg,
  reactSvg,
  reduxSvg,
  bootstrapSvg,
  tailwindSvg,
  sassSvg,
  gitSvg,
  greensockSvg,
  vscodeSvg,
  githubSvg
];

interface SkillsProps { };
export const Skills = ({ }: SkillsProps) => {
  return (
    <section className={s.Skills}>
      <div className={s.skillsList}> {skillsSvg.map((svg, i) => {
        return < SkillItem key={i} Svg={svg} />;
      }
      )}</div>

    </section>
  );
};