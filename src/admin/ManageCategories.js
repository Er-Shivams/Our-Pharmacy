import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getCategories } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <Base title="Welcome admin" description="Manage Category Here">
      {/* <h2 className="mb-4 text-dark">All products:</h2> */}
           <Link className="btn btn-dark mt-3" to={`/admin/dashboard`}>
              Admin Home
           </Link>
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          {/* <h2 className="text-center text-dark my-3">Total 3 products</h2> */}

          <table class="table table-bordered mt-2">
          
            <thead class="thead-dark bg-dark text-light text-center">
            
              <tr>
                <th  className="col-4">Name</th>
                <th  className="col-4">Update</th>
                <th  className="col-4">Delete</th>
              </tr>
            </thead>
          <tbody>
          {categories.map((category, index) => {
            return (
              //<div className="row text-center mb-2 ">
                <tr className="text-center bg-white">
                <td className="col-4 ">
                  <h3 className="text-dark" key={index}>
                    {category.name}
                  </h3>
                </td>
 
            <td className="col-4 ">
              <Link
                className="btn btn-success"
                to={`/admin/product/update/productId`}
              >
                <span className="">Update</span>
              </Link>
            </td>
            <td className="col-4 ">
              <button onClick={() => {}} className="btn btn-danger">
                Delete
              </button>
            </td>
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

export default ManageCategories;
