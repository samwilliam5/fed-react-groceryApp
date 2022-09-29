import React from 'react'
import Cookie from './Cookie'

const Cookielist = ({cookie}) => {
  return (
    <div>
      <div className='cook'>
        <h3>SNACKS {'&'} BRANDED FOODS</h3>
      </div>
    <div className='cookiesmap'>
      {cookie.map((cook)=>{
return<Cookie key={cook.id} image={cook.image} id={cook.id} name={cook.name} price={cook.price}
offer={cook.offer}></Cookie>
      })}
      </div>
    </div>
  )
}

export default Cookielist
