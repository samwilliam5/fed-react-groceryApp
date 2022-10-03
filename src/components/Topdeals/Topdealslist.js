import React from 'react'
import Topdeals from './Topdeals'
import style from './Topdeals.module.css'


const Topdealslist = ({deals}) => {
  return (
    <div>
        <h3>Top Deals</h3>
        <div className={style.dealsflex}>
        {deals.map((deal)=>{
      return<Topdeals key={deal.id} id={deal.id} name={deal.name} price={deal.price} offer={deal.offer} image={deal.image} />
        })}
        </div>
    </div>
  )
}

export default Topdealslist
