import "./styles/index.scss";
import "@/shared/config/i18n/ii18n";
import { Suspense, useEffect } from "react";

import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import { useTheme } from "@/shared/lib/hooks/useTheme";

import { PageLoader } from "@/widgets/PageLoader";
import { AppRouter } from "./providers/AppRouter";

export function App() {
  const { theme } = useTheme();
  // useEffect(() => {
  //   throw new Error();
  // }, []);
  const loading = <PageLoader />;
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="page-wrapper">
          <Suspense fallback={loading}>
            <AppRouter />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
