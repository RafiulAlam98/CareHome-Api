import express, { Application } from 'express'
import cors from 'cors'
import routes from './app/routes'

const app: Application = express()

//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/', routes)

export default app
