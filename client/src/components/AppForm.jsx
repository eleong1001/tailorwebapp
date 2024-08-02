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
      const response = await axios.post('http://localhost:4000/app/signup', formData);
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
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text"
          name="fullName"
          placeholder="Full Name" 
          onChange={handleChange}
          value={formData.name}
          />

          <input type="text" 
          name="email"
          placeholder="Email" 
          onChange={handleChange}
          value={formData.email}
          />
          <input type="text" 
          name="phoneNumber"
          placeholder="Phone Number" 
          onChange={handleChange}
          value={formData.phoneNumber}
          />

          <label for="description">Description</label>
          <textarea
          name="description"
          placeholder="Description" 
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