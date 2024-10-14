import { Link, LinkProps } from "react-router-dom";

import s from "./AppLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type AppLinkVariant = "primary" | "secondary";
interface AppLinkProps extends LinkProps {
  variant?: string;
};
export const AppLink = ({ children, to, variant = "secondary", ...otherProps }: AppLinkProps) => {
  return (
    <Link
      className={classNames(s.AppLink, {}, [s[variant]])}
      to={to}
      {...otherProps}>
      {children}
    </Link>
  );
};