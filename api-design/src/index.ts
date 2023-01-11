import * as dotenv from 'dotenv'
dotenv.config() // gives us access to process.env

import app from './server'

process.on('uncaughtException', () => { // handles uncaught exceptions

})

process.on('unhandledRejection', () => { // handles uncaught rejections

})

app.listen(3000, () => { 
  console.log(`listening on http://localhost:${3000}`)
})