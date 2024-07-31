import React, { useEffect, useState } from "react";
import '../../App.css'
import axios from 'axios'

export default function SignUp(){

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    description: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/app/signup', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
    <div className="">
      <div className="">
        <form onSubmit={handleSubmit}>
          <input type="text"
          name="fullName"
          placeholder="Full Name" 
          onChange={handleChange}
          value={formData.name}
          className="form-control form-group"
          />

          <input type="text" 
          name="email"
          placeholder="Email" 
          onChange={handleChange}
          value={formData.email}
          className="form-control form-group"
          />
          <input type="text" 
          name="phoneNumber"
          placeholder="Phone Number" 
          onChange={handleChange}
          value={formData.phoneNumber}
          className="form-control form-group"
          />

          <input type="text" 
          name="description"
          placeholder="Description" 
          onChange={handleChange}
          value={formData.description}
          className="form-control form-group"
          />

          <input type="submit" 
          className="btn btn-danger btn-block" 
          value='Submit'
          />
        </form>
      </div>
    </div>

  )
}