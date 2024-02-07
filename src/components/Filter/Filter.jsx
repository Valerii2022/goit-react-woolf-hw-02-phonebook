import { Component } from 'react';
import style from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { setFilter } = this.props;
    return (
      <form className={style.form}>
        <label className={style.label}>
          Find contacts by name
          <input
            className={style.input}
            type="text"
            name="name"
            onChange={e => setFilter(e.currentTarget.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </form>
    );
  }
}
