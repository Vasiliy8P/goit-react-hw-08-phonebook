import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Button } from '@mui/material';
import { HiPlus } from 'react-icons/hi';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader/Loader';
import ModalAddContact from 'components/Modal/Modal';
import './Contacts.css';

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <div className='Contacts Main_container'>
            <div className='Contacts__wrapper'>
                <h1 className='Contacts__title'>Contacts</h1>
                <Button
                    variant="contained"
                    type="submit"
                    startIcon={<HiPlus aria-label="plus" size="30" />}
                    style={{ marginLeft: "auto", fontSize: 18 }}
                    onClick={handleOpenModal}
                >
                    Add contact
                </Button>
                <ModalAddContact openModal={openModal} handleCloseModal={handleCloseModal} />
            </div>
            <Filter />
            {isLoading && !error && <Loader />}
            <ContactList />
        </div>
    )
};

export default Contacts;
