import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const user = { id: nanoid(3), name, number };
    this.setState(prev => {
      const isExist = prev.contacts.some(
        el => el.name.toLowerCase() === user.name.toLowerCase()
      );
      if (isExist) {
        alert(`${user.name} is already in contacts.`);
        return;
      }
      return { contacts: [...prev.contacts, user] };
    });
  };

  deleteContact = id => {
    this.setState(prev => {
      return { contacts: [...prev.contacts.filter(el => el.id !== id)] };
    });
  };

  addFilter = filterName => {
    this.setState({ filter: filterName });
  };

  filterContacts = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const currentContacts = this.filterContacts();
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm handleSubmitForm={this.addContact} />

        <h2 className="subtitle">Contacts</h2>
        <Filter setFilter={this.addFilter} />
        <ContactList
          contacts={currentContacts}
          handleDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
