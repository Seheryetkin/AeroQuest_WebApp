import { useState,useRef } from 'react'
import {Link} from 'react-router-dom'
import {NotificationSvg,CardSvg,NotSvg,TotalSvg,SettingSvg,HomeSvg,ScoreListSvg,UserSvg,TestSvg} from '../assets/Icon/icon.jsx'
import Navigate from './PanelComponents/PanelNav';
import Header from './PanelComponents/PanelHeader';
import TestCard from './PanelComponents/PanelTest';
import SkorList from './PanelComponents/PanelSkor';
import User from './PanelComponents/PanelUser';
import { motion } from 'framer-motion';

const Dashboard  = () => {
  const [notifi,setNotifi] = useState(false);
  return (
    <motion.div  initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }} className='bg-gray-100 h-screen'>
      <Navigate notifi={notifi} setNotifi={setNotifi} NotificationSvg={NotificationSvg} NotSvg={NotSvg} />
        <Header  HomeSvg={HomeSvg} ScoreListSvg={ScoreListSvg} UserSvg={UserSvg} TestSvg={TestSvg} SettingSvg={SettingSvg}/>
        <TestCard TotalSvg={TotalSvg} UserSvg={UserSvg} CardSvg={CardSvg}/>
      <SkorList/>
  </motion.div>
  )
}

export default Dashboard;
