import {
  routesConfig,
} from "@/shared/config/routes/routesConfig";
import { Route, Routes } from "react-router-dom";

export function AppRouter() {
  return (
    <Routes>
      {/* {routesConfigArray.map((route) => {
        return (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}
          />
        );
      })} */}
      {Object.values(routesConfig).map(
        ({ path, element }) => {
          return (
            <Route
              path={path}
              element={element}
              key={path}
            />
          );
        }
      )}
    </Routes>
  );
}
