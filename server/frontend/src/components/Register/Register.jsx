import React, { useState } from 'react';

import "./Register.css";
import Header from '../Header/Header';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    alert("Registration form submitted.");
  };

  return (
    <div>
      <Header />
      <div className="register_container">
        <div className="header">Sign-up</div>
        <form onSubmit={register}>
          <div className="inputs">
            <div className="input"><input type="text" name="username" placeholder="Username" className="input_field" value={userName} onChange={e=>setUserName(e.target.value)} required /></div>
            <div className="input"><input type="text" name="firstName" placeholder="First Name" className="input_field" value={firstName} onChange={e=>setFirstName(e.target.value)} required /></div>
            <div className="input"><input type="text" name="lastName" placeholder="Last Name" className="input_field" value={lastName} onChange={e=>setLastName(e.target.value)} required /></div>
            <div className="input"><input type="email" name="email" placeholder="Email" className="input_field" value={email} onChange={e=>setEmail(e.target.value)} required /></div>
            <div className="input"><input type="password" name="password" placeholder="Password" className="input_field" value={password} onChange={e=>setPassword(e.target.value)} required /></div>
          </div>
          <div className="submit_panel"><input className="submit" type="submit" value="Register" /></div>
        </form>
      </div>
    </div>
  );
};

export default Register;