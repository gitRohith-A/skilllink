import React from 'react'
import ProfileBanner from '@/components/publicProfile/ProfileBanner'
import ProfilePosts from '@/components/publicProfile/ProfilePosts'
import ProfileAboutus from '@/components/publicProfile/ProfileAboutus'
import ProfileContactus from '@/components/publicProfile/ProfileContactus'
import ProfileReview from '@/components/publicProfile/ProfileReview'
import NotFound from '@/components/others/NotFound'

async function page({ params }: { params: any }) {

    let response
    let responseData

    try {
        response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enterprise/single/${params.slug}`, { cache: 'no-store' });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        responseData = await response.json();
    } catch (error) {
        console.error(error);

        return (
            <>
                <NotFound />
            </>
        )
    }


    return (
        <>
            <ProfileBanner data={responseData} />
            <ProfileAboutus data={responseData} />
            <ProfilePosts data={responseData.posts} />
            {/* <ProfileContactus /> */}
            {/* <ProfileReview /> */}
        </>
    )
}

export default page
