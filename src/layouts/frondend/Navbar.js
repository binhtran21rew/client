import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom';
function Navbar(){
    const history = useHistory()
    const handleLogout = (e) => {
        e.preventDefault();
        axios.post(`/api/logout`)
            .then(res => {
                if(res.data.status === 200){
                    localStorage.removeItem('auth_token')
                    localStorage.removeItem('user_name')
                    swal("success", res.data.message, 'success')
                    history.push('/')
                }
            })

    }
    var AuthButton = ''
    if(!localStorage.getItem('auth_token')){
        AuthButton = (
            <>
            <Link to="/login" className=" m-2 fs-5" >Login</Link>
            <Link to="/register" className=" m-2 fs-5" >Register</Link>
            
            </>
        )
    }else{
        AuthButton = (
            <button type="button" onClick={handleLogout} className="nav-link btn btn-danger btn-sm text-white" >Logout</button>

        )
    }


    return (
        <div className="container-fluid">
                <div className="row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a href="" className="text-decoration-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                </div>
                <div className="col-lg-6 col-6 text-left">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for products" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent text-primary">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-6 text-right">
                    {AuthButton}
                </div>
            </div>
        </div>

    )
}

export default Navbar