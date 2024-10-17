import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./Logo.module.scss";
interface LogoProps { };
export const Logo = ({ }: LogoProps) => {
  return (
    <AppLink className={s.Logo} to="/">CODE</AppLink>
  );
};