import { Schema, model, Document } from 'mongoose'

interface PaintingInterface extends Document {
    museum: Number
    numero_do_registro: Number
    denominacao: String
    descricao?: String
    foto1?: String
    foto2?: String
    titulo?: String
    autor?: String
    tecnica?: String
    materiais?: String
    local_de_producao?: String
    data_de_producao?: String
    altura_cm?: Number
    largura_cm?: Number
    latitude?: Number
    longitude?: Number
    points: Number
    createAt: Date
}

const PaitingSchema = new Schema({
    museum: {
        type: Number,
        required: true
    },
    numero_do_registro: {
        type: Number,
        required: true
    },
    denominacao: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
    },
    foto1: {
        type: String,
    },
    foto2: {
        type: String,
    },   
    titulo: {
        type: String,
    },	
    autor: {
        type: String,
    },	
    tecnica: {
        type: String,
    },	
    materiais: {
        type: String,
    },	
    local_de_producao: {
        type: String,
    },	
    data_de_producao: {
        type: String,
    },	
    altura_cm: {
        type: Number,
    },
    largura_cm: {
        type: Number
    },
    latitude:{
        type:  Number
    },
    longitude: {
        type: Number
    },
    points: {
        type: Number
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

export default model<PaintingInterface>('paitings', PaitingSchema)