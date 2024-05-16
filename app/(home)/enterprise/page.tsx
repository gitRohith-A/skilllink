import React from 'react'
import ProfileBanner from '@/components/publicProfile/ProfileBanner'
import ProfilePosts from '@/components/publicProfile/ProfilePosts'
import ProfileAboutus from '@/components/publicProfile/ProfileAboutus'
import ProfileContactus from '@/components/publicProfile/ProfileContactus'
import ProfileReview from '@/components/publicProfile/ProfileReview'
function page() {
    return (
        <>
            <ProfileBanner />
            <ProfileAboutus />
            <ProfilePosts />
            <ProfileContactus />
            <ProfileReview />
        </>
    )
}

export default page
