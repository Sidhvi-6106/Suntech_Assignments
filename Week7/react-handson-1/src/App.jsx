import React from "react"
import Products from "./components/Products"
function App(){
  return (
    <div>
      {/* {
        Products.map(prodObj=> <Products product={prodObj} key={prodObj.productId}/>)
      } */}
      <Products />
    </div>
  );
}

export default App; 