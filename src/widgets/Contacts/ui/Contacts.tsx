import s from "./Contacts.module.scss";
interface ContactsProps { };
export const Contacts = ({ }: ContactsProps) => {
  return (
    <div className={s.Contacts}>
      <div>Contacts</div>
    </div>
  );
};