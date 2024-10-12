interface PageProps {
  children: ReactNode;
};
import { ReactNode } from "react";
import s from "./Page.module.scss";
export const Page = ({ children }: PageProps) => {
  return (
    <div className={s.Page}>
      {children}
    </div>
  );
};