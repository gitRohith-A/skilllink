import ServiceMain from '@/components/service/ServiceMain'

import React from 'react'
import ServicesCard from '@/components/Home/ServicesCard'
import NavBar from '@/components/Home/NavBar'
import Footer from '@/components/Home/Footer'

async function page({ params }: { params: Record<string, any> }) {
    let response
    let responseData

    try {
        response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/post/${params.post[1]}`, { cache: 'no-store' });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        responseData = await response.json();
    } catch (error) {
        console.error(error);

        return (
            <>
                <ServicesCard />
                <Footer />
            </>
        )
    }


    return (
        <>
            {/* <ServiceNavCat /> */}
            <ServiceMain responseData={responseData.data} params={params} />
        </>
    )
}

export default page
