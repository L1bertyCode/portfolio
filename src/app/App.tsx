import "./styles/index.scss";
import { Suspense } from "react";

import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import { useTheme } from "@/shared/lib/hooks/useTheme";
import { AppRouter } from "@/providers/AppRouter";

export function App() {
  const { theme } = useTheme();

  const loading = <div>Loading...</div>;
  return (
    <div className={`app ${theme}`}>
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
