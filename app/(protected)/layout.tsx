
import React, { Suspense } from 'react';

// Lazy load Sidebar component
const SideBar = React.lazy(() => import('@/components/dashboard/Sidebar/sideBar'));

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            <Suspense fallback={
                <div>Loading Sidebar...</div>
            }>
                <SideBar >
                    {children}
                </SideBar>
            </Suspense>
        </React.Fragment>
    );
}

export default Layout;
