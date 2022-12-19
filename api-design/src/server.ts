import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'


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


export default app