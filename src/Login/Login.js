import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { toast } from 'react-toastify';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth
    );




    let from = location.state?.from?.pathname || "/";
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };
    const handleUserLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }




    const navigateRegister = event => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (user) {
        navigate('/home')
    }



    const resetPassword = async (event) => {
        setEmail(event.target.value);

        await sendPasswordResetEmail(email);
        toast('Sent email');

    }
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center'>Please log in</h3>
            <Form onSubmit={handleUserLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error?.message}</p>
                {
                    loading && <h4>Loading....</h4>

                }

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to doctors chamber? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p>Forget Password? <button to='/register' className='btn btn-link pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>



        </div>
    );
};

export default Login;