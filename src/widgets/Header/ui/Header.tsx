import { Navbar } from "@/widgets/Navbar";
import s from "./Header.module.scss";
import { Socials } from "@/widgets/Socials";
import { Logo } from "@/widgets/Logo/ui/Logo";
interface HeaderProps { };
export const Header = ({ }: HeaderProps) => {
  return (
    <header className={s.Header}>
      <Logo />
      <div>
        <Navbar />
        <Socials />
      </div>
    </header>
  );
};