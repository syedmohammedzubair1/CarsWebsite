import React from 'react';

function Topbar() {
  return (
    <div className='text-bg-dark topbar '>
        <div className='container '>
        <div className='row'>
        <div className='col-lg-6 py-0'>
            <p>
                <a href='tel:+919100-23-2222'><i className="bi bi-telephone-fill"></i> 9100-23-2222</a>
                <a href='mailto: luxecarrentals@gmail.com'><i className="bi bi-envelope"></i> luxecarrentals@gmail.com</a>
                </p>
        </div>
        <div className='col-md-6 d-lg-flex'>
            <div className='ms-lg-auto'><p><i className="bi bi-facebook px-lg-2"></i> <i className="bi bi-instagram px-lg-2"></i> <i className="bi bi-whatsapp px-lg-2"></i> <i className="bi bi-twitter-x px-lg-2"></i>
            </p></div>
            
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Topbar;