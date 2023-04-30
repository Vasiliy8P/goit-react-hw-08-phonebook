import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import { addContact } from "redux/contacts/operations";
import { Button } from "@mui/material";
import { HiPlus } from "react-icons/hi";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ContactForm = ({ handleCloseModal }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleSubmitForm = (evt) => {
        evt.preventDefault();

        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`)
        } else {
            dispatch(addContact({ name, number }));
        };

        reset();
        handleCloseModal();
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        
        switch (name) {
            case 'name':
                setName(value)
                break;
            
            case 'number':
                setNumber(value)
                break;
            
            default:
                return;
        }
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmitForm}
        >
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}                
                size="small"
                fullWidth
                margin="normal"
            />
            <TextField
                id="outlined-basic"
                label="Phone number"
                variant="outlined"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}                
                size="small"
                fullWidth
                margin="normal"
                style={{  borderColor: '#1976d2' }}
            />  
            <Button
                variant="contained"
                type="submit"
                startIcon={<HiPlus aria-label="plus" size="30" />}
                style={{ marginTop: 15, fontSize: 18 }}
            >
                Add
            </Button>
        </Box>
    )
};

export default ContactForm;