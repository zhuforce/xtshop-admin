import * as dotenv from 'dotenv'
let path = process.env.NODE_ENV === 'production' ? '.prod.env' : '.env'
dotenv.config({path, silent: true})