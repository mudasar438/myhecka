import React from 'react'
import { useState , useRef} from 'react'
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


const Clothes = () => {
    const [model, setModel]=useState('')
    const [size, setSize]=useState('');
    const [price, setPrice]=useState('')
    const [detail, setDetail]=useState('');
    const inputEl = useRef(null);
    const [pgrs, setPgrs]=useState('')
    const databaseRef = collection(database, "CLOTHES")

    const submit =(link)=>{
    
        addDoc(databaseRef, {
            model:model,
            size:size,
            price:price,
            detail:detail,
            image:link
        
          })
         
          .then(()=>{
            alert("Data add Into Firestore Database/Storage")
            // getData()
           
           
          })
          .catch((err)=>{
            console.error(err.message)
          })
        


    }
    // uploding image on firestore and link of this image provide to the database where all doc uplode like model price size 
    const [file, setFile] = useState(null);
const storage = getStorage();
const metadata = {
  contentType: "image/jpeg",
};
    const uplodeimg =(e)=>{
        e.preventDefault()
        console.log("You are click on upldoe buttotn")
     


        var file = inputEl.current.files[0];
        setFile(file);
        const storageRef = ref(storage, "Clothes/" + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              const n=  progress.toFixed(1)

              setPgrs(n)
            
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
              submit(downloadURL)
              console.log('File available at which is uplode i', downloadURL);
            });
          }
        );
    }



    
  return (
   <> 
  

   


     <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border border-red mx-5 mb-10">
						<h3 className="pt-4 text-2xl text-center">Clothes</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={submit}>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
								Catagery
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								
                                        value={model}
										type="text"
                                         name='name'
                                         onChange={(e)=>setModel(e.target.value)}

										placeholder="shirt & Jeans"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
									Size
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									
										type="text"
										placeholder="x, xl, xxl"
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
									placeholder="969 $"
                                    value={price}
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
                   <progress id="file" value={pgrs} max="100" className='bg-red w-full mt-2'> {pgrs}% </progress>
                  <p>Uploding is {pgrs} %</p>
								</div>
                
                
						
							<div className="mb-6 text-center">
								<button
									className="w-full mt-5 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
                                    onClick={uplodeimg}
								>
									Uplode
								</button>
							</div>
							<hr className="mb-6 border-t" />
							
							
						</form>
					</div>
       
   </>
    )
}

export default Clothes;