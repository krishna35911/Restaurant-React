import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Restview from './pages/Restview';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant-view/:id' element={<Restview/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
