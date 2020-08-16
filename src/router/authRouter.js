import express from 'express'
import authService from '../service/authService'

const authRouter = express.Router()

authRouter.get('/login', (req, res) => {
	res.send('<h1>Login Page!</h1>')
})

authRouter.post('/register', authService.register)

export default authRouter
