import './App.css';
import{ useState} from 'react'; 
import Body from './components/body';
import Header from './components/header';
import Login from './components/login';
import   {Routes,Route} from 'react-router-dom'
import NotFound from './NotFound/NotFound';
import Footer from './components/Footer';
import About from './components/Pages/About';
import Help from './components/Pages/Help';
import SignIn from './components/Pages/SignIn';
import Cart from './components/Pages/Cart';
import { Appcontext } from './components/Context';
import Description from './components/Description';


function App() {
  const [isLoggedin,setLoggedIn]=useState(false);

  const loginhandler=()=>{

    setLoggedIn(isLoggedin);
  }

  return (
    <div className="App">
      <Appcontext.Provider value={{isLoggedin,setLoggedIn}}>
      <Routes>
<Route index element={<Login isLoggedin={loginhandler}></Login>}></Route>
<Route path='header' element={<Header></Header>}>
<Route path='body' element={<Body></Body>}>
</Route>
<Route  path="logout" element={<Body logout={loginhandler}></Body>}></Route>
</Route>
<Route path="*" element={<NotFound />} />
<Route path='/about' element={<About></About>}></Route>
<Route path='/help' element={<Help></Help>}></Route>
<Route path='/signin' element={<SignIn></SignIn>}></Route>
<Route path='/cart' element={<Cart></Cart>}></Route>
<Route path='des/:id' element={<Description></Description>}></Route>



      </Routes>
      <Footer></Footer>
      </Appcontext.Provider>
      {/* {isLoggedin? <Body logout={loginhandler}></Body>:<Login isLoggedin={loginhandler}></Login>
      } */}
    </div>
  );
}

export default App;
