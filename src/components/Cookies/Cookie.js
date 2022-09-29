import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cookie = ({name,price,offer,id,image}) => {
    const [cookiestate,cookiesetter]=useState(price)
    const handleoffer=()=>{
    const newoffer=cookiestate-(offer/100)*cookiestate
    cookiesetter(newoffer)
}
const nav=useNavigate()
function desc(params) {
    nav('/descook/'+id)
}


  return (
    <div>
      <div className='cooktop'>
        <img src={image} alt="This is cokkie image"  width={250} height={300} onClick={desc}/>
        <h3>{name}</h3>
        <span>M.R.P: ₹{cookiestate}</span>
        <div>
        <span>{offer}</span>
        </div>
        <div className='handlecook'>
<button onClick={handleoffer}>Apply offer</button>
        </div>
        <div className='cookbuy'>
<button>Click To Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Cookie
