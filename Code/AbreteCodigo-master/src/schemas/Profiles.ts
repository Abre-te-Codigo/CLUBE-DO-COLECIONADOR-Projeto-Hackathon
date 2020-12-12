import { Schema, model, Document } from 'mongoose'

interface ProfilesInterface extends Document {
    points?: number
    seal?: number
    emblem?: number
    address?: string
    zip?: number
    city?: string
    state?: string
    latitude?: number
    longitude?: number
    institute?: string
}

const ProfileSchema = new Schema({
    points: {
        type: Number,
        default: 0
    },
    seal: {
        type: Number,
        default: 0
    },
    emblem: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        default: ''
    },
    zip: {
        type: Number,
        default: 0
    },
    city: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    latitude: {
        type: Number,
        default: 0
    },
    longitude: {
        type: Number,
        default: 0
    },
    institute: {
        type: String,
        default: ''
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

export default model<ProfilesInterface>('profiles', ProfileSchema)