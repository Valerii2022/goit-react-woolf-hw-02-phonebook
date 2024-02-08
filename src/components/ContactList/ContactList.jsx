import style from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={style.item}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              className={style.btn}
              id={contact.id}
              onClick={() => handleDeleteContact(contact.id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
