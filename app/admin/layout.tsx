
import React, { Suspense } from 'react';
import Loading from '../../components/others/loading';
import { auth } from '@/auth';

const SideBar = React.lazy(() => import('@/components/dashboard/Sidebar/sideBar'));

async function Layout({ children }: { children: React.ReactNode }) {

    const session = await auth()

    if (session?.user.role === 'admin') {
        return (
            <React.Fragment>
                <Suspense fallback={
                    <Loading />
                }>
                    <SideBar >
                        {children}
                    </SideBar>
                </Suspense>
            </React.Fragment>
        );
    } else {
        return (
            <> Not allowed</>
        )
    }
}

export default Layout;
