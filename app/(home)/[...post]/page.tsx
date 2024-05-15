import ServiceNavCat from '@/components/service/ServiceNavCat'
import ServiceMain from '@/components/service/ServiceMain'

import React from 'react'

async function page({ params }: { params: Record<string, any> }) {
    let response
    let responseData

    try {
        response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/post/${params.post[1]}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        responseData = await response.json();
    } catch (error) {
        console.error(error);

        return (
            <>
                Error
            </>
        )
    }

    return (
        <>
            {/* <ServiceNavCat /> */}
            <ServiceMain responseData={responseData.data} />
        </>
    )
}

export default page
