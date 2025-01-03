import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'; // Correctly import Form and Button from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are included

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const storedUser  = JSON.parse(localStorage.getItem('user'));

    if (storedUser ) {
      if (storedUser .email === email && storedUser .password === password) {
        setMessage('Login successful!');
        setError('');
        // Redirect to dashboard
        navigate('/Dashboard');
      } else {
        setError('Invalid email or password.');
        setMessage('');
      }
    } else {
      setError('No user found. Please sign up first.');
      setMessage('');
      // Redirect to signup page
      navigate('/Signup');
    }
  };

  return (
    <div  style={styles.container}>
      <h2 style={styles.heading}>Login Page</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email'
            style={styles.input}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
            style={styles.input}
          />
        </Form.Group>
        <Button type="submit" style={styles.button}>Login</Button>
      </Form>
      {message && <p style={styles.message}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

// Internal CSS styles
const styles = {
  container: {
    width: '400px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9', // Light background color
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    marginTop: '100px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    marginBottom: '10px',
  },
  button: {
    width: '100%',
  },
  message: {
    color: 'green',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
};

export default Login;