// src/FAQ.js
import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can change your plan at any time.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel your subscription at any time through your account settings.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, you can add additional information to your invoice through your account settings.',
    },
    {
      question: 'How does billing work?',
      answer: 'Billing is done on a monthly basis. You will be charged at the beginning of each billing cycle.',
    },
    {
      question: 'How do I change my account email?',
      answer: 'You can change your account email through your account settings.',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <p>Everything you need to know about the product and billing.</p>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            {faq.question}
            <span>{openQuestionIndex === index ? '-' : '+'}</span>
          </div>
          {openQuestionIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
      <div className="faq-contact">
        <p>Still have questions? Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default FAQ;
