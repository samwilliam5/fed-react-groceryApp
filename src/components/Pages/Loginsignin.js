import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../Feauters/Userslice'

const Loginsignin = () => {
  const[username,usernameset]=useState('')
  const[email,emailset]=useState('')
  const[password,passwordset]=useState('')
  const dispatch=useDispatch()

  const handlelogin=(e)=>{
    e.preventDefault()

    dispatch(
      login({
        username:username,
        email:email,
        password:password,
        loggedIn:true
      })
    )
  }
  return (
    <div className='logsig' onSubmit={(e)=>handlelogin(e)}>
     <h3>Please Log In To your account</h3>
     <form action="" className='formlog'>
      <div className='formgap'>
      <div>
        <div>
        <input type="text" placeholder='Enter Username' value={username} onChange={(e)=>usernameset(e.target.value)} />
        </div>
      </div>
      <div>
        <div>
        <input type="email" placeholder='Enter Email' value={email } onChange={(e)=>emailset(e.target.value)}/>
        </div>
        <div>
          <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>passwordset(e.target.value)}/>
        </div>
      </div>
      <div className='loginbtn'>
        <input type="submit" value='LogIn'  />
      </div>
      </div>
     </form>
    </div>
  )
}

export default Loginsignin
