
import React, { Suspense } from 'react';
import Loading from '../../components/others/loading';

// Lazy load Sidebar component
const SideBar = React.lazy(() => import('@/components/dashboard/Sidebar/sideBar'));

function Layout({ children }: { children: React.ReactNode }) {
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
}

export default Layout;
