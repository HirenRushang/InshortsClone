import React from 'react'
import "./Navigation.css"
import HamburgerMenu from './HamburgerMenu'
import { CategoryContext } from '../Context/Context'
import { useContext } from 'react'

const Navigation = () => {

const{setcategory,category} = useContext(CategoryContext)

  const brandlogohandler = ()=>{
        if(category==="general"){
          alert("You Are Already In Home Page")
        }else{
          setcategory("general")
        }
  }

  return (
    <div className='navbar_wrapper'>
      
        <div className='hamburger_menu'><HamburgerMenu /></div>
        <div className='brand_logo'>
            <img src="../../logoinshorts.png" alt='' onClick={brandlogohandler} />
        </div>
    </div>
  )
}

export default Navigation