import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import AddContext from '../Usecontext/Usecontext';

const Description = () => {
  const cart=useContext(AddContext);
    const params=useParams();
    const[currentfood,foodsetter]=useState([]);

    useEffect(()=>{
        fetch(`https://633038def5fda801f8dcdddc.mockapi.io/smartphone/`+params.id)
        .then((response)=>{
  if(response.ok){
    // console.log(response.status);
    return response.json();
  }
  return false
        }).then((food)=>{
 foodsetter(food)
//  console.log(currentfood);
        })
    },[])
    const carthandle=()=>{
cart.addCart(currentfood)
console.log(currentfood);
    }
  return (
    <div>
          <div className='descripe'>
        <div className='imagedes'>
<img src={currentfood.image}  width={300} height={300} alt="" />
        </div>
 <div className='textdes'>
<h3>{currentfood.name}</h3>
<span>M.R.P: ₹{currentfood.price}</span>
<div>
<div>
     <span> {currentfood.offer} {'%'}  OFF</span>
     </div>
<button onClick={carthandle}>Add To Cart</button>
</div>
    </div>     
    </div>
    </div>
  )
}

export default Description
