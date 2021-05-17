import { connect } from 'react-redux';


import FormAddContacts from '../../PhonebookPage/components/FormAddContacts';

import ContactsFilter from '../components/ContactsFilter/ContactsFilter';
import ContactList from '../components/ContactList';
import { getContacts } from '../../../../../redux/phonebook/phonebook-operations';

import styles from './Phonebook.module.css';

const AppPhonebook = () => {
        return (
        <>
           <h2 className={styles.title}>Phonebook</h2>
           <FormAddContacts />
           <h2 className={styles.title}>Contacts</h2>
           <ContactsFilter />
           <ContactList />
        </>
        )
}

const mapDispatchToProps = dispatch => {
        return {
                fetchContacts: dispatch(getContacts())
        }
}

export default connect(null, mapDispatchToProps)(AppPhonebook);