import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddContext from '../Usecontext/Usecontext';



const Descriptioncook = () => {
  const cart=useContext(AddContext);
    const params=useParams()
    const[cookstate,cooksetter]=useState([])
    useEffect(()=>{
        fetch('https://633038def5fda801f8dcdddc.mockapi.io/cookie/'+params.id)
        .then((response)=>{
            if (response.ok) {
                console.log(response.status);

               return response.json() 
            }
            return false;
        }).then((food)=>{
cooksetter(food)
        })
    },[])
    const carthandle=()=>{
      cart.addCart(cookstate)
      console.log(cookstate);
          }
  return (
    <div>
    <div className='descripe'>
  <div className='imagedes'>
<img src={cookstate.image}  width={300} height={300} alt="" />
  </div>
<div className='textdes'>
<h3>{cookstate.name}</h3>
<span>M.R.P: ₹{cookstate.price}</span>
<div>
<div>
     <span> {cookstate.offer} {'%'}  OFF</span>
     </div>
<button onClick={carthandle}>Add To Cart</button>
</div>
</div>     
</div>
</div>
  )
}

export default Descriptioncook
