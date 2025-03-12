import './App.css';

import Productcard from './components/productcard.jsx';
import Button from './components/button.jsx';
import {Route, Routes} from 'react-router-dom'


function App() {
 

  return (
    
    <>
  <Routes>
    <Route path='/' element = {<Productcard/>}/>
    <Route path='/' element = {<Button/>}/>
  </Routes>
    
    </>
  );
}

export default App;