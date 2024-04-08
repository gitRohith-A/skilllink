import React from 'react'
import ServiceOfferedProfile from './elements/ServiceOfferedProfile'
import PricingSticky from './PricingSticky'
import ServicesPics from './ServicesPics'
import AboutEnterprise from './AboutEnterprise'

function ServiceBanner() {
    return (
        <div className='p-16 px-32 grid grid-cols-3'>
            <div className="col-span-2">
                <div className="text-zinc-700 text-2xl font-semibold">I will do figma website design or website mockup design by figma</div>
                <ServiceOfferedProfile />
                <ServicesPics />
                <AboutEnterprise />
            </div>
            <div className="col-span-1 sticky top-2">
                <PricingSticky />
            </div>
        </div>
    )
}

export default ServiceBanner
