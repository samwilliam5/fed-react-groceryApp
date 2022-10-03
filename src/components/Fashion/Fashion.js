import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Fashion = ({name,price,offer,id,image}) => {
    const[pricestate,pricesetter]=useState(price)
    // const offerhandle=()=>{
    //     const newoffer=pricestate-(offer/100)*pricestate
    //     pricesetter(newoffer)
    // }
    const navi=useNavigate()
    function disfunc() {
      navi('/desfas/'+id)
    }

  return (
    <div>
      <div className='fashioncenter'>
        <img src={image} width={200} alt="This is fashion image" onClick={disfunc} />
        <h3>{name}</h3>
        <span>M.R.P: ₹{price}</span>
        <div>
        <span>{offer} {'%'}  OFF</span>
        </div>
        {/* <div className='offerhand'>
        <button onClick={offerhandle}>Apply offer</button>
        </div> */}
        <div className='buyfash'>
            <button>Click To Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Fashion
