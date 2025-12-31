import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"

const app = express()

app.use(cors({
    origin: process.env.BASE_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/api/v1/auth', authRoutes)

export default app;