import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword   } from "firebase/auth";
import app from '../firebase/fireconfig'


const Register = () => {
    const [name, setName] =useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const auth = getAuth();
    const navigate = useNavigate()

    
    const handleRegistration = (e)=>{
        e.preventDefault();
        // console.log(name,email,password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
      
          alert("You Are Register & Login")
          navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });


    }




    // const register = ()=>{
    //     // navigate('/')

    // }
  return (
    <>
       <div className=' bg-black'>
        <div className="w-[35%] mx-auto text-white font-sans font-bold bg-black min-h-screen pl-7">
            <div className=" min-h-screen items-center justify-items-start">
                <div className=" row-start-2 text-4xl">
                  Register  
                  <form action="" onSubmit={handleRegistration}>
                  <div className="pt-10 pr-20">                        
                        <label className="text-sm font-sans font-medium">
                            Username
                        </label>
                        <input 
                        onChange={(e)=>setName(e.target.value)}
                            type="text" 
                            name="name" 
                            value={name}
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
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Write your password" 
                            className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"/>
                        
                    </div>
                
                    <div className="text-sm font-sans font-medium w-full pr-20 pt-14">
                        <button 
                            type="submit"   
                            className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white ">
                               Register
                        </button>
                    </div>
                    </form>
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
