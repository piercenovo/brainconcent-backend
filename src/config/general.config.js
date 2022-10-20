import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 8000
export const HOST = process.env.HOST || 'localhost'
export const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://piercenovo:localtabla778@cluster1.hakav.mongodb.net/brainDB'
export const JWT_KEY = process.env.JWT_KEY || 'FR@NV3262694!!-E/commers..%$$%&/"#$/#!!"%&elt$/ndu'
