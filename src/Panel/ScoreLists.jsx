import { useState,useRef } from 'react'
import {NotificationSvg,CardSvg,NotSvg,TotalSvg,SettingSvg,HomeSvg,ScoreListSvg,UserSvg,TestSvg} from '../assets/Icon/icon.jsx'
import Navigate from './PanelComponents/PanelNav';
import Header from './PanelComponents/PanelHeader';
import TestCard from './PanelComponents/PanelTest';
import SkorList from './PanelComponents/PanelSkor';
import User from './PanelComponents/PanelUser';
import {motion} from 'framer-motion'

export default function ScoreLists() {
    const [notifi,setNotifi] = useState(false);
    return (
      <motion.div   initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}  className='bg-gray-100 h-screen'>
        <Navigate notifi={notifi} setNotifi={setNotifi} NotificationSvg={NotificationSvg} NotSvg={NotSvg} />
          <Header  HomeSvg={HomeSvg} ScoreListSvg={ScoreListSvg} UserSvg={UserSvg} TestSvg={TestSvg} SettingSvg={SettingSvg}/>
          <header className='relative p-2  rounded-xl bg-white w-[700px] h-[570px]  translate-x-[45%] top-[40px]'>
              <h2 className='text-2xl font-semibold text-purple-500 mb-2'>Skor Listesi</h2>
              <div className="flex flex-cols gap-y-4">
                   <div className='flex rounded-2xl px-5 items-center text-gray-500  justify-between gap-x-5  shadow-2xl w-full  mb-5'>
                     <span>Kulanıcı adı</span>
                     <span>Mail</span>
                     <span>Skor</span>
                   </div>
              </div>
              <div className="flex flex-col gap-y-4 overflow-auto   h-[500px]">
                   <div className='flex rounded-2xl px-5 items-center text-white  justify-between gap-x-5 bg-purple-500 shadow-2xl w-full h-[50px]'>
                     <span>seher</span>
                     <span>seher@gmail.com</span>
                     <span>20</span>
                   </div>
            </div>
          </header>
       </motion.div>
    )
}
