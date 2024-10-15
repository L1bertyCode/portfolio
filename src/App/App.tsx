import { AppRouter } from "./providers/router";
import { useTheme } from "@/shared/lib/useTheme/useTheme";
;
import { Navbar } from "@/widgets/Navbar";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./App.module.scss";
import { MianLayout } from "@/shared/layouts/MianLayout/MianLayout";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [`app_${theme}_theme`])}>
      <MianLayout
        header={
          <Navbar />}
        main={
          <AppRouter />
        }
        footer={<div className="footer">footer</div>}
      />

    </div>
  );
};

export default App;