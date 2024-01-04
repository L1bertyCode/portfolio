import { getUserAuthData } from "@/entities/User";
import { routesConfig } from "@/shared/config/routes/routesConfig";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

export function AppRouter() {
  const isAuth = useSelector(getUserAuthData);
  const routes = useMemo(() => {
    return Object.values(routesConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);
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
      {routes.map(({ path, element }) => {
        return (
          <Route path={path} element={element} key={path} />
        );
      })}
    </Routes>
  );
}
