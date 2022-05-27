import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Router } from 'react-router-dom';
import logo from '../imgs/logo.PNG'
import {GiHamburgerMenu} from 'react-icons/gi'
const NavbarAdman = () => {
    const [icon, setIcon]=useState(false)
    const showMenue =()=>{
        console.log("You are clicking on Menue Button")

        setIcon(icon =>icon ? false : true)
    }
    const navigate = useNavigate();
  return (
    <>
    <div className="w-screen bodycolor">
        <div className="w-full flex justify-between p-4 bgcolor text-white">
            <div className=" flex flex-col md:flex-row px-10 w-full  justify-between">
            <div className="flex justify-between  w-full ">
                    <div className="">

                <h2 className='text-3xl'>Capital <span className='text-xl'>shop</span></h2>
                    </div>
                    <div className="mt-3">

                <GiHamburgerMenu  className='md:hidden ' onClick={()=>showMenue()}/>
                    </div>

                </div>
                <div className="mt-3 ">

                <ul className={`${icon? 'flex':'hidden'} md:flex  flex-col md:flex-row justify-end md:text-right  text-center`}>
                    
                        <li className='mx-5'> <button onClick={()=>navigate('/showHome')}>Home</button></li>
                        <li className='mx-5'> <button onClick={()=>navigate('/shop')}>Shop</button></li>
                        <li className='mx-5'>    <button onClick={()=>navigate('/admin')}>Admin</button></li>
              
                <li className='mx-5'>    <button onClick={()=>navigate('/')}>Logout</button></li>
                 
                    </ul>
                </div>
            </div>
           
            

       
    
        </div>
         
    

       
      

    </div>
    </>
  )
}

export default NavbarAdman