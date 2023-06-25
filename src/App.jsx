import React from 'react';
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase/firebase.init';
const App = () => {
  const auth = getAuth(app);
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;



    console.log(email, password);

  }

  return (
    <div className='App'>
      <form onSubmit={handleRegister}>
        <input type="email" name="email" id="" placeholder='Your Email' />
        <br />
        <br />
        <input type="password" name="password" id="" placeholder='Your Password' />
        <br />
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default App;