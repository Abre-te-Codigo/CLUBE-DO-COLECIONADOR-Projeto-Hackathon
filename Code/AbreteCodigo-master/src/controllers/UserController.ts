import { Request, Response } from 'express'

import User from '../schemas/Users'

import Profile from '../schemas/Profiles'

class UserController {
    public async index (req: Request, res: Response): Promise<Response> {
        const users = await User.find()

        return res.json(users)
    }

    public async update (req: Request, res: Response): Promise<Response> {
        const { 
            _id, 
            points, 
            seal, 
            emblem, 
            address, 
            zip, 
            city, 
            state,
            latitude,
            longitude,
            institute
         } = req.body

         try {

            const verifyId = await User.findOne(_id)

            if (!verifyId)
                return res.status(401).json({ error: 'request unauthorized' })
    
            const profile = await Profile.findByIdAndUpdate(_id, {
                '$set': {
                    points,
                    seal,
                    emblem,
                    address,
                    zip,
                    city,
                    state,
                    latitude,
                    longitude,
                    institute
                }
            })
    
            return res.json(profile)

         } catch (err) {
            return res.status(400).json({ error: 'failed to update profile'})
         }
    }

    public async delete (req: Request, res: Response): Promise<Response> {  
        const {_id } = req.body

        const verifyId = await User.findOne(_id)

        if (!verifyId)
            return res.status(401).json({ error: 'request unauthorized' })

        try {

            await User.findByIdAndDelete(_id)

            return res.json({ success: 'success when deleting user' })

        } catch (err) {
            return res.status(401).json({ erro: 'failed to delete user' + err })
        }
    }
}

export default new UserController()

