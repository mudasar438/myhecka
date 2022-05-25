import React, { useState } from "react";
import shoping from "../imgs/b18.jpg";
import { app, database } from "../firebase/fireconfig";
import { useNavigated } from "react-router-dom";
import Navbar from "./navbar";

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
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const Navigate = useNavigate()
  const name = ["mudassar", "ali", "usman", "ahamad", "anis"];
  const [display, setDisplay] = useState([]);
  const storage = getStorage();
  const databaseRef = collection(database, "CRUD DATA");


  const [real, setReal] = useState([]);
  const [firedata, setFireData] = useState([]);
  // downlode laptops imgas

  const showlaplop = () => {
    const forestRef = ref(storage, "images");
    // const   storage =  getStorage();
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
            setDisplay(items);
            getData();
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };
  // console.log(firedata,"firedata")
  // show laptop details
  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setFireData(
        response.docs.map((item) => {
          // console.log(item.data(), item.id)
          return { ...item.data(), id: item.id };
        })
      );
    });
  };
  showlaplop()
  // Show Mobiles images list from storage
  const gotoMobile =()=>{
    Navigate('/showMobileData')
  }
  const gotoClothes = ()=>{
    Navigate('/showClothes')
  }
  const gotoJeans = ()=>{
    Navigate('/showJeans')
  }
  

  return (
    <>
     <Navbar /> 
      <div className="overflow-hidden bg-gray-800">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20" >
          <div className="flex flex-row items-center justify-between xl:flex-row mx-auto  ">
            <div className= " w-full md:w-[40%] max-w-xl mb-12 xl:pr-16 xl:mb-0  text-center ">
              <h2 className="max-w-lg mb-6  font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Whether you’re just getting started{" "}
                <br className="hidden md:block" />{" "}
           
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
            </div> 
            <div className="w-[60%] ">
              <img src={shoping} alt="" srcset="" />
            </div>

          </div>
        </div>

        

        <section class="bg-white dark:bg-gray-900 ">
          <div class=" px-6 py-8 mx-auto border-2">
              <div class="flex justify-between border-2 lg:w-1/3 lg:px-2 lg:space-y-4  mx-auto">
                {/* <button
                  href="#"
                  class="block font-medium text-gray-500 dark:text-gray-300 mt-4 hover:underline"
                  onClick={showlaplop}
                >
                  Labtops
                </button> */}
                <button
                  href="#"
                  class="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={gotoMobile}
                >
                  Mobiles
                </button>
                <button
                  href="#"
                  onClick={gotoClothes}
                  class="block font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Clothes
                </button>
                <button
                  href="#"
                  onClick={gotoJeans}
                  class="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Jeans
                </button>
              </div>
            <div class="lg:flex lg:-mx-2 ">

              <div class="mt-6 lg:mt-0 lg:px-2 lg:w-full  ">
                <div className="grid grid-cols-4 mx-2 p-5 ">
                  {firedata.map((item) => {
                    return (
                      <div className="w-full p-1 md:p-2 my-12" key={item.id}>
                        <ul className="">
                          <li>
                            <img
                              src={item.image}
                              alt=""
                              srcset=""
                              class="block object-cover object-center w-full h-full rounded-lg"
                            />

                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                              {item.name}
                            </h4>
                            <p class=""> Price {item.price}</p>
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
             
            </div>
          </div>
        </section>

        {/* <section class="bg-white   pb-10">
          <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 mx-auto ">
           

            <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                <img
                  class="object-cover w-full rounded-md h-72 xl:h-80"
                  src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                  alt="T-Shirt"
                />
                <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                  Printed T-shirt
                </h4>
                <p class="text-blue-500">$12.55</p>

                <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mx-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span class="mx-1">Add to cart</span>
                </button>
              </div>

              <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                <img
                  class="object-cover w-full rounded-md h-72 xl:h-80"
                  src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
                  alt="T-Shirt"
                />
                <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                  {" "}
                  Slub jersey T-shirt
                </h4>
                <p class="text-blue-500">$18.70</p>

                <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mx-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span class="mx-1">Add to cart</span>
                </button>
              </div>

              <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                <img
                  class="object-cover w-full rounded-md h-72 xl:h-80"
                  src="https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="T-Shirt"
                />
                <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                  T-shirt with a motif
                </h4>
                <p class="text-blue-500">$16.55</p>

                <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mx-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span class="mx-1">Add to cart</span>
                </button>
              </div>

              <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                <img
                  class="object-cover w-full rounded-md h-72 xl:h-80"
                  src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                  alt="T-Shirt"
                />
                <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                  Art T-shirt
                </h4>
                <p class="text-blue-500">$12.55</p>

                <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mx-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span class="mx-1">Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </section> */}
       
      </div>
    </>
  );
};

export default Shop;
