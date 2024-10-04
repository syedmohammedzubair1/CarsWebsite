import React from 'react';
import SendEnquiry from './SendEnquiry';
import Photo from '../assets/feedback.avif'
function Contact() {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-6'>
          <SendEnquiry/>
        </div>
        <div className='col-md-6'>
          <img src={Photo}alt='No-image'className='w-100' />
        </div>
      </div>
    </div>
  );
}

export default Contact;