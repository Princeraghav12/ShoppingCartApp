import "./App.css";
// import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustomItemContext, { itemContext } from "./itemContext";
// import { totalContext } from "./totalContext";

function App() {
//   const [total, setTotal] = useState(0);
//   const [item, setItem] = useState(0);
  return (
    // providing multiple contexts
    <CustomItemContext>
     <div className="App">
          <h2>Shopping Cart</h2>
          <Navbar />
          <Items />
        </div>
    </CustomItemContext>
     
   
  );
}
export default App;
