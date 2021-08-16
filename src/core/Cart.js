import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
   
     
      //  <div >
      //   <h2 className="text-dark">This section is to load products</h2>
      //   {products.map((product, index) => (
      //     <Card
      //       key={index}
      //       product={product}
      //       removeFromCart={true}
      //       addtoCart={false}
      //       setReload={setReload}
      //       reload={reload}
      //     />
      //   ))}
      // </div>
       return (
            products.map((product, index) => {
              return (
                  <div className="col-2 mb-4">

                  <Card
                    key={index}
                    product={product}
                    removeFromCart={true}
                    addtoCart={false}
                    setReload={setReload}
                    reload={reload}
                  />
                  </div>
              );
              })
           )
     
   
  };
  const loadCheckout = () => {
    return (
      <div >
        <h2 >This section for checkout</h2>
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row">
      <div className="text-center">
      {/* <div></div>style={{marginLeft:"16rem"}} */}
       <h2 className="text-dark" >Continue To Checkout</h2>
        <div className="text-center mb-4 mt-4 p-0">
          <StripeCheckout products={products} setReload={setReload} />
        </div>
      </div>
        <div className="row mt-4">{loadAllProducts(products)}</div>
      </div>
    </Base>
  );
};

export default Cart;
