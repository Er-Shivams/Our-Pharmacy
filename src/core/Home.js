import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data?.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };


  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    // Home Page  Welcome to the Tshirt Store 
    <Base title="Our Medical Store" description="Because life always matters no matter what.">
    {/* text-center */}
      <div className="row">
      <div className="d-flex align-items-center justify-content-between">
            {/* dropdown */}
            <div class="dropdown ">
              <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Categories &nbsp;
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {products.map((product, index) => {
                    return (
                      // here Product name is category in frontend
                      <a key={index} class="dropdown-item" href="#">{product.name}</a>  
                    );
                  })}
              </div>
            </div>

            <h1 style={{marginLeft:"10rem"}} className="text-dark mt-4 mb-4 ">Shop Medicines</h1>
            {/* search bar */}
            <form  class="form-inline d-flex p-0 ">
                <input style={{ width:"13rem"}} class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-dark rounded  mx-2" type="submit">Search</button>
            </form>
      </div>
        
        <div className="row mt-3 mb-4">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-2 mb-4">
                <Card product={product} />
              </div>
            );
          })} 
        </div>
      </div>
    </Base>
  );
}
