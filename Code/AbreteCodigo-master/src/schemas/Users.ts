import { Schema, model, Document }  from 'mongoose'


interface UserInterface extends Document {
    username: string
    name: string 
    lastname: string
    email: string
    charge: string
    password: string
    passwordResetToken: string
    passwordResetExpires: Date
    createAt: Date
}

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    name: {
        type: String,
        required: true
    }, 
    lastname: {
        type: String,
        required: true
    },   
    email: {
        type: String,
        required: true
    },
    charge: {
        type: String,
        default: 'user'
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetExpires: {
        type: Date,
        select: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})



export default model<UserInterface>('users', UserSchema) 