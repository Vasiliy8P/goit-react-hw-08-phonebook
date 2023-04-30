import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import { Button, TextField } from "@mui/material";
import { object, string } from 'yup';
import './Register.css';

const validationSchema = object({
  email: 
    string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password:     
    string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

const Register = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit:             
            (values, actions) => {
            dispatch(register(values));
            actions.resetForm();
        }
    });

    return (
        <div className="Register-container">
            <p className="Register-title">Please register</p>
            <form
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: 300,
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    label="Name"
                    variant="outlined"
                    type="text"
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    size="small"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    size="small"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    size="small"
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    style={{
                        marginTop: 15,
                        fontSize: 14,
                        width: 120,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    Register
                </Button>
            </form>
        </div>
    )
};

export default Register;
