import React, { Suspense } from 'react';
import ProfileHead from './ProfileHead';
import { getUserByEmail } from '@/Functions/User';
import { auth } from '@/auth';
import Loading from '@/components/others/loading';
import ProfileFields from './ProfileFields';
import ModalPrototype from '@/components/others/Modal';

export const revalidate = true

export interface UserType {
    [key: string]: any;
    email: string;
    name?: string;
    password?: string;
    date: Date;
    isAdmin?: string;
    verifyEmail?: Date;
    image?: string | undefined,
    aboutMe: string,
    backgroundImage?: string | File,
    location?: string,
    dob: Date,
    boardingStatus?: number;
    categories?: string;
    occupation?: string;
    provider: string;
    otps?: string;
}

export interface ProfileHeadProps {
    user: UserType;
}

export type FileState = File | null;

const Profile: React.FC = async () => {
    const session: any = await auth();
    const user: UserType = await getUserByEmail(session.user.email);
    if (user)
        return (
            <React.Fragment>
                    <ProfileHead user={user} />
                    <ProfileFields user={user} />
                    <ModalPrototype user={user} />
            </React.Fragment>
        );
    else return null;
};

export default Profile;
