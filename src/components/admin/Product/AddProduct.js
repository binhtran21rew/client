import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import slug from '../../../utils/CreateSlug'


function ViewProduct(){
    const [productInput, setProductInput] = useState({
        category_id: '',
        name:'',
        slug:'',
        description: '',
        status: '',
        seller_price: '',
        origin_price:'',
        brand: '',
        color: '',
        quantity:'',
    });
    const [picture, setPicture] = useState([])
    const handleInput = (e) => {
        e.persist()
        setProductInput({...productInput, [e.target.name]: e.target.value})
    }
    const handleImageInput = (e) => {
        setPicture({ image: e.target.files[0]})
    }
    const[cateList, setCateList] = useState([])
    useEffect(() => {
        axios.get('/api/allCategory')
            .then( res => {
                if(res.data.status === 200){
                    setCateList(res.data.categories)
                }
            })
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = new FormData()
        data.append('image', picture)
        data.append('category_id', productInput.category_id)
        data.append('name', productInput.name)
        data.append('slug', slug(productInput.name))
        data.append('description', productInput.description)
        data.append('status', productInput.status)
        data.append('seller_price', productInput.seller_price)
        data.append('origin_price', productInput.origin_price)
        data.append('brand', productInput.brand)
        data.append('color', productInput.color)
        data.append('quantity', productInput.quantity)

        

        axios.post('/api/add-product',data)
            .then(res => {
                if(res.data.status === 200){

                }
            })
    }
    return (
        <div className="container-fluid px-4">
        <div className="card mt-4">
            <div className="card-header">
                <h3> Add product
                    <Link to="/admin/Add_product" className="btn btn-primary btn-sm float-end">Add category</Link>
                </h3>
            </div>
            <div className="card-body">
                    <form onSubmit={handleSubmit}  encType="multipart/form-data">
                        <ul className="nav nav-tabs mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="info-tab" data-bs-toggle="pill" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="true">Infomation</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="detail-tab" data-bs-toggle="pill" data-bs-target="#detail" type="button" role="tab" aria-controls="detail" aria-selected="false">Orther detail</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane card-body border fade show active" id="info" role="tabpanel" aria-labelledby="info" tabIndex="0">
                                <div className="form-group mb-3">
                                    <label>Select Category</label>
                                    <select name="category_id" onChange={handleInput} value={productInput.category_id} className="form-control" >
                                        <option>---Select---</option>  
                                        {
                                            cateList.map(data => {
                                                return (
                                                    <option value={data.id} key={data.id}>{data.name}</option>
                                                )
                                            })
                                        }  
                                    </select> 
                                </div>
                                <div className="form-group mb-3">
                                    <label>Name</label>
                                    <input type="text" name="name" onChange={handleInput} value={productInput.name}  className="form-control"/>    
                                </div>    
                                <div className="form-group mb-3">
                                    <label>Description</label>
                                    <input type="text" name="description" onChange={handleInput} value={productInput.description}  className="form-control"/>    
                                </div>         
                                <div className="form-group mb-3">
                                    <label className=" mb-3">Status</label>
                                    <input type="checkbox" name="status"  onChange={handleInput} value={productInput.status} />    
                                </div>
                            </div>
                            <div className="tab-pane fade" id="detail" role="tabpanel" aria-labelledby="detail" tabIndex="0">
                                <div className="row">
                                    <div className="col-md-4 form-group mb-3">
                                        <label> Selling Price</label>
                                        <input type="number" min={0}  name="seller_price" onChange={handleInput} value={productInput.seller_price} className="form-control" />
                                    </div>
                                    <div className="col-md-4 form-group mb-3">
                                        <label> Original Price</label>
                                        <input type="number" min={0}  name="origin_price" onChange={handleInput} value={productInput.origin_price} className="form-control"/>
                                    </div>

                                    <div className="col-md-4 form-group mb-3">
                                        <label> Brand</label>
                                        <input type="text" name="brand" onChange={handleInput} value={productInput.brand} className="form-control"/>
                                    </div>
                                    <div className="col-md-4 form-group mb-3">
                                        <label> Color</label>
                                        <input type="text" name="color" onChange={handleInput} value={productInput.color} className="form-control"/>
                                    </div>
                                    <div className="col-md-4 form-group mb-3">
                                        <label> Quantity </label>
                                        <input type="number" min={0} name="quantity" onChange={handleInput} value={productInput.quantity} className="form-control"/>
                                    </div>
                                    <div className="col-md-8 form-group mb-3">
                                        <label> Image</label>
                                        <input type="file" name="image" onChange={handleImageInput} className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary px-4 float-end">Save</button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    )
}

export default ViewProduct