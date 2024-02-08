import { Component } from 'react';
import style from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.handleSubmitForm(this.state.name, this.state.number);
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmitForm}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            value={this.state.name}
            onChange={e => {
              this.setState({ name: e.currentTarget.value });
            }}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            value={this.state.number}
            onChange={e => {
              this.setState({ number: e.currentTarget.value });
            }}
            name="number"
            pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}?\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={style.btn}>Add contact</button>
      </form>
    );
  }
}
