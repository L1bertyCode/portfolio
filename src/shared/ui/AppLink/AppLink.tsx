interface AppLinkProps { };
import s from "./AppLink.module.scss";
export const AppLink = ({ }: AppLinkProps) => {
  return (
    <div className={s.AppLink}>
      <div>AppLink</div>
    </div>
  );
};