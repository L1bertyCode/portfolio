import s from "./Banner.module.scss";
interface BannerProps { };
export const Banner = ({ }: BannerProps) => {
  return (
    <div className={s.Banner}>
      <div>Banner</div>
    </div>
  );
};