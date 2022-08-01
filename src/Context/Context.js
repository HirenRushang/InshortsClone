import React from 'react'
import { createContext, useState } from "react"

export const CategoryContext = createContext()





const Context = ({children}) => {

    const[category, setcategory] = useState("general")

  return (
    <CategoryContext.Provider value={{category,setcategory}}>
        {children}
    </CategoryContext.Provider>
  )
}

export default Context