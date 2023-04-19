import { Field, Formik, Form } from "formik";
import './Register.css';
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";

const Register = () => {
    const dispatch = useDispatch()

    const handleSubmitFormRegister = (values, actions) => {
        console.log("handleSubmitForm  values:", values);
        dispatch(register(values));
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={{name: '', email: '', password: ''}}
            onSubmit={handleSubmitFormRegister}
        >
            <Form className="Form-register">
                <label className="Form-register__label">
                    Name
                    <Field type="text" name="name" autoFocus required/>
                </label>
              
                <label className="Form-register__label">
                    Email
                    <Field type="email" name="email" autoFocus required/>
                </label>
         
                <label className="Form-register__label">
                    Password
                    <Field type="password" name="password" autoFocus required/>
                </label>
         
                <button type="submit" className="Form-register__btn">Submit</button>
            </Form>            
        </Formik>
    )
};

export default Register;