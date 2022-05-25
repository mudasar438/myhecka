import React from 'react'
import {app} from '../firebase/fireconfig'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const auth = getAuth();
    const Navigate = useNavigate()


signOut(auth).then(() => {
    Navigate('/login')
    alert("Logout ")
  
}).catch((error) => {
    alert("Error in Logout Process")
  // An error happened.
});
  return (
   <>
   <div className="">
       Logout
   </div>
   </>
  )
}

export default Logout;