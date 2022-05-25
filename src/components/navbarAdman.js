import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Router } from 'react-router-dom';
import logo from '../imgs/logo.PNG'

const NavbarAdman = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="w-screen bodycolor">
        <div className="w-full flex justify-between p-4 bgcolor text-white">
            <div className=" flex px-10 w-[40%]  justify-between">
                <div className="flex ">

                <h2 className='text-3xl'>Capital <span className='text-xl'>shop</span></h2>
                </div>
                <div className="mt-3  ">

                <ul className='flex'>
                    
                        <li className='mx-5'> <button onClick={()=>navigate('/showHome')}>Home</button></li>
                        <li className='mx-5'> <button onClick={()=>navigate('/shop')}>Shop</button></li>
                 
                    </ul>
                </div>
            </div>
            <ul className='flex px-10 mt-3'>
                <li className='mx-5'>    <button onClick={()=>navigate('/admin')}>Admin</button></li>
                {/* <li className='mx-5'>    <button onClick={()=>navigate('/')}>Login</button></li> */}
                <li className='mx-5'>    <button onClick={()=>navigate('/')}>Logout</button></li>
            </ul>
            

       
    
        </div>
         
    

       
      

    </div>
    </>
  )
}

export default NavbarAdman