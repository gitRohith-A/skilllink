
import React from 'react';


function Layout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

export default Layout;
