//we will use Context for data centeralization we will do it by wrapping entire application with context in main.jsx namme UserContect file in capital 
import React, { createContext, useState } from 'react'

//context to pass data forward
export const UserDataContext = createContext()


  const UserContext=({children})=> {
    //we will pass this data in all fields so we will call it in app.jsx
    const[user,setUser]=useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
        
    })
  return (
  
        <UserDataContext.Provider value ={{user,setUser}}>
        {children}
        </UserDataContext.Provider>
  
  )
}

export default UserContext