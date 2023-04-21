import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilterContacts } from 'redux/contacts/selectors';
import './ContactList.css';

const ContactList = () => {
    const filterContacts = useSelector(selectFilterContacts);
    const dispatch = useDispatch ();

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId))
    }

    return (
        <ul className="Contacts__list">
            {filterContacts.map(({ id, name, number }) => {
                    return (
                        <li key={id} className="Contacts__item">
                            {name}: {number}
                            <button
                                type="button"
                                className="Contacts__btn"
                                onClick={() => (handleDeleteContact(id))}
                            >
                                Delete
                            </button>
                        </li>
                    )
                }) 
            }
        </ul>        
    )
}

export default ContactList;