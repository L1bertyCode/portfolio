import s from "./Footer.module.scss";
interface FooterProps { };
export const Footer = ({ }: FooterProps) => {
  return (
    <footer className={s.Footer}>
      <div>Footer</div>
    </footer>
  );
};