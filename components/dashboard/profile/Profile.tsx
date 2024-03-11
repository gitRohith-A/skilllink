import React, { Suspense } from 'react';
import ProfileHead from './ProfileHead';
import { getUserByEmail } from '@/Functions/User';
import { auth } from '@/auth';
import Loading from '@/components/others/loading';
import ProfileFields from './ProfileFields';
import ModalPrototype from '@/components/others/Modal';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Error from '../../../app/(protected)/error';

export const revalidate = true

export interface UserType {
    [key: string]: any;
    email: string;
    name?: string;
    password?: string;
    date: Date;
    isAdmin?: string;
    verifyEmail?: Date;
    image?: string | File,
    aboutMe: string,
    backgrounImage?: string | File,
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

const Profile: React.FC = async () => {
    const session: any = await auth();
    const user: UserType = await getUserByEmail(session.user.email);
    if (user)
        return (
            <React.Fragment>
                <Suspense fallback={<Loading />}>
                    <ProfileHead user={user} />
                    <ProfileFields user={user} />
                    <ModalPrototype user={user} />
                </Suspense>
            </React.Fragment>
        );
    else return null;
};

export default Profile;
