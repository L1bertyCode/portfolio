import "./styles/index.scss";
import { Suspense, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import { useTheme } from "@/shared/lib/hooks/useTheme";
import { AppRouter } from "@/providers/AppRouter";

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
          <AppRouter />
        </Suspense>
      </div>
    </div>
  );
}
