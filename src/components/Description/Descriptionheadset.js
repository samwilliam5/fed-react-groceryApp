import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddContext from '../Usecontext/Usecontext';



const Descriptionheadset = () => {
  const cart=useContext(AddContext);

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
    const carthandle=()=>{
      cart.addCart(headsetstate)
      console.log(headsetstate);
          }
  return (
    <div>
    <div className='descripe'>
  <div className='imagedes'>
<img src={headsetstate.image}  width={300} height={300} alt="" />
  </div>
<div className='textdes'>
<h3>{headsetstate.name}</h3>
<span>M.R.P: ₹{headsetstate.price}</span>
<div>
<div>
     <span> {headsetstate.offer} {'%'}  OFF</span>
     </div>
<button onClick={carthandle}>Add To Cart</button>
</div>
</div>     
</div>
</div>
  )
}

export default Descriptionheadset
