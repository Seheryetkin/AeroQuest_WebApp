import {useState,useRef,useEffect} from 'react';

export default function Navigate({notifi,setNotifi,NotificationSvg,NotSvg }) {
  return (
    <nav className='w-full transition    bg-white h-[100px]  border border-b-1 px-4 shadow-sm flex justify-between items-center m-auto'>
        <h2  className='text-[30px] font-semibold  text-gray-400'>AEROQUEST</h2>
        <p className='hover:cursor-pointer' onClick={() => setNotifi(!notifi)}>
         <NotificationSvg size='30' fill='gray'/>
           <label className='absolute top-[30px] right-[20px] w-2 h-2 bg-red-500 rounded-full'/>
        </p>

       { notifi &&
         <div style={{zIndex:1}} className='rounded-2xl absolute  bg-white w-[370px] h-[420px] shadow-2xl right-[50px] top-[60px]'>
           <div className='w-full flex items-center rounded-2xl h-[70px] bg-blue-500'>
             <p className='flex justify-between w-full px-8 flex items-center '>
               <label className='text-white'>2 Adet Soru Eklendi</label>
               <label onClick={() => setNotifi(false)} className='cursor-pointer bg-white w-10 h-10 rounded-full text-blue-500 flex items-center text-center justify-center font-semibold '>X</label>
             </p>
           </div>

           <div className='relative flex items-center top-10 w-full h-[50px] bg-blue-500  text-white'>
           <p className='flex gap-x-2  m-auto w-full px-8 flex items-center '>
             <label className='text-white'><NotSvg/></label>
             <label className='text-white'>içerik:Uçag gövdesine veri...</label>
           </p>
           </div>
         </div>
      }
    </nav>
  )
}
