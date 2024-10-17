import hoto from "@/shared/assets/img/photo.png";
import s from "./Banner.module.scss";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
interface BannerProps { };
export const Banner = ({ }: BannerProps) => {
  return (
    <section className={s.Banner}>
      <h1>Hi 👋,
        My name is
        Viacheslav
        I build things for web</h1>
      <AppImage src={hoto} />
      <img />
    </section>
  );
};