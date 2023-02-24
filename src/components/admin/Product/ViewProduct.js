import React from "react";
import { Link } from "react-router-dom";

function ViewProduct(){
    return (
        <div className="container-fluid px-4">
        <div className="card mt-4">
            <div className="card-header">
                <h3> Category View
                    <Link to="/admin/Add_product" className="btn btn-primary btn-sm float-end">Add category</Link>
                </h3>
            </div>
            <div className="card-body">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default ViewProduct