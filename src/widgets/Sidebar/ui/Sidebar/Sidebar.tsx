import { Link } from "react-router-dom";
import s from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <div className={s.sidebar}>
      
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
