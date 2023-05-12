
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import {   Route ,Routes} from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/buttons/Login";
import Footer from "./components/Footer";


import Signup from "./components/buttons/Signup";


function App() {
  return (
    < >
   
    <Header/>
     
     <Routes>
    
      <Route exact path='/' element={<Home/>}/>
      <Route  exact path='/products' element={<Product/>}/>
      <Route  exact path='/products/:id' element={<ProductDetail/>}/>
      <Route  exact path='/cart' element={<Cart/>}/>
      <Route  exact path='/checkout' element={<Checkout/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route  path='/login' element={<Login/>}/>
    
    </Routes>
 <br/>
    
    <Footer/>
    
    </>
  );
}

export default App;
