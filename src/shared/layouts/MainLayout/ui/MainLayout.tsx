import { ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./MainLayout.module.scss";

interface MainLayoutProps {
  className?: string;
  header: ReactNode;
  sidebar: ReactNode;
  toolbar?: ReactNode;
  content: ReactNode;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, header, sidebar, toolbar, content } =
    props;
  return (
    <div
      className={classNames(s.mainLayout, {}, [className])}
    >
      <div className={s.header}>{header}</div>
      <div className="content">
        <div className={s.sidebar}>{sidebar}</div>
        <div className={s.content}>{content}</div>
        {toolbar ? (
          <div className={s.toolbar}>{toolbar}</div>
        ) : null}
      </div>
    </div>
  );
});
