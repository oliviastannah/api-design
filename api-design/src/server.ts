import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './middleware'
import { createUser, signin } from './handlers/user'


const app = express();

app.use(cors()) // middleware for cors policy
app.use(morgan('dev')) // middleware that logs requests
app.use(express.json()) // middleware that allows client to send json
app.use(express.urlencoded({ extended: true })) // middleware that allows client to add query string / params

// app.use((req, res, next) => { // stops all responses
//   res.status(401)
//   res.send("Nope!")
// })

app.get('/', (req, res) => {
  console.log('hello from express')
  res.status(200)
  res.json({ message: 'hello' })
})

app.use('/api', protect, router)

app.post('/user', createUser)
app.post('/signin', signin)

app.use((err, req, res, next) => { // error handler has four arguments and handles synchronous errors
  if (err.type === "auth") {
    res.status(401);
    return res.send('Not authorised')
  }
  if (err.type === 'input') {
    res.status(400)
    return res.send('Invalid input')
  }
  res.status(500)
  res.json({ message: "Oops, thats on us" })
})

export default app

// async errors need to be directed to error handler using next()