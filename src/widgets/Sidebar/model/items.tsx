import { RoutePath } from "@/shared/config/routes/routesConfig";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
export interface SidebarItemInterace {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGElement>>;
  authOnly?: boolean;
}
export const sidebatItemsList: SidebarItemInterace[] = [
  { path: RoutePath.main, Icon: MainIcon, text: "Main" },
  { path: RoutePath.about, Icon: AboutIcon, text: "About" },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "Profile",
    authOnly: true,
  },
];
