const express = require('express');
const app = express();
const colors = require('colors');
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

require('dotenv').config()
const PORT = process.env.PORT || 8000

// connect to database
connectDB()


// middleware setup
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) =>{
  res.status(200).json({
      message: "Welcome to the Support Desk API!"
  })
})

// routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server up on port: ${process.env.PORT} lets go!`))