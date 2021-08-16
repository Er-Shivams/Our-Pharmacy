import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { signout, isAuthenticated ,isA} from '../auth/helper';
import logo from './logo.svg';

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color: "#2ecc72"}
    }
    else{
        return {color: "#FFFFFF"}
    }
}
const Menu = ({history}) => (
        <div>
            <ul className="nav nav-tabs bg-dark p-2" >
                <li className="nav-item active">
                    <Link style={currentTab(history, "/")} className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                 <li className="nav-item">
                    <Link style={currentTab(history, "/Cart")}  className="nav-link" to="/Cart">
                        Cart
                    </Link>
                </li>

             {isAuthenticated() && isAuthenticated().user.role===0 && (
                    
                 <li className="nav-item">
                    <Link style={currentTab(history, "/user/dashboard")}  className="nav-link" to="/user/dashboard">
                       U. Dashboard
                    </Link>
                </li>
              )}

            
              {isAuthenticated() && isAuthenticated().user.role===1 && (

                     <li className="nav-item">
                    <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                        A. Dashboard
                    </Link>
                    </li>
              )}
        
              
                
            
                {!isAuthenticated() && (
                      <Fragment>
                     <li className="nav-item">
                    <Link style={currentTab(history, "/signup")} className="nav-link" to="/signup">
                        Register
                    </Link>
                </li>
                 <li className="nav-item">
                    <Link style={currentTab(history, "/signin")} className="nav-link" to="/signin">
                        Login
                    </Link>
                </li>
                </Fragment>
                )}
                
                {isAuthenticated() && (
                    <li className="nav-item">
                        <span 
                        className="nav-link text-warning"
                        onClick={() => {
                            signout(() => {
                                history.push("/")
                            })
                        }}
                        >
                        Logout
                        </span>
                    </li>
                )}
                    <Link style={currentTab(history, "/")}  to="/">
                        <img style={{marginLeft:'520px'}} height="40" width="150" src={logo} alt="" />
                    </Link>
                
            </ul>
          
            
        </div>
)


export default withRouter(Menu);
