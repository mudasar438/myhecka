import React from 'react'
import { app, database } from "../firebase/fireconfig";
import { useState } from 'react';
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
    
    const ShoweClothes = () => {
    const mobileDatabaseRef = collection(database, "CLOTHES");

    const [mobileDesplay, setMobileDisplay] = useState([]);
  const [showMobileData, setShowMobileData] = useState([]);
  const storage = getStorage();
  const showMobile = () => {
    console.log("You are Click on Mobile Section");
    const forestRef = ref(storage, "Clothes");

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
  console.log(showMobileData);
  showMobile();
  return (
  <>
  <div className="">
      
  <div className="grid grid-cols-4 mx-2 p-5 ">
                {showMobileData.map((item) => {
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

export default ShoweClothes;