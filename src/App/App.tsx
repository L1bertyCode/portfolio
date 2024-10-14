import { Link } from "react-router-dom";



import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./App.module.scss";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Button } from "@/shared/ui/Button/Button";


const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [`app_${theme}_theme`])}>
      <header>
        <nav>
          <AppLink to={"/"}>Main</AppLink>
          <AppLink to={"/skills"}>Skills</AppLink>
        </nav>
        <Button onClick={toggleTheme}>Theme</Button>
      </header>
      <AppRouter />
    </div>
  );
};

export default App;