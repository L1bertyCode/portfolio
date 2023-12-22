import "./styles/index.scss";
import "@/shared/config/i18n/i18n";
import { Suspense, useEffect } from "react";

import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import { useTheme } from "@/shared/lib/hooks/useTheme";

import { PageLoader } from "@/widgets/PageLoader";
import { AppRouter } from "./providers/AppRouter";
import { useDispatch } from "react-redux";
import { userActions } from "@/entities/User";

export function App() {
  const loading = <PageLoader />;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  return (
    <div className={`app`}>
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
