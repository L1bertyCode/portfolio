import { getUserAuthData } from "@/entities/User";
import { RoutePath } from "@/shared/config/routes/routesConfig";
import { ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children?: ReactNode;
}

export const RequireAuth = memo(
  (props: RequireAuthProps) => {
    const { children } = props;
    let auth = useSelector(getUserAuthData);
    const location = useLocation();
    if (!auth) {
      return (
        <Navigate
          to={RoutePath.main}
          state={{ from: location }}
          replace
        />
      );
    }
    return children;
  }
);
