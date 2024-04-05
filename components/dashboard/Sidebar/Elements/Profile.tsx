'use client'
import React from 'react'
import { ProfileHeadProps } from '../../profile/Profile'
import ProfileDropdown from './ProfileDropdown'

export interface Session {
    user: {
        name: string;
        email: string;
        image?: string;
    };
}

export interface ProfileProps {
    session: Session;
}

function Profile({ user }: ProfileHeadProps) {
    return (
        <div>
            <div className="flex items-center">
                <div className="flex items-center ms-3">
                    <ProfileDropdown
                        user={user}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile
