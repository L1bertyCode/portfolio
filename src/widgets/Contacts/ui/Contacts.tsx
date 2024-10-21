import s from "./Contacts.module.scss";
interface ContactsProps { };
export const Contacts = ({ }: ContactsProps) => {
  return (
    <div className={s.Contacts}>
      <h2>For any questions please mail me:</h2>
      <h3>libertycodeg@gmail.com</h3>
      <div>Contacts</div>
    </div>
  );
};