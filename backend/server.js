const express = require("express")
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_ACCESS);
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

connectToDatabase();

app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log("server is running"));
