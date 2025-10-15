import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080

//config router


//config  static file
app.use(express.static('public'))

app.get('/', (_req, res) => {
  res.send('hello work')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

export default app