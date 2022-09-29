import './header.css';
import {Outlet} from 'react-router-dom'


function Header(){
    return(
        <div >
            <div className='headtop'>
        <header>
           <div>
         <h1>Foddie</h1>
         </div>
         <nav>
         <ul>
        <li> <a href='/' className='nav1'></a>Home</li>
        <li><a href='/about' className='nav'>About</a></li>
        <li><a href='/help' className='nav'>Help</a></li>
         <li><a href='/signin' className='nav'>Sign-in</a></li>
        <li><a href='/cart' className='nav'>Cart</a></li>
        </ul>
          </nav>
        </header>
        </div>
                  <Outlet></Outlet>
                  </div>

        
    )
}

export default Header;