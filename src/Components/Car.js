import React from 'react';

const Car = (item) => {
  return (
    <div className='card gr'>
               <div className='card-header text-center'>
                 <div className='card-title p-2'>
                   <h4>{item.car}</h4>
                 </div>
               </div>
               <div className='card-body c'>
                <div className='image'> <img src={item.image}alt='No-image'className='w-100 mb-2'height='100%'/></div>
                   
                 <div className='card-title'>
                   <h4>Type: {item.type}</h4>
                 </div>
                 <div className='card-text'>
                   <ul>{item.other_features.map((nitem, index) => {
                     return (<li key={index}>{nitem}</li>);
                   })}
                   </ul>
                   <hr/>
                   <ul><h5>Safety</h5>
                    {item.safety_features.map((nitem, index) => {
                     return (<li key={index}>{nitem}</li>);
                   })}
                   </ul>

                 </div>
               </div>
               <div className='card-footer d-flex justify-content-between'>
                <h5 className='mt-2'>Price/Day: {item.price_per_day}</h5>
                <button className='btn btn-warning border-black fw-bold hb'>Book Now</button>
               </div>
             </div>
  )
}

export default Car;