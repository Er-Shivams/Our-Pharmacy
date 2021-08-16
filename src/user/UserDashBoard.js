import React from "react";
import Base from "../core/Base";


const UserDashBoard = () => {
    return (
                <Base title="User Dashboard" description="Welcome Back!">
                <h1 className="text-dark text-center  mt-4"> Order History </h1>
                <div className="row d-flex justify-content-center mt-4">
                <div className="col-7 text-center">
                <table class="table table-bordered">
                <thead class="thead-dark bg-dark text-white">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                    <th scope="row">1</th>
                    <td>Calcimax Forte Plus</td>
                    <td>Health Suppliment</td>
                    <td>Health Suppliment</td>
                    <td>₹270.5</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Abzorb Anti Fungal Powder</td>
                    <td>Allergys</td>
                    <td>Allergys</td>
                    <td>₹135</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Depura 60k Nano Vit D</td>
                    <td>Health Suppliment</td>
                    <td>Health Suppliment</td>
                    <td>₹90.67</td>
                    </tr>
                </tbody>
                </table>
                </div>
                </div>
                <div style={{marginTop: "150px"}}></div>
                </Base>
    )
}

export default UserDashBoard;