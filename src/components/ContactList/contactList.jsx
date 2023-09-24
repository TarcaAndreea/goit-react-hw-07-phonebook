import React from 'react';
import { ElementList } from 'components/ElementsList/ElementList';
import '../ContactList/contactList-module.css';
import { useSelector } from 'react-redux';
import { getFilterContacts } from 'Redux/selectors';

export const ContactList = () => {
  const contactsExist = useSelector(getFilterContacts);
  return (
    <ul className="contacts">
      {contactsExist.map(contact => (
        <ElementList key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
