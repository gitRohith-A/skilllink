import { auth } from '@/auth'
import Footer from '@/components/Home/Footer'
import BanEnterpriseList from '@/components/publicProfile/enterpriseList/BanEnterpriseList'
import EnterpriseCard from '@/components/publicProfile/enterpriseList/EnterpriseCard'
import React from 'react'

async function page() {
    const session: any = await auth()
    return (
        <>
            <BanEnterpriseList data={session.user} />
            <EnterpriseCard />
            <Footer />
        </>
    )
}

export default page
