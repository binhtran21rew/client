import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
function Cart(){
    const history = useHistory()
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    if(!localStorage.getItem('auth_token')){
        history.push('/')
        swal("Warning", "login to go to cart page", "error")
    }
    useEffect(() => {
        let isMounted = true;
        axios.get(`/api/cart`)
        .then(res => {
                if(isMounted){
                    if(res.data.status === 200){
                        setCart(res.data.cart)
                        setLoading(false)
                    }else if(res.data.status === 401){
                        swal("Warning", res.data.message, "error") 
                        history.push('/')

                    }
                }
            })
            return () => {
                isMounted = false
            }
    }, [history])
    const handleDecrement = (id) => {
        setCart(cart => 
            cart.map((item) => 
            id === item.id ? {...item, product_quantity: item.product_quantity - (item.product_quantity > 1 ? 1:0)} : item
            )
        )
        
        setTimeout(() => {
            updateQuantityCart(id, 'dec')
        }, 2000)

    }
    const handleIncrement = (id) => {
        setCart(cart => 
            cart.map((item) => 
                id === item.id ? {...item, product_quantity: item.product_quantity + (item.product_quantity < item.product.quantity ? 1:0)} : item
            )
        )
        setTimeout(() => {
            updateQuantityCart(id, 'inc')
        }, 2000)

    }

    const  updateQuantityCart = (id, scope) => {
    axios.put(`api/cartUpdateQuantity/${id}/${scope}`)
            .then( res => {
                if(res.data.status === 200){
                    swal('Success', res.data.message, 'success');
                }else if (res.data.status === 409){
                    swal('Warning', res.data.message, "error")
                }
            })
    }
    if(loading){
        return <h4>Loading Cart</h4>
    }else{
        var displayItem = ''
        displayItem = cart.map( (item, i) => {
            return (
                <tr key={i}>
                    <td width="10%">
                        <img src={`http://localhost:8000/${item.product.image}`} alt={item.product.name} width="50px" height="50px"/>
                    </td>
                    <td className='text-center '>{item.product.name}</td>
                    <td width= "15%"  className='text-center '>{item.product.seller_price}</td>
                    <td width= "15%">
                        <div className='input-group'>
                            <button type='button' className='input-group-text' onClick={() => handleDecrement(item.id)}>-</button>
                            <div className='form-control text-center'>{item.product_quantity}</div>
                            <button type='button' className='input-group-text' onClick={() => handleIncrement(item.id)}>+</button>
                        </div>
                    </td>
                    <td width= "15%" className='text-center '>{item.product_quantity * item.product.seller_price}</td>
                    <td width= "15%" className='text-center '>
                        <button className='btn btn-danger btn-sm'>Remove</button>
                    </td>

                </tr>
            )
        })
    }
    var displayCart = ''
    if(cart.length > 0){
        displayCart = 
        (
            <div className="table-responsive">
                <table className=" table table-bordered">
                    <thead>
                        <tr>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Product</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Total price</th>
                            <th className='text-center'>Update</th>

                            <th className='text-center'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayItem}
                    </tbody>
                </table>
            </div>
        )
    }else{
        displayCart = 
        (
            <div>
                <div className='card card-body py-5 text-center shadow-sm'>
                    <h4>Your Shopping Cart id empty</h4>
                    <Link to="/collections" > Please add your product here</Link>
                </div>
            </div>
        )
    }
    return (
        <div>
        <div className="py-3 bg-warning">
            <div className="container">
                <h4>Collections / cart</h4>
            </div>
        </div> 

        <div className="py-4 ">
            <div className="container">
                <div className="row">
                    <div className= "col-md-12">
                        {displayCart}
                    </div>
                </div>
                

            </div>

        </div>
    </div>
    )
}
export default Cart