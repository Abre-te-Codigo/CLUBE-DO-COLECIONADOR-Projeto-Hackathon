import { Request, Response } from 'express'

import Painting from '../schemas/Paintings'

class PaintingController {
    public async index (req: Request, res: Response): Promise<Response> {
        const painting = await Painting.find()

        return res.json(painting)
    }

    public async create (req: Request, res: Response): Promise<Response> {
        try {

            const painting = await Painting.create(req.body)

            return res.json(painting)

        } catch (err) {
            return res.status(400).json({  error: 'failed to create painting' })
        }
    }
    
    public async update (req: Request, res: Response): Promise<Response> {
        const { 
            _id,
            museum,
            numero_do_registro,
            denominacao,
            descricao,
            foto1,
            foto2,
            titulo,
            autor,
            tecnica,
            materiais,
            local_de_producao,
            data_de_producao,
            altura_cm,
            largura_cm,
            latitude,
            longitude,
            points,
            } = req.body

        try {
            const verifyId = await Painting.findOne({ _id })

            if (!verifyId)
                return res.status(401).json({ error: 'request unauthorized' })
          
            const painting = await Painting.findByIdAndUpdate(_id, {
                '$set': {
                    museum,
                    numero_do_registro,
                    denominacao,
                    descricao,
                    foto1,
                    foto2,
                    titulo,
                    autor,
                    tecnica,
                    materiais,
                    local_de_producao,
                    data_de_producao,
                    altura_cm,
                    largura_cm,
                    latitude,
                    longitude,
                    points
                }
            })
    
            res.json(painting)

        } catch (err) {
            res.status(400).json({ error: 'failed to update painting' })
        }
    }

    public async delete (req: Request, res: Response): Promise<Response> {  
        const {_id } = req.body

        const verifyId = await Painting.findOne(_id)

        if (!verifyId)
            return res.status(401).json({ error: 'request unauthorized' })

        try {

            await Painting.findByIdAndDelete(_id)

            return res.json({ success: 'success when deleting user' })

        } catch (err) {
            return res.status(401).json({ erro: 'failed to delete user' + err })
        }
    }
}

export default new PaintingController()