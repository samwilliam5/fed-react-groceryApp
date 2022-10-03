import React from 'react'
import img1 from './images/fruitsandveg.jpg'
import img2 from './images/bevagers.jpg'
import img3 from './images/snaksfoods.jpg'
import img4 from './images/grainsandoil.jpg'
import { useNavigate } from 'react-router-dom'

const Productdeals = () => {
    const nav=useNavigate();
  return (
    <div className='dealscolor'>
        
<div className='todaydeal'>
        <h3>Shop from Top Categories</h3>
        </div>
    
    <div className='deals'>
    <div>
      <img src={img1} alt="" width={250} height={250} onClick={()=>{
            nav('/fruitsandveg')}}/>
    
    <div className='smartphone'>
        <h5>FRUITS {'&'} VEGETABLES</h5>
        </div>
        </div>
    <div>
        
        <img src={img2} alt="" width={250} height={250} onClick={()=>{
            nav('/beverage')}}  />
       
<div className='fashion'>
        <h5>BEVERAGE  {'&'} CORNER</h5>
        </div>
        </div>
    <div>
        <img src={img3} alt="" width={250} height={250} onClick={()=>{
            nav('/cookies')}} />

<div className='cookies'>
        <h5>SNACKS {'&'}  BRANDED FOODS</h5>
        </div>
         </div>
    <div>
        <img src={img4} alt="" width={246} height={250} onClick={()=>{
            nav('/oils')
        }}/>
<div className='audio'>
        <h5>FOODGRAINS {'&'} OILS</h5>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Productdeals
