import React from 'react'
import Fashion from './Fashion'

const Fashionlist = ({fashion}) => {
  return (
    <div >
      <div className='fash'>
        <h3>BEVERAGE {'&'} CORNER</h3>
      </div >
      <div className='menfashion'>
      {fashion.map((fash)=>{
return <Fashion key={fash.id} image={fash.image} id={fash.id} name={fash.name} price={fash.price} offer={fash.offer}></Fashion>
      })}
      </div>
    </div>
  )
}

export default Fashionlist
