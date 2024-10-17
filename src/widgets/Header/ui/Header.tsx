import { Navbar } from "@/widgets/Navbar";
import s from "./Header.module.scss";
import { Socials } from "@/widgets/Socials";
import { Logo } from "@/widgets/Logo/ui/Logo";
import { useTheme } from "@/shared/lib/useTheme/useTheme";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
interface HeaderProps { };
export const Header = ({ }: HeaderProps) => {
  const { toggleTheme } = useTheme();
  return (
    <header className={s.Header}>
      <Logo />
      <div>
        <Navbar />
        <Socials />
        <ThemeSwitcher onClick={toggleTheme} />
      </div>
    </header>
  );
};