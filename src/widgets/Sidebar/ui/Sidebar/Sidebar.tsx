import s from "./Sidebar.module.scss";
interface SidebarProps {
  theme: string;
  setTheme: () => void;
}
export function Sidebar(props: SidebarProps) {
  return <div className={s.sidebar}>Sidebar</div>;
}
