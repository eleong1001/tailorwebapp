import React from 'react'
import { useState} from 'react'
import axios from 'axios'
import "./AppForm.css"

function Form() {
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    description: ''
  })

  

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/signup', formData);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        description: ''
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
    <div className="form-container">
      <div className='form-toplabel'>
        <h1>
          Alteration Request Form
        </h1>
        <p>
          Requests will be sent an email detailing appointment dates in 2-3 business days
        </p>
        
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="fullName">Preferred Name</label>
          <input 
            type="text"
            name="fullName"
            placeholder="Enter your preferred name" 
            onChange={handleChange}
            value={formData.name}
          />
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email"
            placeholder="Enter your email" 
            onChange={handleChange}
            value={formData.email}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input 
            type="text" 
            name="phoneNumber"
            placeholder="Enter your phone number" 
            onChange={handleChange}
            value={formData.phoneNumber}
          />
          <label htmlFor="description">Description</label>
          <textarea
          name="description"
          placeholder="Please enter a description of the service(s) that you are requesting" 
          onChange={handleChange}
          value={formData.description}
          />

          <input type="submit" 
          name="button" 
          value='Submit'
          />
        </div>
      </form>
    </div>
  )
}

export default Form