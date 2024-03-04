import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/server/Models/User';
import connectToMongo from '@/lib/db';

interface ReqAndRes {
    req: NextApiRequest;    
    res: NextApiResponse;
}

export default async function handler({ req, res }: ReqAndRes) {
    await connectToMongo();
    const { method } = req;

    switch (method) {
        case 'GET':
            return getUser(req, res);
        case 'PUT':
            return updateUser(req, res);
        default:
            res.setHeader('Allow', ['GET', 'PUT']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}

async function getUser(req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.query;

    try {
        const user = await User.findOne({ email })
            .select('-__v -verifyEmail -provider -password');

        if (!user) {
            return res.status(404).json({ error: "No user available with the email" });
        }

        console.log(user)

        return res.status(200).json({ user });
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}

async function updateUser(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const formData = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, formData, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
    }
}
