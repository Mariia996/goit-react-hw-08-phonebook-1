import React from 'react';
import { connect } from 'react-redux';

import { getAllContacts, getFilter} from '../../../../../../redux/phonebook/reducer/contacts/phonebook-selectors';
import { deleteContactsFetch, getContacts } from '../../../../../../redux/phonebook/reducer/contacts/phonebook-operations';
import PhonebookItems from '../PhonebookItems/PhonebookItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContacts}) => {
    const contactElements = contacts.map(({ id, ...props }, idx) => {
        props = {
            ...props,
            onDelete: () => deleteContacts(id, idx),
        }
        return <PhonebookItems key={id} {...props} />
    });
        return ( <ul className={styles.contactList}>
                {contactElements}
            </ul> );
}

const getFilterContacts = ( contacts, filter ) => {
    if (!filter) {
        return contacts;
    }

    const filteredContacts = contacts.filter(({ name }) => name.includes(filter))
    return filteredContacts;
}

const mapStateToProps = state => {
    return {
        contacts: getFilterContacts(getAllContacts(state), getFilter(state)),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: dispatch(getContacts()),
        deleteContacts: (id, idx) => dispatch(deleteContactsFetch(id, idx)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);