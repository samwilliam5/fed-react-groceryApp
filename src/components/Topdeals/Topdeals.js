// import React, { useEffect,useState } from 'react'

// const Topdeals = () => {
//     const[deal,setdeal]=useState([0])

//     useEffect(()=>{
//         fetch(`https://633038def5fda801f8dcdddc.mockapi.io/smartphone/`)
//         .then((response)=>{
//   if(response.ok){
//     // console.log(response.status);
//     return response.json();
//   }
//   return false
//         }).then((response)=>{
//             setdeal(response)
// //  console.log(currentfood);
//         })
//     },[])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Topdeals
import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Topdeals.module.css'

const Topdeals = ({image,name,price,offer,id}) => {
  const nav=useNavigate()
function disfunc() {
    nav('/desdeals/'+id)
}
  return (
    <div >
<div className={style.stylealign}>
      <img src={image} alt="" onClick={disfunc} width={200}/>
      <h3>{name}</h3>
      <span>M.R.P: {price}</span>
      <div>
      <span>{offer} % OFF </span>
      </div>
      </div>
    </div>
  )
}

export default Topdeals
