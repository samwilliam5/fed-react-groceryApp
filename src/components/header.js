import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import {MdSupervisorAccount} from 'react-icons/md'


const Header = () => {
  return (
    <header>
        <div>
      <h1><a href='/home'>ShopMarT</a></h1>
      </div>
      <div>
        <ul>
            <li><a href="#search"><input type="text" placeholder='Search essentials,groceries and more...' /></a></li>
            <div className='loginsignup'>
            <li className='listlog'><a href='/loginsignin' ><MdSupervisorAccount size={40}></MdSupervisorAccount>LogIn/SingnUp</a></li>
            </div>
            <div className='carticon'>
            <li className='listcart'><a href="/cart" >
              {/* <span className='cartspan'>&#128722;</span> */}
              <span className='cartspan'><FaCartPlus size={40} ></FaCartPlus></span>
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

