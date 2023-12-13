import { useState } from 'react'
import {Link} from 'react-router-dom'
import App from '../App'
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import {Navlink} from '../utils/Navlink';


const Nav = () => {
  const [modal,setModal] = useState(false);
  const [registermodal,setRegisterModal] = useState(false);

  return  (
    <header className='flex items-center   justify-between w-full h-[70px]  text-white p-4'>
        <h2 className='font-bold  text-[30px] relative left-[5%]'>AEROQUEST</h2>
        <div  className='flex items-center  justify-center   gap-x-8 relative right-[5%] text-[20px]'>
            {
              Navlink && Navlink.map(items => {
                return (
                      <Link  key={items.id} to={items.path} className='inline-block w-[100px] h-[50px] cursor-pointer  text-center  p-2  transition duraction-500 eas-in-out  hover:underline  hover:underline-offset-4'>{items.name}</Link>
                )
              })
            }
      <button onClick={() => setModal(!modal)} className='transition duraction-500 eas-in-out border-2 cursor-pointer border-white w-[100px] h-[50px] rounded-lg font-semibold hover:bg-white hover:text-black '>Login</button>
      </div>
        {modal && <LoginModal modal={modal} setModal={setModal} setRegisterModal={setRegisterModal} registermodal={registermodal} />}
        {registermodal  && <RegisterModal setModal={setModal}  setRegisterModal={setRegisterModal} registermodal={registermodal} />}
    </header>
  )
}
export default Nav;
