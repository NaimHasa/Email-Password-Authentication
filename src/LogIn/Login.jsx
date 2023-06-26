import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';
const auth = getAuth(app);

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                const result = result.user;
                return result;
            })
            .catch(error => {
                console.log('error', error);
            })

    }
    return (
        <div>
            <h1 className='text-center text-primary'>Please LogIn </h1>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <div className="mb-3 row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" name='email' className="form-control" id="inputEmail" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name='password' className="form-control" id="inputPassword" />
                    </div>
                </div>
                <button className="btn btn-primary items-center" type="submit">Button</button>
                <p><small>No account yet? <Link to='/register'>Register</Link></small></p>
            </form>
        </div>
    );
};

export default Login;