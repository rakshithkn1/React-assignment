import React from 'react';
import './Social.css'; 
import { Button } from 'react-bootstrap';



const Social = () => {
  return (
    <div className='text-center social-section mt-5 mb-5'>
      <div className="company-logos d-flex justify-content-center align-items-center flex-wrap">
        <div className="company-logo d-flex align-items-center mx-3 my-2">
          <img src={`${process.env.PUBLIC_URL}/Boltsoft.png`} alt='Boltsoft' />
          <span className="ml-2">Boltsoft</span>
        </div>
        <div className="company-logo d-flex align-items-center mx-3 my-2">
          <img src={`${process.env.PUBLIC_URL}/LightBox.png`} alt='Lightbox' />
          <span className="ml-2">Lightbox</span>
        </div>
        <div className="company-logo d-flex align-items-center mx-3 my-2">
          <img src={`${process.env.PUBLIC_URL}/FeatherDev.png`} alt='FeatherDev' />
          <span className="ml-2">FeatherDev</span>
        </div>
        <div className="company-logo d-flex align-items-center mx-3 my-2">
          <img src={`${process.env.PUBLIC_URL}/sphuremark.png`} alt='Spherule' />
          <span className="ml-2">Spherule</span>
        </div>
        <div className="company-logo d-flex align-items-center mx-3 my-2">
          <img src={`${process.env.PUBLIC_URL}/Globalbank.png`} alt='GlobalBank' />
          <span className="ml-2">GlobalBank</span>
        </div>
        <div className="company-logo d-flex align-items-center mx-3 my-2">
          <img src={`${process.env.PUBLIC_URL}/Neitsieze.png`} alt='Nietzsche' />
          <span className="ml-2">Nietzsche</span>
        </div>
      </div>
      <p className='text mt-5'>Features</p>
      <h1>Analytics that feels it's from the future</h1>
      <h6>Powerful, self-serve product and growth analytics to help you convert, engage,<br />and retain more users. Trusted by over 4,000 startups.</h6>
      
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4 text-center'>
            <img className='mt-2' src={`${process.env.PUBLIC_URL}/messageicon.png`} alt='messageicon' />
            <h6 className='mb-1'>Share team inboxes</h6>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          </div>
          <div className='col-md-4 text-center'>
            <img src={`${process.env.PUBLIC_URL}/Delivericon.png`} alt='delivericon' />
            <h6>Deliver instant answers</h6>
            <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          </div>
          <div className='col-md-4 text-center'>
            <img src={`${process.env.PUBLIC_URL}reporticon.png`} alt='reporticon' />
            <h6>Manage your team with reports</h6>
            <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.</p>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-md-4 text-center'>
            <img src={`${process.env.PUBLIC_URL}customers.png`} alt='customers' />
            <h6>Connect with customers</h6>
            <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
          </div>
          <div className='col-md-4 text-center'>
            <img src={`${process.env.PUBLIC_URL}Connect.png`} alt='connect' />
            <h6>Connect the tools you already use</h6>
            <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
          </div>
          <div className='col-md-4 text-center'>
            <img src={`${process.env.PUBLIC_URL}people.png`} alt='people' />
            <h6>Our people make the difference</h6>
            <p>We're an extension of your customer service team, and all of our resources are free. Chat with our friendly team 24/7 when you need help.</p>
          </div>
        </div>
      </div>
      <img className = "mt-5" src={`${process.env.PUBLIC_URL}companylogo.png`} alt='companylogo'/>
      <h1>We've been using Untitled to kick start every new <br/>project and can't imagine working without it.</h1>
       <img className='text-centre mt-4' src={`${process.env.PUBLIC_URL}Avatar.png`} alt='avatar'/>
       <h6>Candice Wu</h6>
       <p>Product Manager, Sisyphus</p>
       <p className='features text-centre mt-5'>features</p>
       <h1>Cutting-edge features for advanced analytics</h1>
       <p>Powerful,Self-serve product and growth analytics to help you convert,engage,<br/>and retain more users.Trusted by over 4,000 startups.</p>
       <img className='text-centre mt-2' src={`${process.env.PUBLIC_URL}phone.png`} alt='phone'/>
       <div className='container mt-0'>
        <div className='row'>
        <div className='col-md-4 text-center'>
            <img className='mt-2' src={`${process.env.PUBLIC_URL}messageicon.png`} alt='messageicon' />
            <h6 className='mb-1'>Share team inboxes</h6>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            <Button className='button '>Learn more   → </Button>
          </div>
          <div className='col-md-4 text-center'>
            <img src={`${process.env.PUBLIC_URL}Delivericon.png`} alt='delivericon' />
            <h6>Deliver instant answers</h6>
            <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <Button className='button '>Learn more   → </Button>
          </div>
          <div className='col-md-4 text-center'>
            <img src={`${process.env.PUBLIC_URL}reporticon.png`} alt='reporticon' />
            <h6>Manage your team with reports</h6>
            <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.</p>
            <Button className='button '>Learn more   → </Button>
          </div>
         </div>
      </div>
   </div>
  );
}

export default Social;
 
