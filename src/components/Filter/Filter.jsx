import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilterValue } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Filter.css';

const Filter = () => {
    const filterValue = useSelector(selectFilterValue);
    const dispatch = useDispatch();
    
    const handleChangeFilter = (evt) => {
        dispatch(setFilter(evt.target.value))
    };

    return (
        <div>
            <p className='Filter__title'>Find contacts by name:</p>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >                        
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={filterValue}
                    onChange={handleChangeFilter}
                    style={{ margin: 0, }}
                    size="small"
                />
            </Box>
        </div>
    )
};

export default Filter;
