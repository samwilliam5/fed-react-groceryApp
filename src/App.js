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

function App() {
  const user=useSelector(selectUser)
  return (
    <div className="App">
      <Header></Header>
      {/* {user ? <Logout></Logout>:<Loginsignin></Loginsignin>} */}
      <Productdeals></Productdeals>
      <Routes>
        <Route path='/loginsignin' element={user ? <Logout></Logout>:<Loginsignin></Loginsignin>}></Route>
        <Route path='/fruitsandveg' element={<Body></Body>}></Route>
        <Route path='/cookies' element={<Cookiefetch></Cookiefetch>}></Route>
        <Route path='/beverage' element={<Fashionfetch></Fashionfetch>}></Route>
        <Route path='/oils' element={<Audiofetch></Audiofetch>}></Route>
        <Route path='des/:id' element={<Description></Description>}></Route>
        <Route path='desfas/:id' element={<Descriptionfashion></Descriptionfashion>}></Route>
        <Route path='descook/:id' element={<Descriptioncook></Descriptioncook>}></Route>
        <Route path='desaudio/:id' element={<Descriptionheadset></Descriptionheadset>}></Route>
      </Routes>

      {/* <Body></Body>  */}

    </div>

  );
}
export default App;
