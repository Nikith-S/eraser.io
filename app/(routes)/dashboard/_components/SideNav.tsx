import React from 'react';
import SideNavTopSection from './SideNavTopSection';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import SideNavBottomSection from './SideNavBottomSection';


  

function SideNav() {

    const {user} = useKindeBrowserClient();
    const onFileCreate = () => {


      
    }

  return (
    <div className=' h-screen fixed w-72 border-r  border-[1px]   px-6 
    flex flex-col'>
      <div className='flex-1'>
      <SideNavTopSection user={user}/>
      </div>
    
       <div>
       <SideNavBottomSection onFileCreate = {onFileCreate}/>
       </div>
    </div>
  );
}

export default SideNav;
