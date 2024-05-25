import React from 'react'
import FormList from '@/components/enterprise/FormsList'
import { auth } from '@/auth';

async function page() {
    const session = await auth();

    return (
        <FormList params={session?.user} />
    )
}

export default page
