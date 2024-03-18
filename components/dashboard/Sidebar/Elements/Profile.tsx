'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { profileData } from '../data/profileData'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/lib/features/loadingSlice'
import { ProfileHeadProps, UserType } from '../../profile/Profile'
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
