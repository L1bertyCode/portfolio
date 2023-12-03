import s from "./Navbar.module.scss";
interface NavbarProps {
  className?: string;
}
export function Navbar(props: NavbarProps) {
  const { className } = props;
  return <div className={s.navbar}>Navbar</div>;
}
