import { AppRouter } from "./providers/router";
import { useTheme } from "@/shared/lib/useTheme/useTheme";
;
import { Navbar } from "@/widgets/Navbar";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./App.module.scss";

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { MainLayout } from "@/shared/layouts/MainLayout/MainLayout";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [`app_${theme}_theme`])}>
      <MainLayout
        header={<Header />}
        main={<AppRouter />}
        footer={<Footer />}
      />
    </div>
  );
};

export default App;