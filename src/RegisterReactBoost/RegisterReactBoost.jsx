import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';
import { useState } from 'react';
const auth = getAuth(app);

function BasicExample() {
    const [passwordError, setPasswordError] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two upperCase');
            return;

        }

        if (password.length < 6) {
            setPasswordError('Please provide at six ceracter');
            return;
        }
        setPasswordError('');
        // console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const result = user.user;
                console.log(result);
            })
            .catch((error) => {
                console.log('error', error);
            })

    }
    return (
        <div className='w-25 mx-auto'>
            <h1 className='text-primary'>Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{passwordError}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default BasicExample;