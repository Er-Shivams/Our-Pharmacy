import React, {useState} from "react";
import Base from "../core/Base";
import {Link, Redirect} from "react-router-dom";
import { authenticate, isAuthenticated ,signin } from "../auth/helper";

const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        loading: false,
        didRedirect: false
    });

    const {email, password,error, loading, didRedirect} = values;
    const {user} = isAuthenticated();


     //higher order function hitesh chau. channel
     const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
     }

     const onSubmit = event =>{

        event.preventDefault();
        setValues({...values, error:false, loading:true})
        signin({email, password})
        .then(data => {
                if(data.error){
                    setValues({...values, error:data.error, loading:false})
                }else{
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                }
        })
        .catch(console.log("signin request failed"))

     }

     const performRedirect = () => {
         //TODO: redirect here
         if(didRedirect){
             if(user && user.role === 1){
                 return <Redirect to="/admin/dashboard" />//<p>redirect to Admin</p>
             }else{
                  return <Redirect to="/user/dashboard" /> //<p>redirect to user dashboard</p>
             }
         }
         if(isAuthenticated()){
             return <Redirect to="/" />
         }
     }
      const loadingMessage = () => {
      return( 
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        ) 
    }
     const errorMessage = () => {
        return(
             <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
            <div className="alert alert-danger" 
        style={{display: error ? "" : "none"}}>

        {error}
        </div>
        </div>
        </div>
        )
    }
        const signInForm = () => {

        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input onChange={handleChange("email")} value={email} className="form-control" type="email" />
                        </div>
                         <div className="form-group">
                            <label className="text-light">Password</label>
                            <input onChange={handleChange("password")} value={password} className="form-control" type="password" />
                        </div>
                        <br/>
                             <button onClick={onSubmit} className="btn btn-dark btn-lg btn-block form-control">Login Now</button>
                             <button onClick={onSubmit} className="btn btn-outline-dark mt-3 btn-lg btn-block form-control">Forget Password?</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        //Sign up Page && A page for user to Sign in! 
        <Base title = "Welcome Back" description="Customer/ Retailer Login">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
            {/* <p className="text-dark text-center">{JSON.stringify(values)}</p> */}
            <div style={{marginTop:'70px'}}></div>

        </Base>
    );
};

export default Signin;