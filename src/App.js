import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home'
import Login from './componants/Login/Login';
import Products from './componants/Products/Products';
import Register from './componants/Register/Register';


function App() {
  
  

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path = '/register' element={<Register></Register>}></Route>
        <Route path ='/products' element={<Products></Products>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
