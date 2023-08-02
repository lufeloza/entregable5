import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Characters from './pages/Characters'
import CharacterDetail from './pages/CharacterDetail';
import AppNav from './components/AppNav';
import User from './components/User';
function App() {
 
  

  return (
      
    <HashRouter>
      <AppNav></AppNav>
       <Routes>
          <Route  path='/' element={<Home/>} /> 
          <Route  path='/Characters' element={<Characters/>} />    
          <Route path="/characters/:id" element={<CharacterDetail />} />    
       </Routes>
       <User/>
   </HashRouter>
    
  );
}
export default App;