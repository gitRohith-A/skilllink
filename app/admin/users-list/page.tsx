import axios from 'axios'
import React from 'react'

async function page() {
  let data;
  try {
    data = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/get-all-users?isAdmin=user`)
  } catch (error) {
    console.error(error)
  }

  return (
    <div>
      user list
    </div>
  )
}

export default page
