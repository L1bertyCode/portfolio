import { Link } from "react-router-dom";



import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./App.module.scss";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";


const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [`app_${theme}_theme`])}>
      <header>
        <nav>
          <Link to={"/"}>Main</Link>
          <Link to={"/skills"}>Skills</Link>
        </nav>
        <button onClick={toggleTheme}>Theme</button>
      </header>
      <AppRouter />
    </div>
  );
};

export default App;