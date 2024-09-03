const express = require("express")
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const cors = require('cors')
const path = require('path')

dotenv.config()

async function connectToDatabase() {
  try {
    const database_password = process.env.REACT_APP_DATABASE_ACCESS;
    await mongoose.connect(`mongodb+srv://userTwoDb:${database_password}@tailorwebapp.x5nz5.mongodb.net/?retryWrites=true&w=majority&appName=tailorwebapp`);
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

connectToDatabase();

app.use(express.json())
app.use(cors())

app.use('/api', routeUrls)



const buildPath = path.resolve(__dirname, "../client/dist");

app.use(express.static(buildPath))

console.log("Serving static files from:", buildPath);


app.get("/*", function(req, res){
  console.log("Catch-all route hit");
  res.sendFile(
      path.join(__dirname, "../client/dist/index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
  );
})



const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log("server is running on", PORT));
