import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email, role }
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white text-center">Admin Navigation</h4>
        <ul className="list-group">
        {/* list-group-item-primary */}
          <li className="list-group-item list-group-item-action  text-center">  {/* adding list-group-item-action */}
            <Link to="/admin/create/category" className="nav-link text-dark">
              Create Categories
            </Link>
          </li>
          {/* list-group-item-secondary */}
           <li className="list-group-item list-group-item-action text-center"> 
           {/* adding list-group-item-action */}
            <Link to="/admin/categories" className="nav-link text-dark">
              Manage Categories
            </Link>
          </li>
          {/* list-group-item-success */}
          <li className="list-group-item list-group-item-action text-center"> {/* adding list-group-item-action */}
            <Link to="/admin/create/product" className="nav-link text-dark">
              Create Product
            </Link>
          </li>
          {/* list-group-item-danger */}
          <li className="list-group-item list-group-item-action  text-center"> {/* adding list-group-item-action */}
            <Link to="/admin/products" className="nav-link text-dark">
              Manage Products
            </Link>
          </li>
          {/* list-group-item-warning */}
          <li className="list-group-item list-group-item-action text-center"> {/* adding list-group-item-action */}
            <Link to="/admin/orders" className="nav-link text-dark">
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge bg-success mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge bg-success mr-2">Email:</span> {email}
          </li>

          <li className="list-group-item">
            <span className="badge bg-danger">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to Retailer Area"
      description="Manage all of your products here"
      // bg-success
      className="container p-4"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
