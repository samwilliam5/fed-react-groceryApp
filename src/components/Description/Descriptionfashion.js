import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import AddContext from '../Usecontext/Usecontext';

const Descriptionfashion = () => {
  const cart=useContext(AddContext);
    const params=useParams()

    const[foodstate,foodsetter]=useState([])

    useEffect(()=>{
        fetch('https://633038def5fda801f8dcdddc.mockapi.io/fashion/'+params.id)
        .then((response)=>{
if (response.ok) {
    console.log(response.status);
    return response.json()
    
}
return false
        }).then((food)=>{
            foodsetter(food)
        })
    },[])
    const carthandle=()=>{
      cart.addCart(foodstate)
      console.log(foodstate);
          }

  return (
    <div>
          <div className='descripe'>
        <div className='imagedes'>
<img src={foodstate.image}  width={300} height={300} alt="" />
        </div>
 <div className='textdes'>
<h3>{foodstate.name}</h3>
<span>M.R.P: ₹{foodstate.price}</span>
<div>
<div>
     <span> {foodstate.offer} {'%'}  OFF</span>
     </div>
<button onClick={carthandle}>Add To Cart</button>
</div>
    </div>     
    </div>
    </div>
  )
}

export default Descriptionfashion
