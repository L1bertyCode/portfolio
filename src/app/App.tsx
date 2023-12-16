import "./styles/index.scss";
import "@/shared/config/i18n/i18n";
import { Suspense, useEffect, useState } from "react";

import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import { useTheme } from "@/shared/lib/hooks/useTheme";

import { PageLoader } from "@/widgets/PageLoader";
import { AppRouter } from "./providers/AppRouter";
import { Modal } from "@/shared/ui/Modal/Modal";

export function App() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const loading = <PageLoader />;
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        isOpen
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className={"modal"}
      >
        App
      </Modal>
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
