import { Link } from "react-router-dom";



import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./App.module.scss";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { AppLink } from "@/shared/ui/AppLink/AppLink";


const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [`app_${theme}_theme`])}>
      <header>
        <nav>
          <AppLink to={"/"}>Main</AppLink>
          <AppLink to={"/skills"}>Skills</AppLink>
        </nav>
        <button onClick={toggleTheme}>Theme</button>
      </header>
      <AppRouter />
    </div>
  );
};

export default App;