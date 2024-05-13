import React from 'react'
import PostForm from '../../../../components/enterprise/PostForm'
import { auth } from '@/auth';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

async function page() {
    const session = await auth();

    return (
        <PostForm params={session.user as User} />
    );
}

export default page;
