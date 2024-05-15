import React from 'react'
import ServiceOfferedProfile from './elements/ServiceOfferedProfile'
import PricingSticky from './PricingSticky'
import ServicesPics from './ServicesPics'
import AboutEnterprise from './AboutEnterprise'

function ServiceBanner({ responseData }: { responseData: any }) {
    return (
        <div className='p-16 px-32 grid grid-cols-3'>
            <div className="col-span-2 mx-5">
                <div className="text-zinc-700 text-2xl font-semibold">{responseData.description}</div>
                <ServiceOfferedProfile data={responseData} />
                <ServicesPics data={responseData.image} />
                <AboutEnterprise  data={responseData.user_id}  />
            </div>
            <div className="col-span-1 sticky top-2">
                <PricingSticky  data={responseData}/>
            </div>
        </div>
    )
}

export default ServiceBanner
