import React, { Suspense, ReactNode } from 'react';
import Loading from '@/components/others/loading';

interface LayoutProps {
  children: ReactNode;
  params: Record<string, any>; 
}

const Layout: React.FC<LayoutProps> = ({ children, params }) => {

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
