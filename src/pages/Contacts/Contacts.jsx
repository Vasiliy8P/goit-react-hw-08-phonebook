import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18, color: '#010101' }}
        >
            <div>
                <h1>Phonebook</h1>
                <ContactForm />

                <h2>Contacts</h2>
                <Filter />
                {isLoading && !error && <p><Loader /></p>}
                <ContactList />
            </div>
        </div>
    )
};

export default Contacts;