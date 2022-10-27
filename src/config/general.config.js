import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 8000
export const HOST = process.env.HOST || 'localhost'
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/brainDB'
export const JWT_KEY = process.env.JWT_KEY || '~#@ASDASDA_aSDLPAOsauaccc{sa123441$'
