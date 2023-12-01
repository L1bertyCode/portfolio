import { MainPage } from "@/pages/MainPage";
import "./styles/index.scss";
import { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { routesConfig } from "@/shared/config/routes/routesConfig";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
export enum Theme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
  ORANGE = "app_orange_theme",
  BLUE = "app_blue_theme",
}

export function App() {
  const [theme, setTheme] = useState<Theme>(Theme.BLUE);
  const loading = <div>Loading...</div>;
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="content">
        <Sidebar theme={theme} setTheme={() => setTheme} />
        <Suspense fallback={loading}>
          <Routes>
            {routesConfig.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              );
            })}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
