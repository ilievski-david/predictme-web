import React from 'react';
import './App.css';
import NavBarController from './components/Navbar/NavBarController';
import Overview from './components/Pages/Overview/Overview';
import Docs from './components/Pages/Docs/Docs';
import Dapp from './components/Pages/Dapp/Dapp'
import { useRecoilState } from 'recoil';
import {DappOpenState} from './Atoms'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
function App() {
  const [isDappOpen, setDappOpenState] = useRecoilState(DappOpenState)
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBarController/>
      <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/Docs' element={<Docs/>}/>
        <Route path='/Dapp' element={<Dapp/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
