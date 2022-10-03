import React, { useContext } from 'react'
import {FaCartPlus} from 'react-icons/fa'
import {MdSupervisorAccount} from 'react-icons/md'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import AddContext from './Usecontext/Usecontext';
import { selectUser } from '../Feauters/Userslice';


const Header = () => {

  const user = useSelector(selectUser);

  const cartLength=useContext(AddContext).cart;
  const addcart=useNavigate()


  const carthandle=(e)=>{
    e.preventDefault()
    if(user == null){
      alert("please login")
    }else{
      addcart("/cart")
    }
    
}
const handlelog=(e)=>{
  e.preventDefault()
  addcart("/loginsignin")
}
const handlehome=(e)=>{
  e.preventDefault()
  addcart("/home")
}
  return (
    <header>
        <div>
      <h1 onClick={handlehome}><a href="/home">ShopMarT</a></h1>
      </div>
      <div className='list1'>
        <ul>
            <li><a href="#search"><input type="text" placeholder='Search essentials,groceries and more...' /></a></li>
            <div className='loginsignup'>
            <li className='listlog' onClick={handlelog}><a href='/loginsignin' ><MdSupervisorAccount size={40}></MdSupervisorAccount> Sign in / Sign up </a></li>
            </div>
            <div className='carticon'>
            <li className='listcart'><a href='/cart'>
              {/* <span className='cartspan'>&#128722;</span> */}
              <span className='cartspan'><FaCartPlus size={40} onClick={carthandle}></FaCartPlus>
              <span>{cartLength.length}</span>
              </span>
              </a></li>
            </div>
        </ul>
      </div>
    </header>
  )
}

export default Header


// import React from 'react'
// import{Navbar,Nav,Container} from 'react-bootstrap'

// const Header = () => {
//   return (
//     <div>
//       <header>
//       <Navbar bg="dark" variant="dark">
//         <Container >
//           <Navbar.Brand href="#home">ShopMart</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#search">
//               <input type="text" placeholder='Search' />
//             </Nav.Link>
//             <Nav.Link href="#LogIn/SignIn">LogIn/SignIn</Nav.Link>
//             <Nav.Link href="#Cart">Cart</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       </header>
//     </div>
//   )
// }

// export default Header

