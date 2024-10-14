import { Link, LinkProps } from "react-router-dom";

import s from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps { };
export const AppLink = ({ to, children }: AppLinkProps) => {
  return (
    <Link to={to} className={s.AppLink}>
      {children}
    </Link>
  );
};