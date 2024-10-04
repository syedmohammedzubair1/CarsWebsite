import React from 'react';
import Car from './Car';
import Mercedes from '../assets/mercedis.jpg'
import BMW from '../assets/bmw.jpg'
import Audi from '../assets/audi.jpg'
import Tesla from '../assets/tesla.jpg'
import RR from '../assets/rr.jpg'
import Porshe from '../assets/porshe.jpg'
import Lexus from '../assets/lexus ls.jpg'
import Jaguar from '../assets/jaguar.jpg'
import Maserati from '../assets/maserati.jpg'
import Bentley from '../assets/bentley.jpg'
function Cars() {
  const data=[
    {
      "car": "Mercedes-Benz S-Class",
      "type": "Sedan",
      "safety_features": [
        "Active Brake Assist",
        "Blind Spot Monitoring",
        "Lane Keeping Assist",
        "360-Degree Camera",
        "Adaptive Cruise Control",
        "Automatic Emergency Braking"
      ],
      "other_features": [
        "Luxury Leather Interior",
        "Panoramic Sunroof",
        "Massage Seats",
        "Burmester Surround Sound System",
        "Ambient Lighting",
        "Heated and Ventilated Seats"
      ],
      "price_per_day": "₹20,000",
      "image": Mercedes,
    },
    {
      "car": "BMW 7 Series",
      "type": "Sedan",
      "safety_features": [
        "Front and Rear Parking Sensors",
        "Lane Departure Warning",
        "Collision Mitigation System",
        "Adaptive Headlights",
        "Traffic Jam Assist",
        "Surround View Camera"
      ],
      "other_features": [
        "Gesture Control",
        "Harman Kardon Sound System",
        "Rear Executive Lounge Seating",
        "Wireless Charging",
        "Heated Steering Wheel",
        "Quad-Zone Climate Control"
      ],
      "price_per_day": "₹19,500",
      "image": BMW,
    },
    {
      "car": "Audi A8",
      "type": "Sedan",
      "safety_features": [
        "Audi Pre Sense Front and Rear",
        "Lane Departure Warning",
        "Intersection Assist",
        "Night Vision Assist",
        "Adaptive Cruise Control",
        "Rear Cross-Traffic Alert"
      ],
      "other_features": [
        "Valcona Leather Upholstery",
        "Bang & Olufsen Sound System",
        "Heads-Up Display",
        "Matrix LED Headlights",
        "Executive Rear Seat Package",
        "Four-Wheel Steering"
      ],
      "price_per_day": "₹21,000",
      "image": Audi,
    },
    {
      "car": "Lexus LS",
      "type": "Sedan",
      "safety_features": [
        "Lexus Safety System+",
        "Pedestrian Detection",
        "Automatic High Beams",
        "Dynamic Radar Cruise Control",
        "Lane Tracing Assist",
        "Parking Assist"
      ],
      "other_features": [
        "Mark Levinson Audio System",
        "Premium Leather Trim",
        "12.3-inch Navigation Display",
        "Air Suspension",
        "Power Rear Sunshades",
        "Heated and Cooled Seats"
      ],
      "price_per_day": "₹18,500",
      "image": Lexus,
    },
    {
      "car": "Porsche Panamera",
      "type": "Sport Sedan",
      "safety_features": [
        "Porsche Active Safe",
        "Lane Keep Assist",
        "Traffic Sign Recognition",
        "Night Vision Assist",
        "Surround View Cameras",
        "Collision Prevention Assist"
      ],
      "other_features": [
        "Bose Surround Sound System",
        "Sport Chrono Package",
        "Adaptive Air Suspension",
        "Heated Multifunction Steering Wheel",
        "14-Way Power Seats",
        "Panoramic Roof System"
      ],
      "price_per_day": "₹22,500",
      "image": Porshe,
    },
    {
      "car": "Jaguar XJ",
      "type": "Sedan",
      "safety_features": [
        "Driver Condition Monitor",
        "Traffic Sign Recognition",
        "Adaptive Cruise Control",
        "Emergency Braking",
        "Blind Spot Assist",
        "Rear Camera Parking Aid"
      ],
      "other_features": [
        "Meridian Sound System",
        "Full LED Headlights",
        "Premium Leather Upholstery",
        "Electric Rear Window Sunblind",
        "Heated and Cooled Front and Rear Seats",
        "Panoramic Glass Roof"
      ],
      "price_per_day": "₹17,500",
      "image": Jaguar,
    },
    {
      "car": "Tesla Model S",
      "type": "Electric Sedan",
      "safety_features": [
        "Autopilot",
        "Collision Avoidance Assist",
        "Lane Departure Warning",
        "Emergency Braking",
        "Blind Spot Monitoring",
        "360-Degree Camera"
      ],
      "other_features": [
        "All-Wheel Drive",
        "Premium Interior",
        "15-Inch Touchscreen Display",
        "Over-the-Air Software Updates",
        "Air Suspension",
        "HEPA Air Filtration System"
      ],
      "price_per_day": "₹25,000",
      "image": Tesla,
    },
    {
      "car": "Maserati Quattroporte",
      "type": "Luxury Sedan",
      "safety_features": [
        "Blind Spot Detection",
        "Adaptive Cruise Control",
        "Lane Departure Warning",
        "Forward Collision Warning",
        "Rearview Camera",
        "Traffic Sign Recognition"
      ],
      "other_features": [
        "Luxurious Leather Upholstery",
        "Bowers & Wilkins Audio System",
        "Navigation System",
        "Heated Seats",
        "Sport Steering Wheel",
        "Sunroof"
      ],
      "price_per_day": "₹30,000",
      "image":Maserati,
    },
    {
      "car": "Rolls-Royce Ghost",
      "type": "Luxury Sedan",
      "safety_features": [
        "Night Vision Camera",
        "Adaptive Cruise Control",
        "Lane Departure Warning",
        "Collision Avoidance System",
        "Active Roll Stabilization",
        "Park Assist"
      ],
      "other_features": [
        "Customizable Interior",
        "Starlight Headliner",
        "Bespoke Audio System",
        "Four-Zone Climate Control",
        "Massage Seats",
        "Rear Privacy Glass"
      ],
      "price_per_day": "₹60,000",
      "image": RR,
    },
    {
      "car": "Bentley Continental GT",
      "type": "Grand Tourer",
      "safety_features": [
        "Adaptive Cruise Control",
        "Lane Assist",
        "Traffic Sign Recognition",
        "Collision Mitigation System",
        "Rear View Camera",
        "Blind Spot Monitoring"
      ],
      "other_features": [
        "Handcrafted Interior",
        "Naim for Bentley Sound System",
        "Heated and Cooled Seats",
        "Multi-Function Steering Wheel",
        "Panoramic Sunroof",
        "All-Wheel Drive"
      ],
      "price_per_day": "₹55,000",
      "image": Bentley,
    }
  ]
  
  
  return (
    <div className='container p-5'>
      <h1>Cars</h1>
      <div className='row'>
        {
         data.map((item,index)=>{
          return(
           <div key={index} className='col-md-4 cc '>
             <Car car={item.car}type={item.type}safety_features={item.safety_features}other_features={item.other_features}price_per_day={item.price_per_day}image={item.image}/>
           </div>
         )})
         }
      </div>
    </div>
  )
}

export default Cars;