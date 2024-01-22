import { useState, useRef } from 'react'
import React, { useEffect } from "react";
import styled from 'styled-components';
import { NotificationSvg, CardSvg, NotSvg, TotalSvg, SettingSvg, HomeSvg, ScoreListSvg, UserSvg, TestSvg } from '../assets/Icon/icon.jsx'
import Navigate from './PanelComponents/PanelNav';
import Header from './PanelComponents/PanelHeader';
import TestCard from './PanelComponents/PanelTest';
import SkorList from './PanelComponents/PanelSkor';
import User from './PanelComponents/PanelUser';
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  export default function question() {
    const [notifi, setNotifi] = useState(false);
    const [content, setContent] = useState('')
    const [chicA, setchicA] = useState('')
    const [chicB, setchicB] = useState('')
    const [chicC, setchicC] = useState('')
    const [chicD, setchicD] = useState('')
    const [answer, setAnswer] = useState('');
    const [list, setList] = useState('')

    const handleSubmit = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/test-add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // JSON verisi gönderdiğimizi belirtiyoruz
          },
          body: JSON.stringify({
            id: 0,
            list: list,
            content: content,
            chicA: chicA,
            chicB: chicB,
            chicC: chicC,
            chicD: chicD,
            answer: answer,
          }),
        });

        if (response.ok) {
          console.log('Veri başarıyla gönderildi');
          toast.success('Başarılı')
          setList('')
          setAnswer('')
          setchicA('')
          setchicB('')
          setchicC('')
          setchicD('')
          setContent('')
          // İsteğin başarılı olması durumunda yapılacak işlemler buraya gelebilir.
        } else {
          console.error('Veri gönderme hatası:', response.status);
          // İsteğin başarılı olmaması durumunda yapılacak işlemler buraya gelebilir.
        }
      } catch (error) {
        console.error('İstek hatası:', error.message);
        // İstek sırasında bir hata olması durumunda yapılacak işlemler buraya gelebilir.
      }
    };

    return (
      <motion.div initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }} className=' bg-gray-100 h-screen'>
        <ToastContainer />
        <Navigate notifi={notifi} setNotifi={setNotifi} NotificationSvg={NotificationSvg} NotSvg={NotSvg} />
        <Header HomeSvg={HomeSvg} ScoreListSvg={ScoreListSvg} UserSvg={UserSvg} TestSvg={TestSvg} SettingSvg={SettingSvg} />
        <header className='relative p-2  rounded-xl bg-white w-[700px] h-[580px]  translate-x-[45%] top-[20px]'>
          <h2 className='text-2xl font-semibold text-[#58C555]'>Soru Ekle</h2>
          <div className="grid grid-rows gap-y-5">
            <textarea value={content} onChange={(e) => setContent(e.target.value)} type="text" placeholder="SORU İÇERİK" className=' px-2 py-2 border border-[#58C555]  text-gray-500 w-[650px]  min-h-[80px] max-h-[80px]  outline-none rounded-lg placeholder:px-2 ' />
            <input type="text" value={chicA} onChange={(e) => setchicA(e.target.value)} placeholder="A ŞIKKI" className='border border-[#58C555]  text-gray-500 w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2' />
            <input type="text" value={chicB} onChange={(e) => setchicB(e.target.value)} placeholder="B ŞIKKI" className='border border-[#58C555]  text-gray-500 w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2' />
            <input type="text" value={chicC} onChange={(e) => setchicC(e.target.value)} placeholder="C ŞIKKI" className='border border-[#58C555]  text-gray-500 w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2' />
            <input type="text" value={chicD} onChange={(e) => setchicD(e.target.value)} placeholder="D ŞIKKI" className='border border-[#58C555]  text-gray-500 w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2' />
            <input type="text" value={list} onChange={(e) => setList(e.target.value.toUpperCase())} placeholder="SORU TİPİ" className='border border-[#AD0000] text-gray-500  w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2' />
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value.toUpperCase())} placeholder="CEVAP" className='border border-blue-500 text-gray-500  w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2' />
            <button type="button" onClick={handleSubmit} name="button" className='bg-[#1C971A] px-2 text-center h-[50px] text-2xl  text-white font-bold hover:bg-[#117A0F] rounded-xl'>Soruyu Ekle</button>
          </div>

        </header>
        <div className='block relative transition duraction-100 hover:text-white bg-white shadow-2xl w-[370px] h-[200px]  translate-x-[290%] translate-y-[-72vh] rounded-lg   '>
          <div className='bg-white border-2 border-[#24AC21]  flex items-center rounded-xl w-[340px] h-[70px] relative top-10 left-4'>
            <div className='flex justify-between  w-full px-4 m-auto'>
              <p className='text-center text-md text-gray-400 w-[100px]   '>Toplam Soru</p>
              <p className='text-center text-xl   text-gray-400 w-[50px]'>100</p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
