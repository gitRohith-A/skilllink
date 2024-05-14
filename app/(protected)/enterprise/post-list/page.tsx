import React from 'react'
import PostList from '@/components/enterprise/PostList'
import { auth } from '@/auth';

async function page() {
    const session = await auth();

    return (
        <PostList params={session.user} />
    )
}

export default page
