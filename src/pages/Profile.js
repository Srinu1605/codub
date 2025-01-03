import React, { useState, useEffect ,} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Image, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile= () => {
  // State to hold user data
  const [user, setUser ] = useState({
    name: '',
    bio: '',
    profilePicture: 'https://via.placeholder.com/150', // Default profile picture
  });

  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser  = JSON.parse(localStorage.getItem('user'));
    if (storedUser ) {
      setUser (storedUser );
    }
  }, []);

  // Function to handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser ((prevUser ) => ({ ...prevUser , [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user)); // Save user data to localStorage
    setIsEditing(false); // Exit editing mode
    alert('Profile updated successfully!');
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage
    setUser ({ name: '', bio: '', profilePicture: 'https://via.placeholder.com/150' }); // Reset user state
    alert('Logged out successfully!');
  };

  // Internal CSS styles
  const styles = {
    container: {
      backgroundColor: 'pink', // Light background color
      minHeight: '100vh', // Full height
      padding: '20px', // Padding around the container
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333', // Darker color for the heading
    },
    card: {
      borderRadius: '15px', // Rounded corners for the card
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for the card
    },
    image: {
      width: '150px',
      height: '150px',
    },
  };

  return (
    <div style={styles.container}>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Profile</h2>
          <Card style={styles.card}>
            <Card.Body className="text-center">
              <Image
                src={user.profilePicture}
                roundedCircle
                alt="Profile"
                style={styles.image}
              />
              <Card.Title className="mt-3">{user.name || 'No Name'}</Card.Title>
              <Card.Text>{user.bio || 'No Bio'}</Card.Text>

              {/* Show either edit form or profile info based on isEditing state */}
              {isEditing ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                      type="text"
                      name="bio"
                      value={user.bio}
                      onChange={handleChange}
                      placeholder="Enter your bio"
                    />
                  </Form.Group>
                  <Form.Group controlId="formProfilePicture">
                    <Form.Label>Profile Picture URL</Form.Label>
                    <Form.Control
                      type="text"
                      name="profilePicture"
                      value={user.profilePicture}
                      onChange={handleChange}
                      placeholder="Enter profile picture URL"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-2">
                    Save Profile
                  </Button>
                  <Button variant="secondary" onClick={() => setIsEditing(false)} className="mt-2 ms-2">
                    Cancel
                  </Button>
                </Form>
              ) : (
                <>
                  <Button variant="primary" onClick={() => setIsEditing(true)} className="mt-2">
                    Edit Profile
                  </Button>
                  <Link  to="/"><Button variant="danger" onClick={handleLogout} className="mt-2 ms-2">
                    Logout
                  </Button></Link>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;