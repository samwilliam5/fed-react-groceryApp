import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cookielist from './Cookielist'

const Cookiefetch = () => {
    const[cookiestate,cookiesetter]=useState([])

   
    useEffect(()=>{
 const interval=setInterval(()=>{
       fetch('https://633038def5fda801f8dcdddc.mockapi.io/cookie')
       .then((response)=>{
        if (response.ok) {
            return response.json()
            
        }
return false
       }).then((response)=>{
        cookiesetter(response)

       })
    },1000)
    return()=>{
        clearInterval(interval)
    }
})
  return (
    <div>
      <Cookielist cookie={cookiestate}></Cookielist>
    </div>
  )
}

export default Cookiefetch
