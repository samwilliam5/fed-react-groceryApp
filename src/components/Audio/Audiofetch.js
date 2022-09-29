import React, { useEffect, useState } from 'react'
import Audiolist from './Audiolist'
const Audiofetch = () => {
    const [audiostate,audiosetter]=useState([])

    useEffect(()=>{
        const interval=setInterval(()=>{
fetch('https://633038def5fda801f8dcdddc.mockapi.io/audio')
.then((response)=>{
    if (response.ok) {
        return response.json()
    }
return false
}).then((response)=>{
    audiosetter(response)
})
        },1000)     
        return()=>{
            clearInterval(interval)
        }

    })
  return (
    <div>
      <Audiolist audio={audiostate}></Audiolist>
    </div>
  )
}

export default Audiofetch
