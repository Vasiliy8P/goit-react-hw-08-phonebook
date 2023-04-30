import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/contacts/selectors';
import ContactCard from 'components/ContactCard/ContactCard';
import './ContactList.css';

const ContactList = () => {
    const filterContacts = useSelector(selectFilterContacts);

    return (
        <ul className="Contacts__list">
            {filterContacts.length === 0
                ? <p>You havn't had the contacts yet. Please, add a contact</p>
                : filterContacts.map(contact => {
                    return (
                        <li key={contact.id} className="Contacts__item">
                            <ContactCard contact={contact} />
                        </li>
                    )
                }) 
            }
        </ul>        
    )
}

export default ContactList;