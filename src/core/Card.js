import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f}
  reload = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "product name";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";
  const cartCategory = product ? product.category : "DEFAULT Category";
  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart)=> {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-dark mt-2 mb-2"
      
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
            
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from Cart
        </button>
      )
    );
  };
  return (
    //  border border-info 
    
    <div className="card shadow-lg text-white bg-white">
      {/* <div className="card-header bg-dark lead">{cartTitle}</div> */}
      <div className="card-body shadow-lg">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        {/* bg-success */}
        <p style={{fontWeight: 'bold',fontSize:'0.8vw',textOverflow:'ellipsis', overflow: 'hidden'}}  className="lead text-dark text-center text-wrap">
          {cartDescrption}
        </p>
        {/* btn btn-success btn-sm*/}
        
        <div className="row">
          <p style={{fontWeight: '600',fontSize:'0.9vw'}} className="text-dark col-6 mt-2 mb-2 ">MRP ₹{cartPrice}</p>
          {/* {
                false
                ? 
          } */}
          <div  className="col-6 text-end">{showAddToCart(addtoCart)}</div> 
          <div className="text-start">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
