import { Request, Response } from 'express'

import jwt from 'jsonwebtoken'

import bcrypt from 'bcrypt'

import crypto from 'crypto'

import User from '../schemas/Users'

import Profile from '../schemas/Profiles'

import transport from '../modules/mailer'

import { secret } from '../config/auth.json'


class AuthController {
    public async register(req: Request, res: Response): Promise<Response> {
        const { email, username } = req.body
        
        req.body.password = await bcrypt.hash(req.body.password, 10)

        try {

            if (await User.findOne({ email }))
                return res.status(400).json({ error: 'User already exists' })

            if (await User.findOne({ username }))
                return res.status(400).json({ error: 'User already exists' })

            const user = await User.create(req.body)

            const profile: Object = await Profile.create({_id: user.id })

            user.password = undefined

            const token: string = jwt.sign({ id: user.id }, secret, {
                expiresIn: 86400
            })

            return res.json({ 
                user,
                profile, 
                token 
            })

        } catch (err) {
            return res.status(400).json({ error: 'Registration failed ' + err })
        }
    }

    public async authenticate(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body
        
        const user = await User.findOne({ email }).select('+password')

        if (!user)
            return res.status(400).send({ error: 'User not found' })
    
        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Invalid password' })
    
        user.password = undefined

        const token: string = jwt.sign({ id: user.id }, secret, {
            expiresIn: 86400
        })

        res.json({ user, token })
    }

    public async forgot_password(req: Request, res: Response): Promise<Response> {
        const { email }  = req.body

        try {

            const user = await User.findOne( email ).exec()
            
            if (!user)
                return res.status(400).json({ erro: 'user not exists' })

            const token: string = crypto.randomBytes(20).toString('hex')
            
            const now: Date = new Date()
            now.setHours(now.getHours() + 1)

            await User.findByIdAndUpdate(user.id, {
                '$set': {
                    passwordResetToken: token,
                    passwordResetExpires: now
                }
            }, { new: true, useFindAndModify: false })

            transport.sendMail({
                    to: email,
                    subject: "Request Password 🔐",
                    from: 'dca40198f01b20@mailtrap.io',
                    template: 'auth/forgot_password',
                    context: { token },
                }, (err) => {
                    if (err)
                        return res.status(400).json({ erro: 'Cannot send forgot password, try again' })

                return res.json({ success: 'Send token in your e-mail'})
            })       

        } catch (err) {
            res.status(400).json({ error: 'Erro on forgot password, try again'})
        }
    }
    
    public async reset_password(req: Request, res: Response): Promise<Response> {
        const { email, token, password } = req.body

        try {

            const user = await User.findOne({ email })
            .select('+passwordResetToken passwordResetExpires')

           if (!user)
                return res.status(400).json({ error: 'User not found' })

           if (token != user.passwordResetToken)
                return res.status(400).json({ error: 'Token invalid' })  
                
            const now: Date = new Date()
            
            if (now > user.passwordResetExpires)
                return res.status(400).json({ error: 'Token expired, generate a new one' })

            user.password = password

            await user.save()

            res.json({ success: 'reset password width succes' })

        } catch (err) {
            res.status(400).json({ erro: 'Cannot reset password, try again' })
        }
    }
}

export default new AuthController()
