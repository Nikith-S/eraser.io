import React from 'react'
import Image from 'next/image'

function CreateTeam() {
  return (
    <div>
   <div className="p-16">
    <Image src="/logo-black.png"
    alt='logo'
    width={200}
    height={200}/>
   </div>
     
     <div className='flex flex-col items-center mt-8'>
      <h2 className='font-bold text-[40px] py-3'> What should we call your team</h2>
      <h2 className='text-gray-500'></h2>
     </div>
     </div>
  )
}

export default CreateTeam
