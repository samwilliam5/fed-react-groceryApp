import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../Feauters/Userslice'

const Logout = () => {
    const dispatch=useDispatch()
    const handlelogout=(e)=>{
        e.preventDefault();
        dispatch(logout())
    }
  return (
    <div>
      <h1>Welcome <span>William</span></h1>
      <button onClick={(e)=>handlelogout(e)}>Logout</button>
    </div>
  )
}

export default Logout
