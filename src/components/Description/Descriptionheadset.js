import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Descriptionheadset = () => {
      const param=useParams()
      const[headsetstate,headsetsetter]=useState([])
      useEffect(()=>{
        fetch('https://633038def5fda801f8dcdddc.mockapi.io/audio/'+param.id)
        .then((response)=>{
if (response.ok) {
    return response.json()
}
return false
        }).then((food)=>{
headsetsetter(food)
        })
    },[])
  return (
    <div>
    <div className='descripe'>
  <div className='imagedes'>
<img src={headsetstate.image}  width={300} height={300} alt="" />
  </div>
<div className='textdes'>
<h3>{headsetstate.name}</h3>
<span>{headsetstate.price}</span>
<div>
<button>Add To Cart</button>
</div>
</div>     
</div>
</div>
  )
}

export default Descriptionheadset
