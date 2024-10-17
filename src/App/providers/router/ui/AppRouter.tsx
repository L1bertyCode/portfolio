import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { SkillsPage } from "@/pages/SkillsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

import s from "./AppRouter.module.scss";
import { routeConfig } from "../config/routeConfig/routeConfig";
interface AppRouterProps { };

export const AppRouter = ({ }: AppRouterProps) => {
  return (
    <main className={s.AppRouter}>
      <Suspense fallback={
        <div className={s.loading}>Loading</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => {
            return <Route key={path}
              path={path} element={element} />;
          })}
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  );
};