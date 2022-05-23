import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import app from '../firebase/fireconfig'
import { getAuth, onAuthStateChanged ,signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  const handleLogin = (e)=>{
    e.preventDefault()
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigate('/')
    // Signed in 
    alert("You are login")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     console.log("you are login")
    //    navigate('/')

    //     // ...
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });

  }
  const signup = ()=>{
    console.log("You are clickingo")
    navigate('/register')


  }
  return (
    <>
    <div className=' bg-black'>
        <div className="w-[35%] mx-auto text-white font-sans font-bold bg-black min-h-screen pl-7">
            <div className=" min-h-screen items-center justify-items-start">
                <div className=" row-start-2 text-4xl">
                    Sign In      
                    <form action="" onSubmit={handleLogin}>             
                    <div className="pt-10 pr-20">                        
                        <label className="text-sm font-sans font-medium">
                            Username
                        </label>
                        <input 
                            type="text" 
                            name="username" 
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Write your username" 
                            className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"/>                            
                    </div>
                    <div className="pt-2 pr-20">
                        <label className="text-sm font-sans font-medium">
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Write your password" 
                            className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"/>
                        
                    </div>
                
                    <div className="text-sm font-sans font-medium w-full pr-20 pt-14">
                        <button 
                            type="submit"   
                            className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white ">
                                SIGN IN
                        </button>
                    </div>
                    </form> 
                </div>
                
                <button className="text-sm font-sans font-medium text-gray-400 underline p-3 mt-5" onClick={signup}>
                    Don´t have an account? Sign up
                </button>
            </div>         
        </div>

        <div className="banner col-span-8 text-white font-sans font-bold">
     
        </div>    
</div>




    </>
  )
}

export default Login