import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Information</h1>
      <div className="list-group"> 
        <div className="list-group-item">
          <i class="far fa-envelope"></i>
          <strong> Email:</strong> brianfalasz@gmail.com
        </div>
        <div className="list-group-item">
          <i class="fas fa-phone"></i>
          <strong> Phone:</strong> 224-213-3434
        </div>
      </div>
    </div>
  )
}

export default Contact;
