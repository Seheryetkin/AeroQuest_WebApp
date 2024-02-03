
import { useState,useRef } from 'react'
import { Navigate } from 'react-router-dom'


const LoginModal = ({setModal,registermodal,setRegisterModal, isAuthenticated, setIsAuthenticated}) => {
  const [noEmail,setEmail] = useState(false)
  const [noPassword,setPassword] = useState(false)

  const showRegister = () => {
      setRegisterModal(true)
  }

  const handleLogin = () => {
    console.log("Burada da login işlemini yapman lazım, kullanıcının girdiği bilgileri veritabanında aratıp kayıtlı mı değil mi diye kontol et, kayıtlı ise setIsAuthenticated(true) ile devam etmesine izin veriyoruz.");
    setIsAuthenticated(true)
  }

  return (
    <>
    <header className={`absolute text-center   bg-white bg-opacity-20 backdrop-blur-xl  drop-shadow-lg  box-shadow rounded-2xl  opacity-2 border-2 border-white w-[400px] h-[450px] translate-x-[550px] translate-y-[80%]`}>
      <div  onClick={() => setModal(false)} className='cursor-pointer absolute w-10 h-10 bg-blue-800 right-0 top-0  rounded-bl-xl rounded-tr-xl font-semibold text-2xl text-center'>X</div>
      <span className='text-black  font-bold text-2xl relative top-10'>Login</span>
      <div className='flex flex-col justify-center gap-y-12 relative top-[70px]'>
            <div className='flex flex-row justify-between m-auto relative'>
                 <label onFocus={() => setText(!noEmail) }  className={!noEmail ? `transition duraction-500 eas-in-out text-sm relative left-8 ` : 'transition duraction-500 eas-in-out  text-sm relative left-8 -top-4'}>Email</label>
                 <input onFocus={() => setEmail(!noEmail) }  type='text' className='p-2 border-b-2  focus:outline-none border-blue-500 w-[300px] bg-transparent'/>
                  <ion-icon name="mail" class='relative -left-6'></ion-icon>
            </div>
            <div className='flex flex-row justify-between m-auto relative'>
                 <label onFocus={() => setPassword(!noPassword) }  className={!noPassword ? `transition duraction-500 eas-in-out text-sm relative left-11 ` : 'transition duraction-500 eas-in-out  text-sm relative left-11 -top-4'}>Password</label>
                <input onFocus={() => setPassword(!noPassword) }  type='password' className='p-2 relative -left-3 border-b-2  focus:outline-none border-blue-500 w-[300px] bg-transparent'/>
                  <ion-icon name="lock-closed" class='relative -left-9'></ion-icon>
            </div>

            <div className='flex  w-full  justify-between m-auto relative items-center -top-[30px]'>
            <div className='flex relative left-4 items-center gap-x-2 justify-center  m-auto'><input  type='checkbox' className=''/> Remember me</div>
                <div className='flex items-center gap-x-2 justify-center  m-auto underline underline-offset-4'>Forget Password?</div>
            </div>
            <button className='font-semibold text-xl text-center relative  -top-[50px] left-[50px] bg-blue-500 w-[300px] h-[40px] rounded-md' onClick={handleLogin}>Login</button>
            <span className='absolute left-[90px] -bottom-[15px] flex gap-x-2'>Don't  have an account? <p className='font-bold hover:underline  hover:cursor-pointer' onClick={showRegister}>Register</p></span>
      </div>
    </header>
    {registermodal && (
      <Navigate to="/register" replace={true} />
    )}
    {isAuthenticated && (
      <Navigate to="/dashboard" replace={true} />
    )}
    </>
  )
}

export default LoginModal;
