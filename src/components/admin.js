import React from 'react'
import {app,database} from '../firebase/fireconfig'
import "firebase/storage";
import { collection ,  addDoc, getDocs, doc ,updateDoc, deleteDoc} from 'firebase/firestore'
  import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    getMetadata,
    listAll,
  } from "firebase/storage";
import { useState } from 'react'
import { setPersistence } from 'firebase/auth'
import { useRef } from 'react'
import { async } from '@firebase/util';

const Adman = () => {
  
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [detail, setDetail]=useState('')
  const [age, setAge] = useState(null)
  const databaseRef = collection(database, "CRUD DATA")
  console.log(name)
  console.log(price)
  // set data into Firbase database 
  const inputEl = useRef(null);
const getData = (link)=>{
  addDoc(databaseRef, {
    name:name,
    size:size,
    price:price,
    detail:detail,
    image:link

  })
 
  .then(()=>{
    alert("Data add Into Firestore Database/Storage")
    getData()
   
   
  })
  .catch((err)=>{
    console.error(err.message)
  })

}
const [file, setFile] = useState(null);
const storage = getStorage();
const metadata = {
  contentType: "image/jpeg",
};
const uplode = (e) => {
  e.preventDefault()


  var file = inputEl.current.files[0];
  setFile(file);
  const storageRef = ref(storage, "images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
         
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
        break;
        case 'storage/canceled':
          break;
        case 'storage/unknown':
         break;
      }
    }, 
     () => {
   
      getDownloadURL(uploadTask.snapshot.ref).then ((downloadURL) =>{
        getData(downloadURL)
        console.log('File available at which is uplode i', downloadURL);
      });
    }
  );
};



  return (
    <div className="container mx-auto ">
			<div className=" px-6 my-12  ">
			
				<div className="w-full  flex  justify-between wrap ">
				
					
					
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border border-red mx-5">
						<h3 className="pt-4 text-2xl text-center">Laptops</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded"   onSubmit={getData}>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
									Model No
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								
                    value={name}
										type="text"
                    name='name'
										placeholder="Dell 4500"
                 
                    onChange={(e)=>setName(e.target.value)}
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" >
									Size
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									
										type="text"
										placeholder="15 Inch"
                    value={size}
                    onChange={(e)=>setSize(e.target.value)}
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
								price
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							
									type="text"
                  value={price}
									placeholder="769 $"
                  
                  onChange={(e)=>setPrice(e.target.value)}
								/>
							</div>
              <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
								Detail
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								
										type="text"
										placeholder="About Product"
                    value={detail}
                    onChange={(e)=>setDetail(e.target.value)}
									/>
								</div>

                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
						Uploding Image
									</label>
									<input 
										className="w-full px-3  mt-5 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								
										type="file"
                    ref={inputEl}
										placeholder="About Product"
									/>
                <button
									className="w-full mt-5 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									
								>
									Uplode
								</button>
								</div>
                
                
						
							<div className="mb-6 text-center">
								<button
									className="w-full mt-5 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
                  onClick={uplode}
								>
									Submit
								</button>
							</div>
							<hr className="mb-6 border-t" />
							
							
						</form>
					</div>
          
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border border-red mx-5">
						<h3 className="pt-4 text-2xl text-center">Mobiles</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
								Model
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								
										type="text"
										placeholder="Iphone 11"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
									Size
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									
										type="text"
										placeholder="344x654"
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
								price
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							
									type="text"
									placeholder="969 $"
								/>
							</div>
              <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
								Detail
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								
										type="text"
										placeholder="About Product"
									/>
								</div>

                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
						Uploding Image
									</label>
									<input 
										className="w-full px-3  mt-5 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								
										type="file"
										placeholder="About Product"
									/>
								</div>
                
                
						
							<div className="mb-6 text-center">
								<button
									className="w-full mt-5 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Uplode
								</button>
							</div>
							<hr className="mb-6 border-t" />
							
							
						</form>
					</div>
				</div>
			</div>
      <div className=" px-6 my-12  ">
			
      <div className="w-full  flex  justify-between wrap ">
      
        
        
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border border-red mx-5">
          <h3 className="pt-4 text-2xl text-center">Shirts</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
               Designe
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              
                  type="text"
                  placeholder="Polo"
                />
              </div>
              <div className="md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                Size
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                
                  type="text"
                  placeholder="xl xxl "
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
              price
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            
                type="text"
                placeholder="769 $"
              />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
              Detail
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              
                  type="text"
                  placeholder="About Product"
                />
              </div>

              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
          Uploding Image
                </label>
                <input 
                  className="w-full px-3  mt-5 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              
                  type="file"
                  placeholder="About Product"
                />
              </div>
              
              
          
            <div className="mb-6 text-center">
              <button
                className="w-full mt-5 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Uplode
              </button>
            </div>
            <hr className="mb-6 border-t" />
            
            
          </form>
        </div>
        
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border border-red mx-5">
          <h3 className="pt-4 text-2xl text-center">Jeans</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
              Designe
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              
                  type="text"
                  placeholder="Nerrow"
                />
              </div>
              <div className="md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                Size
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                
                  type="text"
                  placeholder="40"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
              price
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            
                type="text"
                placeholder="969 $"
              />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
              Detail
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              
                  type="text"
                  placeholder="About Product"
                />
              </div>

              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
          Uploding Image
                </label>
                <input 
                  className="w-full px-3  mt-5 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              
                  type="file"
                  placeholder="About Product"
                />
              </div>
              
              
          
            <div className="mb-6 text-center">
              <button
                className="w-full mt-5 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Uplode
              </button>
            </div>
            <hr className="mb-6 border-t" />
            
            
          </form>
        </div>
      </div>
    </div>
		</div>
  )
}

export default Adman