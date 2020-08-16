import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
	firstName: {
		type: Schema.Types.String,
		required: true,
	},
	lastName: {
		type: Schema.Types.String,
		required: true,
	},
	email: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	mobile: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	age: {
		type: Schema.Types.String,
	},
})

const User = mongoose.model('user', UserSchema)

export default User
