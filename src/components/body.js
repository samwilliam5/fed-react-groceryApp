import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

const Body = () => {
    const[itemsState,itemSetter]=useState([])

    useEffect(()=>{
        const intervalId=setInterval((response)=>{
fetch(`https://633038def5fda801f8dcdddc.mockapi.io/smartphone`)
.then((response)=>{
    if (response.ok) {
        return response.json()
    }
    return false
}).then((response)=>{
    if(response){
        itemSetter(response)
    }
})
        },10)
        return()=>{
            clearInterval(intervalId)
        }
    })
  return (
    <div>
      <ProductList itemMap={itemsState}></ProductList>
    </div>
  )
}

export default Body
