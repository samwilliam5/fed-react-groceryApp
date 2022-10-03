import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({name,price,offer,id,image}) => {
    const [itemstate,itemsetter]=useState(price)
//     const handleoffer=()=>{
//     const newoffer=itemstate-(offer/100)*itemstate;
//     itemsetter(newoffer)
// }


const navigates=useNavigate();
function discripefunc(){
    navigates('/desfruits/'+id)
}
  return (
    <div>
    <div className='Smartphone'>
      <div >
      <img src={image} alt="" width={200} onClick={discripefunc}/>
       <h5>{name}</h5> 
       <span> M.R.P: ₹{price}</span>
       <div>
     <span> {offer} {'%'}  OFF</span>
     </div>
     {/* <div className='offerhandle'>
        <button onClick={handleoffer}>Apply offer</button>
      </div> */}
      <div className='buyhandle'>
      <button>Click To Buy</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Product


