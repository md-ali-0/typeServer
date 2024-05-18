import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/routes'

const app: Application = express()

// Parser

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.use('/api/v1', router)

export default app
