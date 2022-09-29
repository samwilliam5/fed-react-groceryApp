import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
const Descriptionfashion = () => {
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

  return (
    <div>
          <div className='descripe'>
        <div className='imagedes'>
<img src={foodstate.image}  width={300} height={300} alt="" />
        </div>
 <div className='textdes'>
<h3>{foodstate.name}</h3>
<span>{foodstate.price}</span>
<div>
<button>Add To Cart</button>
</div>
    </div>     
    </div>
    </div>
  )
}

export default Descriptionfashion
