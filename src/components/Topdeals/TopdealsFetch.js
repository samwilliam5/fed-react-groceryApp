import React, { useEffect, useState } from 'react'
import Topdealslist from './Topdealslist'


const TopdealsFetch = () => {
    const[dealstate,dealset]=useState([])
    useEffect(()=>{
        fetch('https://63146fb1fc9dc45cb4ed743a.mockapi.io/api/topdeal')
        .then((response)=>{
            if (response.ok) {
                return response.json()
            }
            return false
        }).then((response)=>{
          dealset(response)
        })
    },[])
  return (
    <div>
      <Topdealslist deals={dealstate}/>
    </div>
  )
}

export default TopdealsFetch
