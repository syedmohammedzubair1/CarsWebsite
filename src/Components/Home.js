import React from 'react'
import BannerImg from '../assets/hbanner.jpg'
function Home() {
  return (
    <div className="container p-5">
    <div className='row'>
        <div className='col-lg-6'>
            <h1>
            Happy, Safe, and Smooth Journeys Await!
            </h1>
            <p>
At Luxe Car Rentals, we ensure every ride is filled with joy and peace of mind. Whether you're off on an adventure or heading to a meeting, our well-maintained fleet and top-tier safety features guarantee a worry-free experience. Choose us for a seamless car rental service that puts your happiness and safety first, every mile of the way. Safe cars for rent with Bullet proof glasses and airbags included.            </p>
        <button className='btn btn-dark me-3  mb-3 shkx'>Know More</button>
        <button className='btn btn-warning fw-bolder mb-3 hb'>Book Now</button>
        </div>
        <div className='col-lg-6'>
            <img src={BannerImg}className='w-100'alt='No-image'/>
        </div>
    </div>
    </div>
  )
}

export default Home