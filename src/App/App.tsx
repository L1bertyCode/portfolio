import { Suspense } from "react";
import s from "./App.module.scss";
import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProfilePage } from "../pages/ProfilePage";

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Main</Link>
      <Link to={"/profile"}>Profile</Link>

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