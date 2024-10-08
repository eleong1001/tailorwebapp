const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/models')

router.post('/signup', (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    fullName:request.body.fullName,
    email:request.body.email,
    phoneNumber:request.body.phoneNumber,
    description:request.body.description
  })

  signedUpUser.save()
  .then(data =>{
    response.json(data)
  })
  .catch(error=>{
    response.json(error)
  })
}) 

module.exports = router