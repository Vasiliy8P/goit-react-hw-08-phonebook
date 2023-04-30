import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import avatar from './avatar.png';

const ContactCard = ({contact: { id, name, number }}) => {
    const dispatch = useDispatch();

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId))
    }

    return (
        <div>
            <Card sx={{ width: 180 }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="70"
                        image={avatar}
                        alt="avatar"
                    />
                    <CardContent sx={{ padding: "5px" }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: "5px", fontSize: 17 }}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {number}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ padding: "5px" }}>
                    <Button
                        size="small"
                        color="primary"       
                        onClick={() => (handleDeleteContact(id))}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
};

export default ContactCard;