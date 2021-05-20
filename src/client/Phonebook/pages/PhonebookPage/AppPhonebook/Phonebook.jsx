import FormAddContacts from '../../PhonebookPage/components/FormAddContacts';

import ContactsFilter from '../components/ContactsFilter/ContactsFilter';
import ContactList from '../components/ContactList';

import styles from './Phonebook.module.css';

const AppPhonebook = () => {
        return (
        <div className={styles.container}>
           <h2 className={styles.title}>Your phonebook</h2>
           <FormAddContacts />
           <h2 className={styles.title}>Contacts</h2>
           <ContactsFilter />
           <ContactList />
        </div>
        )
}

export default AppPhonebook;