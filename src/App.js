import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Productdeals from './Components/Productdeals';
import { Routes, Route } from 'react-router-dom'
// import Loginsignin from './Components/Pages/Loginsignin';
import Cookiefetch from './Components/Cookies/Cookiefetch';
import Fashionfetch from './Components/Fashion/Fashionfetch';
import Audiofetch from './Components/Audio/Audiofetch';
import Description from './Components/Description/Description';
import Descriptionfashion from './Components/Description/Descriptionfashion';
import Descriptioncook from './Components/Description/Descriptioncook';
import Descriptionheadset from './Components/Description/Descriptionheadset';
import Loginsignin from './Components/Pages/Loginsignin';
import Logout from './Components/Pages/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from './Feauters/Userslice';
import { useState } from 'react';
import AddContext from './Components/Usecontext/Usecontext';
import Addtocart from './Components/Pages/Addtocart';
// import Topdeals from './Components/Topdeals/Topdeals';
import Slider from './Components/Slider/Slider';
import TopdealsFetch from './Components/Topdeals/TopdealsFetch';
import Descriptiondeals from './Components/Description/Descriptiondeals';
function App() {
  const user=useSelector(selectUser)
  const[cart,setCart]=useState([]);
  const[qty,setQty]=useState(0);
  // console.log(qty);
  const addCart=(item)=>{
    
  setCart((preitems)=>{
      return[item,...preitems]
    })
  }
  return (
    <div className="App">
       <AddContext.Provider value={{addCart,cart,setQty,qty}}>
      <Header></Header>
      <Slider></Slider>
      {/* {user ? <Logout></Logout>:<Loginsignin></Loginsignin>} */}
      <Routes>
        {/* <Route path='/loginsignin' element={user ? <Logout></Logout>:<Loginsignin></Loginsignin>}></Route> */}
        <Route path='/fruitsandveg' element={<Body></Body>}></Route>
        <Route path='/cookies' element={<Cookiefetch></Cookiefetch>}></Route>
        <Route path='/beverage' element={<Fashionfetch></Fashionfetch>}></Route>
        <Route path='/oils' element={<Audiofetch></Audiofetch>}></Route>
        <Route path='desfruits/:id' element={<Description></Description>}></Route>
        <Route path='desfas/:id' element={<Descriptionfashion></Descriptionfashion>}></Route>
        <Route path='descook/:id' element={<Descriptioncook></Descriptioncook>}></Route>
        <Route path='desaudio/:id' element={<Descriptionheadset></Descriptionheadset>}></Route>
        <Route  path='/loginsignin' element={user ? <Logout></Logout>:<Loginsignin></Loginsignin>}></Route>
      <Route path='/cart' element={<Addtocart></Addtocart>}></Route>
      <Route path='desdeals/:id' element={<Descriptiondeals></Descriptiondeals>}></Route>
      </Routes>
      <Productdeals></Productdeals> 
      <TopdealsFetch></TopdealsFetch>
      </AddContext.Provider>
      {/* <Body></Body>  */}
      
    </div>

  );
}
export default App;
