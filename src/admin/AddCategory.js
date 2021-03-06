import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import {createCategory} from "./helper/adminapicall"

const AddCategory = () => {

  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const goBack = () => (
    <div className="mt-5"> 
    {/* btn-success */}
      <Link className="btn btn-sm btn-dark mb-4" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handleChange = event => {
      setError("");
      setName(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false)

    //backend request fired //admin apicall ko check kro udhar { name  } category ??
    createCategory(user._id, token, { name }).then(data => {
        if(data.error){
            setError(true);
        }else{
            setError("");
            setSuccess(true);
            setName("");
        }

    });
  }

  const successMessage = () => {
      if(success) {
          return <h4 className="text-success">Category is Created Successfully</h4>
      }
  };
   const warningMessage = () => {
      if(error) {
          return <h4 className="text-success">Failed to create Category</h4>
      }
  };


  const myCategoryForm = () => (
    <form>
      <div className="form-group"><br />
      {/* font-monospace */}
        <p className="fs-4 text-center">Enter the category</p>
       {/* <select className="form-control form-control-lg"><option >select</option> </select> */}
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For Ex. Summer"
        />
        {/* btn-outline-info */}
        <button onClick={onSubmit} className="btn btn-outline-dark">Create Category</button>
      </div>
      <br />
    </form>
  );

  return (
    <Base
      title="Create a Category Here"
      // for new tshirts
      description="Add a new category"
      // bg-info
      className="container p-4"
    >
      <div className="row shadow bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}

          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
