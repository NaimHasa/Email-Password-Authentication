import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase/firebase.init';
import BasicExample from './RegisterReactBoost/RegisterReactBoost';
const App = () => {
  const auth = getAuth(app);
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;



    console.log(email, password);

  }

  return (
    <div>

      <BasicExample></BasicExample>

      {/* <form onSubmit={handleRegister}>
        <input type="email" name="email" id=""  placeholder='Your Email' />
        <br />
        <br />
        <input type="password" name="password" id="" placeholder='Your Password' />
        <br />
        <br />
        <button type='submit'>Register</button>
      </form> */}
    </div>
  );
};

export default App;