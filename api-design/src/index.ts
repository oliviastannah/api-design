import * as dotenv from 'dotenv'
dotenv.config() // gives us access to process.env

import app from './server'

app.listen(3000, () => {
  console.log(`listening on http://localhost:${3000}`)
})