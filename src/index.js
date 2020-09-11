import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { ApiResponse } from './util/api'
import authRouter from './router/authRouter'

const api = express()

// ==================================================== middleware =====================================================

api.use(bodyParser.json())

// ==================================================== middleware =====================================================

// ====================================================== routes =======================================================

api.use('/auth', authRouter)

api.all('/', (req, res) => res.send(new ApiResponse({}, 'API has started and working!')))

// ====================================================== routes =======================================================

console.log('1st branch')
console.log('change from 2nd branch')

mongoose
	.connect('mongodb://localhost:27017/base_db', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(_ => {
		api.listen(40000, () => {
			console.log('api started with port 40000!')
		})
	})
	.catch(error => {
		console.log(error.message)
	})
