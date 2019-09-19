import React, { useState } from 'react';
import Input from '../components/input/InputComponent';

const HomePageComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log({ email, password });
  };

  return (
    <div className="flex-container">
      <div className="card login-container">
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            id="emailInput"
            Type="email"
            value={email}
            handleChange={e => setEmail(e.target.value)}
            Required={true}
          ></Input>
          <Input
            label="Password"
            id="passwordInput"
            Type="password"
            value={password}
            handleChange={e => setPassword(e.target.value)}
            Required={true}
          ></Input>
          <div className="has-text-centered">
            <button className="button is-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePageComponent;
