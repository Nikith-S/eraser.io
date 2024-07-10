"use client"

import React, { useEffect } from 'react'
import {Button } from '@/components/ui/button'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

function Dashboard() {
const convext= useConvex();
const {user}:any = useKindeBrowserClient();
  // const getUser = useQuery(api.user.getUser,{email:user?.email})
const createUser = useMutation(api.user.createUser)

useEffect(() => {
if(user){
 checkUser()
}
 
},[user])


const checkUser = async() => {

  const result = await convext.query(api.user.getUser,{email:user?.email});
  if(!result?.length){
    createUser({
      name:user.given_name,
      email:user.email,
      image:user.picture
    }).then(resp => {
      console.log(resp)
    })
   }
}

  return (
    <div>
      Dashboard

      <Button>
        <LogoutLink>Logout</LogoutLink>
        </Button>
    </div>
  )
}

export default Dashboard



