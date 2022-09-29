import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'


const Description = () => {
    const params=useParams();
    const[currentfood,foodsetter]=useState({});

    useEffect(()=>{
        fetch('https://63146fb1fc9dc45cb4ed743a.mockapi.io/api/list/'+params.id)
        .then((response)=>{
  if(response.ok){
    console.log(response.status);
    return response.json();
  }
  return false
        }).then((food)=>{
 foodsetter(food)
 console.log(currentfood);
        })
    })
  return (
    <div className='descripe'>
        <div className='imagedes'>
<img src={currentfood.image}  width={494} height={237} alt="" />
        </div>
 <div className='textdes'>
<h1>{currentfood.restaurant}</h1>
<h1>{currentfood.variety}</h1>
<h1>{currentfood.price}</h1>
    </div>     
    </div>
  )
}

export default Description
