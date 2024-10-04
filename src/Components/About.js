import React from 'react';
import HeroImg from '../assets/abthro.jpg'
function About() {
  return (
    <div className='container p-5'>
     <div className='row'>
      <div className='col-md-6'>
        <h1 className='text-center'>About Us</h1>
        <p className=''>

Welcome to Luxe Car Rentals, your trusted partner in car rental services! We are committed to providing a seamless, affordable, and hassle-free car rental experience tailored to meet the needs of every traveler. Whether you're on a business trip, a family vacation, or just need a vehicle for a special occasion, we’ve got you covered.

At Luxe Car Rentals, we offer a wide range of well-maintained vehicles, from economy and luxury cars to SUVs and vans, ensuring you find the perfect ride for your journey. Our user-friendly platform allows you to book and manage rentals easily, with flexible pickup and drop-off locations and 24/7 customer support.

We pride ourselves on delivering exceptional customer service, transparent pricing, and a commitment to safety.

</p>
      </div>
      <div className='col-md-6'>
          <img src={HeroImg}alt='Image-Unavailable'className='w-100'/>
      </div>
     </div>

    </div>
  )
}

export default About;