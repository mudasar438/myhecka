import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const register = ()=>{
        navigate('/')

    }
  return (
    <>
       <div className=' bg-black'>
        <div className="w-[35%] mx-auto text-white font-sans font-bold bg-black min-h-screen pl-7">
            <div className=" min-h-screen items-center justify-items-start">
                <div className=" row-start-2 text-4xl">
                  Register  
                  <div className="pt-10 pr-20">                        
                        <label className="text-sm font-sans font-medium">
                            Username
                        </label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Write your username" 
                            className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"/>                            
                    </div>                
                    <div className="pt-10 pr-20">                        
                        <label className="text-sm font-sans font-medium">
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="username" 
                            placeholder="Write your Email" 
                            className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"/>                            
                    </div>
                    <div className="pt-2 pr-20">
                        <label className="text-sm font-sans font-medium">
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Write your password" 
                            className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"/>
                        
                    </div>
                
                    <div className="text-sm font-sans font-medium w-full pr-20 pt-14">
                        <button onClick={register}
                            type="button"   
                            className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white ">
                               Register
                        </button>
                    </div>
                </div>
                
                
            </div>         
        </div>

        <div className="banner col-span-8 text-white font-sans font-bold">
     
        </div>    
</div>
    </>
  )
}

export default Register
