import { ReactNode } from "react";
import s from "./MianLayout.module.scss";
interface MianLayoutProps {
  header: ReactNode;
  main: ReactNode;
  footer?: ReactNode;
};
export const MianLayout = ({ header, main, footer }: MianLayoutProps) => {
  return (
    <div className={s.MianLayout}>
      <div className={s.page}>
        <header>{header}</header>
        <main>{main}</main>
        {footer && <footer>{footer}</footer>}
      </div>
    </div >
  );
};