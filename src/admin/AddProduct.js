import React, {useState, useEffect} from 'react'
import Base from '../core/Base'
import {Link} from 'react-router-dom'
import { getCategories, createProduct } from './helper/adminapicall';
import { isAuthenticated } from '../auth/helper';


const AddProduct = () => {

  const { user, token } = isAuthenticated();

    const [values, setValues] = useState({
        name: "",
        description: "",
        price:"",
        stock:"",
        photo:"",
        categories:[],
        category:"",
        loading: false,
        error:"",
        createdProduct:"",
        getaRedirect: "",
        formData: ""

    });

        const {name, description, price, stock, categories, category,loading,error,createdProduct,getaRedirect,formData} = values;

        const preload = () => {
            getCategories()
            .then(data => {
                 console.log(data);
                if(data?.error){ //data.error
                    setValues({...values, error: data.error})
                }else{
                    setValues({...values, categories: data, formData: new FormData()})
                    // console.log("CATE:",categories);
                }
            })
        }
        
        useEffect(() => {
           preload();
        }, []);

    const onSubmit = (event) => {
      event.preventDefault();
      setValues({...values, error: "", loading: true})
      createProduct(user._id, token, formData).then(data =>{
        if(data.error){
          setValues({...values, error: data.error})
        }else{
          setValues({
            ...values,
            name:"",
            description: "",
            price: "",
            photo: "",
            stock: "",
            loading: false,
            createdProduct: data.name
          
          
          })
        }
      })
    }
 const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };


  const successMessage = () => (
     <div className="alert alert-success mt-2" 
    style={{display: createdProduct ? "" : "none"}}    
    >
      <h4>{createdProduct} created successfully</h4>
    </div>
  )
   
   

    const createProductForm = () => (
    <form >
    <div className="my-2 text-dark"><span style={{fontWeight: "bold"}}>Post photo</span></div>  
      <div className="form-group">
        <label className="form-control btn btn-block btn-dark my-1">
          <input
        //   className="form-control"
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control my-2"
          placeholder="Category Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control my-2"
          placeholder="Medicine Name"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control my-2"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control my-2"
          placeholder="Category"
        >
          <option>Select</option>
          {/* <option value="a">a</option>
          <option value="b">b</option> */}
          {categories && categories.map((cate, index) => (
            <option key={index} value={cate._id}>{cate.name} </option>
          ))
          }
          {/* console.log(cate.name) */}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("stock")}
          type="number"
          className="form-control my-2"
          placeholder="Stock"
          value={stock}
        />
      </div>
      
      <button type="submit" 
      onClick={onSubmit} 
      className="btn btn-outline-dark mb-3 my-3">
        Create Product
      </button>
    </form>
  );



    return (
      // Welcome To 
        <Base title="Product Creation Section" 
        description="Add new product here"
        //  bg-info
        className="container p-4"
        >
            <Link to= "/admin/dashboard" className="btn btn-md btn-dark mb-3">
                Admin Home
            </Link>
            {/* bg-dark */}
            <div className="row bg-white shadow text-white rounded">
                <div className="col-md-8 offset-md-2">
                {successMessage()}
                {createProductForm()}
                </div>
            </div>
        </Base>
    )
}

export default AddProduct;