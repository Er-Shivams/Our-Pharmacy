import React from "react";
import Menu from "./Menu";
import "../styles.css"

// if using () dont use return keyword if using {} then use return keyword

const Base = ({
    title = "My Title",
    description = "My description",
    className = " text-white p-4",
    children 
}) => (

    <div>
        <Menu />
        <div className="container-fluid mt-4">
            <div className="jumbotron text-dark text-center">
                <h2 style={{fontWeight: "bold"}} className="display-2"> {title} </h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer bg-dark py-3">
            <div className="container-fluid bg-dark text-white text-center py-3">
                <h4> if you got any question, feel free to reach out!</h4>
                <button style={{backgroundColor: "#F1E4FF"}} className="btn btn-block mt-4">Contact us</button>
            </div>
            {/* <div className="container">
                <span className="text-muted"> An amazing  <span className="text-white">MERN</span>  Bootcamp</span>
            </div> */}
        </footer>
    </div>
)


export default Base;