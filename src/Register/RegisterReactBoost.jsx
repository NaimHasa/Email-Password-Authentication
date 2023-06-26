import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const auth = getAuth(app);

function BasicExample() {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleRegister = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
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
                setSuccess(true);
                form.reset();
            })
            .catch((error) => {
                console.log('error', error);
                setPasswordError(error.message);
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
                {success && <p className='text-success'>User Created Successfuly</p>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p><small>Already have an account?<Link to='/login'>Login</Link></small></p>
        </div>
    );
}

export default BasicExample;