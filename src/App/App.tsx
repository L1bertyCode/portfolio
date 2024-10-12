import { Suspense, useContext, useState } from "react";
import s from "./App.module.scss";
import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProfilePage } from "../pages/ProfilePage";
import { Theme, ThemeContext } from "./context/ThemeContext/ThemeContext";
import { useTheme } from "./context/useTheme/useTheme";
import { classNames } from "../shared/helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [`app_${theme}_theme`])}>
      <header>
        <nav>
          <Link to={"/"}>Main</Link>
          <Link to={"/profile"}>Profile</Link>
        </nav>
        <button onClick={toggleTheme}>Theme</button>
      </header>

      <Suspense fallback={
        <div className={s.loading}>Loading</div>}>

        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/profile"} element={<ProfilePage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Suspense>

    </div>
  );
};

export default App;