import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading




    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('your two password did not matched')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')

    };

    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center text-success'>Please Register</h3>
            <Form onSubmit={handleCreateUser} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{error}</p>
                <Button variant="success" type="submit">
                    Register
                </Button>
            </Form>
            <p>
                Already have an account? <Link className='form-link text-decoration-none text-success ' to='/login'>Please Login</Link>
            </p>


        </div>

    );
};

export default Register;