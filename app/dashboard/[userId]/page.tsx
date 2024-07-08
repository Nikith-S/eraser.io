import React from 'react'
import { Button } from '@/components/ui/button'

function User() {


    const handleButton = () =>{
        console.log("hadled")
    }
  return (
    <div>
    UsePages

<div className="container">
    it is the basic components 
    <Button onClick={() => handleButton()}/>
</div>



    </div>
    
  )
}

export default User
