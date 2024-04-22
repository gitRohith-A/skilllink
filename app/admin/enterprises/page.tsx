import UserTable from '@/components/adminComponents/UserTable';
import axios from 'axios'
import React from 'react'

async function page() {
  let data;

  try {
    const Object = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/get-all-users?isAdmin=enterprises`)
    data = Object.data
  } catch (error) {
    console.error(error)
  }

  if (data) {
    return (
      <UserTable data={data} heading='Users' />
    )
  } else {
    return (
      <>
        No Enterprise Signed in
      </>
    )
  }
}

export default page
