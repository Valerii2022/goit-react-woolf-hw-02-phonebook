import { Component } from 'react';
import style from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contacts, handleDeleteContact } = this.props;
    return (
      <ul className={style.list}>
        {contacts.map(el => {
          return (
            <li key={el.id} className={style.item}>
              <span>
                {el.name}: {el.number}
              </span>
              <button
                className={style.btn}
                id={el.id}
                onClick={() => handleDeleteContact(el.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
