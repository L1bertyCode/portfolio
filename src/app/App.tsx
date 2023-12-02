import "./styles/index.scss";
import { Suspense, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { routesConfig } from "@/shared/config/routes/routesConfig";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import { useTheme } from "@/shared/lib/hooks/useTheme";

export function App() {
  const { theme, setTheme } = useTheme();
  const loading = <div>Loading...</div>;
  return (
    <div className={`app ${theme}`}>
      <button onClick={() => setTheme(theme)}>
        toggle theme
      </button>
      <Navbar />
      <div className="content">
        <Sidebar />
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
