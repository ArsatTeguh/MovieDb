import express from 'express'
import User from './router/routerUser.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express();


dotenv.config()
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.json())
app.use('/user',User);

export default app