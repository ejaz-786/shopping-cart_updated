import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./COMPONENTS/Home";
import About from "./COMPONENTS/About";
import Contact from "./COMPONENTS/Contact";
import Cart from "./COMPONENTS/Cart";
import Checkout from "./COMPONENTS/Checkout";
import { createContext, useState } from "react";


export const UserContext = createContext();

function App() {
  const [arr, setArr] = useState([]);
  return (
     <BrowserRouter>

        <UserContext.Provider value={{
          arr: arr,
          setArr: setArr
        }}>

        
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="About" element={<About/>}></Route>
            <Route path="Contact" element={<Contact/>}></Route>
            <Route path="Cart" element={<Cart/>}></Route>
            <Route path="Checkout" element={<Checkout/>}></Route>
          </Routes>

          
          </UserContext.Provider>
          
     </BrowserRouter>
    
  
  );
}

export default App;
