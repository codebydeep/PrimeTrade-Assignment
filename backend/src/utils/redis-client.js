import Redis from "ioredis";
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    retryStrategy: (times) => Math.min(times * 100, 3000),
})

export default redisClient;