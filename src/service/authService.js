import User from '../model/user'
import { ApiResponse } from '../util/api'
import { ValidationError } from '../util/error'

const register = async (req, res, next) => {
	const user = req.body
	if (await validateUser(user, next)) {
		await User.insertMany({
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			mobile: user.mobile,
			age: user.age,
		})
		const monUser = await User.findOne({ name: user.name })
		res.send(new ApiResponse({ monUser }, 'Registration Success!'))
	}
}

async function validateUser(user, next) {
	const isExistUserByEmail = await User.findOne({ email: user.email })
	const isExistUserByMobile = await User.findOne({ mobile: user.mobile })
	if (isExistUserByEmail || isExistUserByMobile) {
		return next(new ValidationError('User Already Exists!'))
	} else {
		return true
	}
}

export default {
	register,
}
