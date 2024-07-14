import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

function SideNav() {
  return (
    <div className='bg-gray-100 h-screen fixed w-72 border-r px-6'>
        <div className="flex items-center gap-3 hover:bg-slate-200 p-3 rounded-md cursor-pointer rounded-lg">
            <Image 
                src='/logo-1.png' 
                alt='logo' 
                width={40} 
                height={40}
            />
            <h2 className='flex gap-2 tems-center font-bold teact-[17px]'>Team Name
                <ChevronDown/>
            </h2>
        </div>
    </div>
  );
}

export default SideNav;
