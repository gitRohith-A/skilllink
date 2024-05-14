import { auth } from '@/auth';
import ReqEnterprises from '@/components/dashboard/profile/ReqEnterprises'
import React from 'react'

async function page() {
  const session: any = await auth();
  
  return (
    <>
      <ReqEnterprises session={session}/>
    </>
  )
}

export default page
