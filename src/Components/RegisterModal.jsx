import { useState,useRef } from 'react'
import {Link} from 'react-router-dom'
import App from '../App'


const RegisterModal = ({RegisterModal,setRegisterModal,setModal}) => {
  const [noUsernmae,setUsername] = useState(false)
  const [noEmail,setEmail] = useState(false)
  const [noPassword,setPassword] = useState(false)
  const handleRegister = () => {
    setRegisterModal(false)
    setModal(true)
  }
  return (
    <header className={`absolute text-center   bg-white bg-opacity-20 backdrop-blur-xl  drop-shadow-lg  box-shadow rounded-2xl  opacity-2 border-2 border-white w-[400px] h-[450px] translate-x-[550px] translate-y-[80%]`}>
      <div  onClick={() => setModal(false)} className='cursor-pointer absolute w-10 h-10 bg-blue-800 right-0 top-0  rounded-bl-xl rounded-tr-xl font-semibold text-2xl text-center'>X</div>
      <span className='text-black  font-bold text-2xl relative top-10'>Register</span>
      <div className='flex flex-col justify-center gap-y-12 relative top-[70px]'>
          <div className='flex flex-row justify-between m-auto relative'>
               <label onFocus={() => setUsername(!noUsernmae) }  className={!noUsernmae ? `transition duraction-500 eas-in-out text-sm relative left-11 ` : 'transition duraction-500 eas-in-out  text-sm relative left-11 -top-4'}>Username</label>
              <input onFocus={() => setUsername(!noUsernmae) }  type='password' className='p-2 relative -left-3 border-b-2  focus:outline-none border-blue-500 w-[300px] bg-transparent'/>
                <ion-icon name="lock-closed" class='relative -left-9'></ion-icon>
          </div>
            <div className='flex flex-row justify-between m-auto relative'>
                  <label onFocus={() => setText(!noEmail) }  className={!noEmail ? `transition duraction-500 eas-in-out text-sm relative left-8 ` : 'transition duraction-500 eas-in-out  text-sm relative left-2 -top-4'}>Email</label>
                  <input onFocus={() => setEmail(!noEmail) }  type='text' className='p-2 border-b-2  focus:outline-none border-blue-500 w-[300px] bg-transparent'/>
                  <ion-icon name="mail" class='relative -left-6'></ion-icon>
            </div>
            <div className='flex flex-row justify-between m-auto relative'>
                 <label onFocus={() => setPassword(!noPassword) }  className={!noPassword ? `transition duraction-500 eas-in-out text-sm relative left-11 ` : 'transition duraction-500 eas-in-out  text-sm relative left-11 -top-4'}>Password</label>
                <input onFocus={() => setPassword(!noPassword) }  type='password' className='p-2 relative -left-3 border-b-2  focus:outline-none border-blue-500 w-[300px] bg-transparent'/>
                  <ion-icon name="lock-closed" class='relative -left-9'></ion-icon>
            </div>

            <div className='flex  w-full  justify-start m-auto relative items-center -top-[30px]'>
                <div className='flex relative left-4 items-center gap-x-2 justify-center  m-auto'><input  type='checkbox' className=''/> I agree to the terms & conditions</div>
            </div>
            <button className='font-semibold text-xl text-center relative  -top-[70px] left-[50px] bg-blue-500 w-[300px] h-[40px] rounded-md'>Register</button>
            <span className='absolute left-[90px] bottom-10 flex gap-x-2 '>Already haven an account? <p className='font-bold' onClick={handleRegister}>Login</p></span>
      </div>
    </header>
  )
}

export default RegisterModal;
