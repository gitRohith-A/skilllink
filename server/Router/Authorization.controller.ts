const express = require('express');
const User = require('../Modals/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const router = express.Router();

const dotenv = require("dotenv");
import { Request, Response } from 'express';

dotenv.config();

/*----------------------------------------------------------------------------------------------------------------------------------------------------

                                                       API's TO ADD DELETE AND ALTER THE USER DATA

-----------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------*/
// API REGISTERS THE USER DATA AND GIVE THEM THE JWT TOCKEN


router.post('/register', async (req: Request, res: Response) => {
    let success: boolean = false;

    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({ success, msg: 'user exists' });
        }

        const salt = await bcrypt.genSalt(15);
        const securePassword = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: securePassword,
            isadmin: req.body.isadmin,
        });

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, process.env.Secret_Key!);
        success = true;
        res.status(201).json({ success, token, msg: 'user created' });
    } catch (error) {
        res.status(500).json({ success, error });
    }
});


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
                return res.status(400).json({ success, error: "Enter the correct credentials" })
            }

            if (user.userStatus == "inactive") {
                return res.status(400).json({ success, error: "User Is Inactive Contact Admin" })
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
            res.status(201).json({ success, Token })
        }
        catch (error) {

            res.status(500).json({ success, error: "Internal error" })
        }
    }
)


module.exports = router 