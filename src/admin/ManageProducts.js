import React, { useState, useEffect } from "react";

import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getProducts, deleteProduct } from "./helper/adminapicall";

export const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getProducts().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisProduct = productId => {
    deleteProduct(productId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base title="Welcome admin" description="Manage Products Here">
      {/* <h2 className="mb-4 ">All products:</h2> */}
          <Link className="btn btn-dark mt-3" to={`/admin/dashboard`}>
              Admin Home
           </Link>
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          {/* <h2 className="text-center text-white my-3">Total 3 products</h2> */}
           
          <table class="table table-bordered mt-2">
          
            <thead class="thead-dark bg-dark text-light text-center">
            
              <tr>
                <th  className="col-4">Name</th>
                <th  className="col-4">Update</th>
                <th  className="col-4">Delete</th>
              </tr>
            </thead>
        
          <tbody >
          {products.map((product, index) => {
            return (
              <tr className="text-center bg-white">
              {/* <div key={index} className="row text-center mb-2 "> */}
                <td className="col-4 ">
                <div>
                  <h4>{product.name}</h4>
                </div>
                </td>
                <td className="col-4">
                <div >
                  <Link
                    className="btn btn-success"
                    to={`/admin/product/update/${product._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                </td>
                <td className="col-4">
                <div>
                  <button
                    onClick={() => {
                      deleteThisProduct(product._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
                </td>
                 {/* <hr className="text-dark" /> */}
              {/* </div> */}
             </tr>
            );
          })}
          </tbody>
             
          </table>
          
        </div>
      </div>
    </Base>
  );
};

export default ManageProducts;
