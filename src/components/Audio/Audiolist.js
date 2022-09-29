import React from 'react'
import Audio from './Audio'


const Audiolist = ({audio}) => {
  return (
    <div>
        <div className='gear'>
        <h3>FOODGRAINS {'&'} OILS </h3>
      </div>
      <div className='audiomap'>
      {audio.map((audios)=>{
       return <Audio key={audios.id} id={audios.id} image={audios.image} name={audios.name} price={audios.price} offer={audios.price}></Audio>
      })}
      </div>
    </div>
  )
}

export default Audiolist
