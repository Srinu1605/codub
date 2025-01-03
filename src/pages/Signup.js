import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
   
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const user = { name, email, password, mobile };
    localStorage.setItem('user', JSON.stringify(user));
    
    setName('');
    setEmail('');
    setPassword('');
    setMobile('');
    setConfirmPassword('');
    setMessage('Signup successful! User data saved.');
    setError('');
    navigate('/Dashboard');
  };

  return (
    <alert><div style={{width:'500px'}} className="container">
      <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='Name'
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Email'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Password'
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder='Confirm Password'
        />
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          placeholder='Mobile Number'
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div></alert>
  );
};

export default Signup;
