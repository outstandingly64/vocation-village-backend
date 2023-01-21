import mongoose from 'mongoose'
import validator from 'validator'
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name."],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter a email."],
        validate:{
            validator:validator.isEmail,
            message:"Please enter a valid email",
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter a password."],
        minlength: 6,
    },
    lastName: {
        type: String,
        maxlength: 20,
        trim: true,
        default: "lastName",
    },
    location: {
        type: String,
        maxlength: 20,
        trim: true,
        default: "current city",
    },
});

UserSchema.plugin(uniqueValidator);

export default mongoose.model('User', UserSchema);