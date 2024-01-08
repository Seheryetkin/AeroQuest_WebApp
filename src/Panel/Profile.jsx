import { useState,useRef } from 'react'
import {NotificationSvg,CardSvg,NotSvg,TotalSvg,SettingSvg,HomeSvg,ScoreListSvg,UserSvg,TestSvg} from '../assets/Icon/icon.jsx'
import Navigate from './PanelComponents/PanelNav';
import Header from './PanelComponents/PanelHeader';
import TestCard from './PanelComponents/PanelTest';
import SkorList from './PanelComponents/PanelSkor';
import User from './PanelComponents/PanelUser';
import { motion } from 'framer-motion';

export default function Profile() {
  const [notifi,setNotifi] = useState(false);
  const [profile,setProfile] = useState(false);
    return (
      <motion.div   initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}  className='bg-gray-100 h-screen'>
        <Navigate notifi={notifi} setNotifi={setNotifi} NotificationSvg={NotificationSvg} NotSvg={NotSvg} />
          <Header  HomeSvg={HomeSvg} ScoreListSvg={ScoreListSvg} UserSvg={UserSvg} TestSvg={TestSvg} SettingSvg={SettingSvg}/>
          <header className='relative p-2  rounded-xl bg-white w-[700px] h-[350px]  translate-x-[45%] top-[40px]'>
              <h2 className='text-2xl font-semibold text-black'>Profil</h2>
          {profile && (
            <div className="grid grid-rows gap-y-5">
              <input type="text" placeholder="username" className='border border-black  text-gray-500 w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2'/>
              <input type="text" placeholder="Mail" className='border border-black  text-gray-500 w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2'/>
              <button type='button' onClick={() => alert('başarılı')} className='bg-blue-500 w-[100px] h-[50px] p-2 text-white rounded-sm text-lg'>Kaydet</button>
            </div>
          )}
          {
            profile === false ? (
                <div className="grid grid-rows gap-y-5">
                 <div type="text" placeholder="username" className='bg-white  shadow-md p-2 text-xl text-gray-500 w-[650px] h-[50px] outline-none rounded-lg '>Seher</div>
                  <div type="text" placeholder="username" className='bg-white shadow-md p-2 text-xl    text-gray-500 w-[650px] h-[50px] outline-none rounded-lg '>seher@gmail.com</div>
                </div>
            ):null
          }
          <button type="button"  onClick={() => setProfile(!profile)} name="button" className='bg-black px-2 text-center h-[50px] w-full mt-12 text-2xl  text-white font-bold hover:bg-zinc-700 rounded-xl'>Düzenle</button>
          </header>
         </motion.div>
    )
}
