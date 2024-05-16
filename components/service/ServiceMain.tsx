import React from 'react'
import ServiceOfferedProfile from './elements/ServiceOfferedProfile'
import PricingSticky from './PricingSticky'
import ServicesPics from './ServicesPics'
import AboutEnterprise from './AboutEnterprise'
import ReviewSticky from './ReviewSticky'
import { auth } from '@/auth'
import ReviewList from '../Home/Elements/ReviewList'

async function ServiceBanner({ responseData, params }: { responseData?: any, params?: any }) {

    const session: any = await auth()
    return (
        <div className='p-12 px-22 grid grid-cols-3'>
            <div className="col-span-2 mx-5">
                <div className="text-zinc-700 text-2xl font-semibold">{responseData.description}</div>
                <ServiceOfferedProfile data={responseData} />
                <ServicesPics data={responseData.image} />
                <AboutEnterprise data={responseData.user_id} />
                <ReviewList data={responseData.review}/>
            </div>
            <div className="col-span-1 sticky top-2">
                <PricingSticky data={responseData} />
                <ReviewSticky data={responseData} user={session?.user} params={params.post[1]} />
            </div>
        </div>
    )
}

export default ServiceBanner
