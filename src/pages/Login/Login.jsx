import { Field, Form, Formik } from "formik";
import './Login.css';
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmitFormLogin = (values, actions) => {
        dispatch(login(values));
        actions.resetForm();
    }

    return (
        <>
            <h2>Please login</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmitFormLogin}
            >
                <Form className="Form-login">
                    <label className="Form-login__label">
                        Email
                        <Field type="email" name="email" autoFocus required />
                    </label>
         
                    <label className="Form-login__label">
                        Password
                        <Field type="password" name="password" autoFocus required />
                    </label>
         
                    <button type="submit" className="Form-login__btn">Submit</button>
                </Form>
            </Formik>
        </>
    )
};

export default Login;