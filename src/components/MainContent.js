// MainContent.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './MainContent.css'; 

const MainContent = () => {
  return (
    <Container className="text-center my-5 mb-5">
      <div className="custom-button mt-5 mb-5">
        <div className="new-feature">New feature</div>
        <div className="feature-text">Check out the team dashboard  → </div>
      </div>
      <h1>Beautiful analytics to grow smarter</h1>
      <p>Powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. Trusted by over 4,000 startups.</p>
      <Button variant="primary" className="m-2">Demo</Button>
      <Button variant="outline-primary" className="m-2">Sign Up</Button>
      <img src={`${process.env.PUBLIC_URL}/Content.png`} alt='Content' />
      
      <p className='text-center mt-5'>Join 4,000+ companies already growing</p>
    </Container>
  );
};

export default MainContent;
