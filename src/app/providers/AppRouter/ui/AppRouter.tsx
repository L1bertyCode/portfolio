import { getUserAuthData } from "@/entities/User";
import {
  AppRouteProps,
  routesConfig,
} from "@/shared/config/routes/routesConfig";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./RequireAuth";

export function AppRouter() {
  const isAuth = useSelector(getUserAuthData);
  // const routes = useMemo(() => {
  //   return Object.values(routesConfig).filter((route) => {
  //     if (route.authOnly && !isAuth) {
  //       return false;
  //     }
  //     return true;
  //   });
  // }, [isAuth]);
  const renderWithWrapper = useCallback(
    (route: AppRouteProps) => {
      return (
        <Route
          path={route.path}
          element={
            route.authOnly ? (
              <RequireAuth>{route.element}</RequireAuth>
            ) : (
              route.element
            )
          }
          key={route.path}
        />
      );
    },
    []
  );
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

      {
        Object.values(routesConfig).map(renderWithWrapper)
        // routes.map(({ path, element }) => {
        //   return (
        //     <Route path={path} element={element} key={path} />
        //   );
        // })
      }
    </Routes>
  );
}
