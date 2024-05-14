import express, { Request, Response } from 'express';
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var dotenv = require("dotenv");

import User from '../Models/User';

const router = express.Router();
dotenv.config();

/*----------------------------------------------------------------------------------------------------------------------------------------------------

                                                       API's TO ADD DELETE AND ALTER THE USER DATA

-----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------*/
// API REGISTERS THE USER DATA AND GIVE THEM THE JWT TOCKEN

router.post('/register',
    async (req: Request, res: Response) => {
        let success = "false"
        try {
            let user = await User.findOne({ email: req.body.email })

            if (user) {
                return res.status(400).json({ success, msg: 'User Already Exists' });
            }

            const Salt = await bcrypt.genSalt(15);
            const Secure_password = await bcrypt.hash(req.body.password, Salt);

            user = await User.create({
                email: req.body.email,
                name: req.body.name,
                password: Secure_password,
                isAdmin: 'user',
            })

            success = 'true'
            res.status(200).json({ success, msg: "user created" })

        } catch (error) {
            res.status(500).json({ success, error: error })
        }
    }
)

/*---------------------------------------------------------------------------------------------------------------------------------------------------*/


/*---------------------------------------------------------------------------------------------------------------------------------------------------*/
// GET THE DATA AND VERIFY THE CREDINTALS AND GENERATE TOKEN AND SEND's IN RESPONSE

router.post('/login',
    async (req: Request, res: Response) => {
        let success = false;
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ success, error: "User Does not Exist" })
            }

            const PasswordCompare = await bcrypt.compare(password, user.password);
            if (!PasswordCompare) {
                return res.status(400).json({ success, error: "Enter correct Password" })
            }

            const data = {
                user: {
                    id: user.id
                }
            }
            const Token = jwt.sign(data, process.env.Secret_Key);
            success = true;
            res.status(201).json({ success, user })
        }
        catch (error) {

            res.status(500).json({ success, error: "Internal error" })
        }
    }
)

router.post('/register/provider',
    async (req: Request, res: Response) => {
        let success = "false"

        try {
            let user = await User.findOne({ email: req.body.email })

            if (user) {
                return res.status(400).json({ success, msg: 'User Already Exists' });
            }

            user = await User.create({
                email: req.body.user.email,
                name: req.body.user.name,
                isAdmin: 'user',
                image: req.body.user.image,
                provider: req.body.account.provider,
                verifyEmail: new Date(),
            })

            success = 'true'
            res.status(200).json({ success, user })

        } catch (error) {
            res.status(500).json({ success, error: error })
        }
    }
)

module.exports = router 