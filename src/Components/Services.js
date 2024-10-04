import React from 'react';

function Services() {
  const data=[
    {
      "title": "Daily & Weekly Car Rentals",
      "description":["Flexible short-term car rental options with a wide range of vehicles", 
        "from economy to luxury",
         "at competitive rates.",] 
    },
    {
      "title": "Long-Term Rentals",
      "description":["Cost-effective solutions for extended rentals with discounts for monthly or longer durations"," offering the convenience of having a vehicle without ownership.",] 
    },
    {
      "title": "Corporate Rentals",
      "description":["Tailored packages and competitive rates for businesses and employees"," with priority customer support for seamless corporate travel."] 
    },
    {
      "title": "Airport Pickup & Drop-off",
      "description":["Convenient car delivery and return services at major airports"," allowing travelers to avoid waiting and start their journey right away."
    ] },
    {
      "title": "Luxury & Exotic Car Rentals",
      "description":["Premium luxury and exotic cars for special occasions or business events"," offering performance, style, and comfort."] 
    },
    {
      "title": "Chauffeur Services",
      "description":["Professional chauffeur services for weddings"," VIP events","  corporate travel"," providing a first-class experience with trained drivers."] 
    },
    {
      "title": "One-Way Rentals",
      "description":["Travel without the hassle of returning the car to the original location by opting for a one-way rental"," offering maximum flexibility."] 
    },
    {
      "title": "Vehicle Protection Plans",
      "description":["Comprehensive protection plans for peace of mind during your rental"," covering potential incidents and offering various levels of coverage."] 
    },
    {
      "title": "24/7 Customer Support",
      "description":["Round-the-clock support for booking inquiries or assistance during your rental period","ensuring a hassle-free experience on the road."] 
    }
  ]
  
  return (
    <div className='container p-5'>
      <h1>Services</h1>
      <div className='row'>
        {
          data.map((item, index) => {
            return(
          <div key={index} className='col-md-4 cc '>
              <div className='card gr'data-aos="flip-left">
                <div className='card-header p-3 text-bg-dark text-center'><div className='card-title'>
                  <h4>{item.title}</h4>
                  </div></div>
                <div className='card-body'>
                
                  <div className='card-text'>
                  <ul>{
                    item.description.map((nitem,index)=>{
                      return(<li key={index}>{nitem}</li>);
                    })
                  }
                  </ul>               
                </div>
                </div>
              </div>
          </div>
            );
        })}
      </div>
    </div>
  )
}

export default Services;