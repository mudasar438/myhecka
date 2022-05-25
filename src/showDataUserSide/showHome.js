import Navbar from '../components/navbar'
import React from 'react'
import { app, database } from "../firebase/fireconfig";
import { useState } from 'react';
import shoping from '../imgs/b18.jpg'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    getMetadata,
    listAll,
    connectStorageEmulator,
  } from "firebase/storage";
  
  import {
      collection,
      addDoc,
      getDocs,
      doc,
      updateDoc,
      deleteDoc,
      onSnapshot,
    } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
    
    const ShowsHome = () => {
      const Navigate = useNavigate()
    const mobileDatabaseRef = collection(database, "HOME");

    const [mobileDesplay, setMobileDisplay] = useState([]);
  const [showMobileData, setShowMobileData] = useState([]);
  const storage = getStorage();
  const showMobile = () => {
    // console.log("You are Click on Mobile Section");
    const forestRef = ref(storage, "Home");

    listAll(forestRef)
      .then((res) => {
        res.prefixes.map((folderRef) => {});
        // console.log(res.items,'items')
        Promise.all(
          res.items.map((item) => {
            return getDownloadURL(item);
          })
        )
          .then((items) => {
            // console.log(items, "items");
            setMobileDisplay(items);
            // getData()
            getMobileDoc();
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };
  const getMobileDoc = async () => {
    await getDocs(mobileDatabaseRef).then((response) => {
      setShowMobileData(
        response.docs.map((item) => {
          // console.log(item.data(), item.id)
          return { ...item.data(), id: item.id };
        })
      );
    });
  };
  // console.log(mobileDesplay)
  // console.log(showMobileData);
  showMobile();

  const shop = ()=>{
      Navigate('/shop')
      console.log("You are Click on Shop button")
  }
  return (
  <>
   <Navbar /> 
  <div className="">
  <div className="py-16 bg-gray-900">
<div  className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
<div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
  <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
      <h1 className="text-2xl text-gray-700 font-bold md:text-3xl">Buy now and benefit up to <span className="text-blue-500">30% off</span></h1>
      <p className="text-lg">Be part of millions people around the world using tailus in modern User Interfaces.</p>
      <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
          <button type="button" onClick={shop} title="Start buying" className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
              <span className="block text-white font-semibold">
                  Start buying
              </span>
          </button>
          <button type="button" title="more about" className="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
              <span className="block text-gray-600 font-semibold">
                  More about
              </span>
          </button>
      </div>
  </div>
  <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
      {/* <div className="col-span-2 row-span-4">
          <img src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/kushagra.webp" className="rounded" width="640" height="960" alt="shoes" loading="lazy"/>
        
      </div> */}
      {/* <div className="col-span-2 row-span-2">
          <img  src= className="w-full h-full object-cover object-top rounded-xl" width="640" height="640" alt="shoe" loading="lazy"/>
      </div> */}
      <div className="col-span-5 row-span-5">
          <img  src={shoping}className="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy"/>
      </div>
  </div>
</div>
</div>
<div className="w-full ">
    <p className='w-[50%] mx-auto text-center text-white text-4xl mt-10'>New Products</p>
</div>
</div>

      
  <div className="grid grid-cols-4  p-5  ">
                {showMobileData.map((item) => {
                  return (
                    <div className="w-full p-1 md:p-2 my-12 " key={item.id}>
                      <ul className="bg-white rounded-xl">
                        <li>
                          <img
                            src={item.image}
                            alt=""
                            srcset=""
                            class="block object-cover object-center w-full h-full rounded-lg"
                          />

                          <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                            {item.model}
                          </h4>
                          <p class=""> Price {item.price}</p>
                          <p className="text-blue-500">{item.size}</p>
                          <p className="text-blue-500">{item.detail}</p>
                          <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                            <span class="mx-1">Add to cart</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>

  </div>
  </>
  )
}

export default ShowsHome