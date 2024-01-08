import { useState,useRef } from 'react'
import {NotificationSvg,CardSvg,NotSvg,TotalSvg,SettingSvg,HomeSvg,ScoreListSvg,UserSvg,TestSvg} from '../assets/Icon/icon.jsx'
import Navigate from './PanelComponents/PanelNav';
import Header from './PanelComponents/PanelHeader';
import TestCard from './PanelComponents/PanelTest';
import SkorList from './PanelComponents/PanelSkor';
import User from './PanelComponents/PanelUser';
import {motion} from 'framer-motion'

export default function UserLists() {
    const [notifi,setNotifi] = useState(false);
    return (
      <motion.div   initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}  className='bg-gray-100 h-screen'>
        <Navigate notifi={notifi} setNotifi={setNotifi} NotificationSvg={NotificationSvg} NotSvg={NotSvg} />
          <Header  HomeSvg={HomeSvg} ScoreListSvg={ScoreListSvg} UserSvg={UserSvg} TestSvg={TestSvg} SettingSvg={SettingSvg}/>
          <header className='relative p-2  rounded-xl bg-white w-[700px] h-[570px]  translate-x-[45%] top-[40px]'>
              <h2 className='text-2xl font-semibold text-blue-500 mb-2'>Üye Listesi</h2>
              <div className="flex flex-cols gap-y-4">
                   <div className='flex rounded-2xl px-5 items-center text-gray-500  justify-between gap-x-5  shadow-2xl w-full  mb-5'>
                     <span>Kulanıcı adı</span>
                     <span>İsim</span>
                     <span>Mail</span>
                     <span>Durum</span>
                   </div>
              </div>
              <div className="flex flex-col gap-y-4 overflow-auto   h-[500px]">
                   <div className='flex rounded-2xl px-5 items-center text-white  justify-between gap-x-5 bg-blue-500 shadow-2xl w-full h-[50px]'>
                     <span>username</span>
                     <span>seher</span>
                     <span>seher@gmail.com</span>
                     <span>Aktif</span>
                   </div>


                   <div className='flex rounded-2xl px-5 items-center text-white  justify-between gap-x-5 bg-blue-500 shadow-2xl w-full h-[50px]'>
                     <span>username</span>
                     <span>elif</span>
                     <span>elif@gmail.com</span>
                     <span>Aktif</span>
                   </div>
            </div>
          </header>
          <div className='block relative transition duraction-100 hover:text-white bg-white shadow-2xl w-[370px] h-[200px]  translate-x-[290%] translate-y-[-72vh] rounded-lg   '>
            <div className='bg-white border-2 border-blue-500 flex items-center rounded-xl w-[340px] h-[70px] relative top-10 left-4'>
                <div className='flex justify-between  w-full px-4 m-auto'>
                    <p className='text-center text-md text-gray-400 w-[100px]   '>Toplam Üye</p>
                    <p className='text-center text-xl   text-gray-400 w-[50px]'>2</p>
                </div>
             </div>
          </div>
       </motion.div>
    )
}
