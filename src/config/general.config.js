import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 8000
export const HOST = process.env.HOST || 'localhost'
export const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://piercenovo:localtabla778@cluster1.hakav.mongodb.net/brainDB'
export const JWT_KEY = process.env.JWT_KEY || '~#@ASDASDA_aSDLPAOsauaccc{sa123441$'
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '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'
