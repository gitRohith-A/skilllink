
import Ads from '@/components/Home/Ads'
import Categories from '@/components/Home/Categories'
import Reviews from '@/components/Home/Reviews'
import ServicesCard from '@/components/Home/ServicesCard'
import React from 'react'

function page() {
    return (
        <>
            <Ads />
            <Categories />
            <ServicesCard />
            <Reviews />
        </>
    )
}

export default page
