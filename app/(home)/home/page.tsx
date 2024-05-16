
import Ads from '@/components/Home/Ads'
import Categories from '@/components/Home/Categories'
import Reviews from '@/components/Home/Reviews'
import ServicesCard from '@/components/Home/ServicesCard'
import React from 'react'

async function page() {

    let data
    let responseData

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/reviews`,  { cache: 'no-store' });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        responseData = await response.json();
        data = responseData.post
    } catch (error) {
        return (
            <>
                Error
            </>
        )
    }

    return (
        <>
            <Ads />
            <Categories />
            <ServicesCard />
            <Reviews data={data} />
        </>
    )
}

export default page
