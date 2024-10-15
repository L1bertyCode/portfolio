


import { AppRouter } from "./providers/router";

import { useTheme } from "@/shared/lib/useTheme/useTheme";
;
import { Navbar } from "@/widgets/Navbar";


import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./App.module.scss";
const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [`app_${theme}_theme`])}>

      <div className="content">

        <Navbar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;