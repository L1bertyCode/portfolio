import { RoutePath } from "@/shared/config/routes/routesConfig";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
export interface SidebarItemInterace {
  path: string;
  text: string;
  icon: React.FunctionComponent<React.SVGProps<SVGElement>>;
}
export const sidebatItemsList: SidebarItemInterace[] = [
  { path: RoutePath.main, icon: MainIcon, text: "Main" },
  { path: RoutePath.about, icon: AboutIcon, text: "About" },
  {
    path: RoutePath.profile,
    icon: ProfileIcon,
    text: "Profile",
  },
];