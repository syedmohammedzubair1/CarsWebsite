import React, { Component } from 'react'

export default class SendEnquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            mobile:'',
            email:'',
            service:'',
            car:'',
            message:'',

    }}
    ChangeData=(e)=>{
        this.setState({
            [e.target.name]:e.target.value});
           
    };
    Validate=(e)=>{
      const {name,mobile,email,service,car,message}=this.state;
      const alphaEx=/^[A-Za-z]+$/
      const MobEx=/^[0-9]+$/
      const EmailEx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      const ServiceEx=/^[0-9a-zA-Z]+$/
      const CarEx=/^[0-9a-zA-Z]+$/
      const MsgEx=/^[0-9a-zA-Z]+$/
        e.preventDefault()
        console.log(name)
        const nameError=document.getElementById("nameError");
        const mobErr=document.getElementById("mobErr");
        const EmailErr=document.getElementById("EmailErr");
        const ServiceErr=document.getElementById("ServiceErr");
        const CarErr=document.getElementById("CarErr");
        const MsgErr=document.getElementById("MsgErr");
        if (name==="") {
          nameError.textContent="Name should not be Empty";
        }
        else{
          if(name.match(alphaEx)){
            nameError.textContent="";
          }
          else{
            nameError.textContent="Name should be only alphabets";
          }
        }
        if(mobile===""){
          mobErr.textContent="Mobile Number should not be Empty";
        }
        else{
          if(mobile.match(MobEx)){
              if(mobile.length===10){
                mobErr.textContent="";
              }else
                  mobErr.textContent="Mobile Number Should be of 10 Digits";
          }
          else{
            mobErr.textContent="Mobile Number should only contain numbers";
          }
          
        }
        if(email===""){
          EmailErr.textContent="Email should not be Empty";
        }
        else{
          if(email.match(EmailEx)){
            EmailErr.textContent="";
          }else{
            EmailErr.textContent="Enter Valid Email Address";
          }
        }
        if(service===""){
          ServiceErr.textContent="Service should not be Empty";
        }else{
          if(service.match(ServiceEx)){
              ServiceErr.textContent="";
          }else{
            ServiceErr.textContent="Service should only contain alphabets and numbers";
          }}
          if(car===""){
            CarErr.textContent="Enter Car Name";
          }else{
            if(car.match(CarEx)){
                CarErr.textContent="";
            }else{
              CarErr.textContent="car name should only contain alphabets and numbers";
            }}
            if(message===""){
              MsgErr.textContent="Help Us to Solve your problem";
            }else{
              if(message.match(MsgEx)){
                  MsgErr.textContent="";
              }else{
                MsgErr.textContent="Sorry,we did'nt get you please write a clear message";
              }}
      
    }
  render(){
    const {name,mobile,email,service,car,message}=this.state
    return (
      <div>
        <h1>Feedback</h1>  
        <form onSubmit={this.Validate}>
            <input type='text'name="name"placeholder='Enter Name'value={name}onChange={this.ChangeData}className='form-control mb-3'/>   
            <p id='nameError'className='text-danger fw-bold'></p>
            <input type='text'name="mobile"placeholder='Enter Mobile Number'value={mobile}onChange={this.ChangeData}className='form-control mb-3'/>
            <p id='mobErr'className='text-danger fw-bold'></p>
            <input type='text'name="email"placeholder='Enter Email Address'value={email}onChange={this.ChangeData}className='form-control mb-3'/>
            <p id='EmailErr'className='text-danger fw-bold'></p>
            <input type='text'name="service"placeholder='Service'value={service}onChange={this.ChangeData}className='form-control mb-3'/>
            <p id='ServiceErr'className='text-danger fw-bold'></p>
            <input type='text'name="car"placeholder='Car'value={car}onChange={this.ChangeData}className='form-control mb-3'/>
            <p id='CarErr'className='text-danger fw-bold'></p>
            <textarea name="message"placeholder='Message'value={message}onChange={this.ChangeData}className='form-control mb-3'/>
            <p id='MsgErr'className='text-danger fw-bold'></p>
            <input type='submit' className='btn btn-dark'/>
            
        </form>
      </div>
    )
  }
}
