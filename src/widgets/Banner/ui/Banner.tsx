import photo from "@/shared/assets/img/photo.jpg";
import s from "./Banner.module.scss";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
interface BannerProps { };
export const Banner = ({ }: BannerProps) => {
  return (
    <section className={s.Banner}>
      <h1>Hi 👋,
        My name is
        Vi
        I build things for web</h1>
      <AppImage
        src={photo}
        round={true}
      />
    </section>
  );
};