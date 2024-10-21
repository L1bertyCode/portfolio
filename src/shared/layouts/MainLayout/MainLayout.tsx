import { ReactNode } from "react";
import s from "./MainLayout.module.scss";
interface MainLayoutProps {
  header: ReactNode;
  main: ReactNode;
  footer?: ReactNode;
};
export const MainLayout = ({ header, main, footer }: MainLayoutProps) => {
  return (
    <div className={s.MainLayout}>
      <div className={s.page}>
        <>{header}</>
        <>{main}</>
        {footer && <>{footer}</>}
      </div>
    </div >
  );
};