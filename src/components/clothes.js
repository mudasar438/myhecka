import React from 'react'

const Clothes = () => {

    // // .then ((response)=>{
    //     console.log(response,"response")
    //     const userRoles = response;
    //     userRoles.doc.find((item))
      
    //    setUserAdmin(response.docs.map((item)=>{
    //       console.log(item.data(), item.id)
    //       return (
            
              
    //            {...item.data(), id:item.id}
            
    
           
    //       )
    //     }))
        
    //   })
    
    //     if(user.role==="user"){
    //       navigate('/home') 
          
    //       alert("You are login")
    //     }
    //     else if(user.rol==="admin"){
    //       navigate('/admin')
    //     }
    //     // ...
    //   })
  return (
   <>
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
   </>
  )
}

export default Clothes