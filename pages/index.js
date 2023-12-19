import { useState } from 'react'
import Overview from '@/components/Overview'
import Control from '@/components/Control'
import Audit from '@/components/Audit'


export default function Home() {
  const [menu, setMenu] = useState(1)
  return (
    <div className='bg-[#191516] w-full min-h-screen pb-8'>
      <div id='navbar' className='flex p-5 desc text-white justify-between items-center w-full'>
        <div className='w-1/4'>
          <svg className='stroke-[#FC7944]' width="64" height="64" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" strokeLinecap="round" stroke-linejoin="round" d="M38.874 26.237L35 24l3.874-2.237a5.5 5.5 0 0 0-5.5-9.526L29.5 14.474V10a5.5 5.5 0 0 0-11 0v4.474l-3.874-2.237a5.5 5.5 0 0 0-5.5 9.526L13 24l-3.874 2.237a5.5 5.5 0 0 0 5.5 9.526l3.874-2.237V38a5.5 5.5 0 0 0 11 0v-4.474l3.874 2.237a5.5 5.5 0 0 0 5.5-9.526M18.5 14.474L35 24m-16.5 9.526L35 24" />
          </svg>
        </div>
        <div className='flex space-x-10 w-2/4 justify-center'>
          <div onClick={() => setMenu(1)} className={menu === 1 ? 'cursor-pointer' : 'cursor-pointer opacity-50'}>Overview</div>
          <div onClick={() => setMenu(2)} className={menu === 2 ? 'cursor-pointer' : 'cursor-pointer opacity-50'}>Control</div>
          <div onClick={() => setMenu(3)} className={menu === 3 ? 'cursor-pointer' : 'cursor-pointer opacity-50'}>Audit</div>
        </div>
        <div className='w-1/4 flex justify-end'>
          <div className='rounded-full w-fit bg-[#FC7944] text-black p-2 px-4'>#SmartIndiaHackathon</div>
        </div>
      </div>
      <div className='mt-10'>

      {
        menu == 1 && <Overview />
      }
      {
        menu == 2 && <Control />
      }
      {
        menu == 3 && <Audit />
      }
      </div>
    </div>
  )
}
