import React from 'react';
import ProductConsumer from "../context";
import Cart from "../component/Cart";
import {useLocation} from "react-router-dom";

function Detail(props) {
    const location = useLocation();
    const {product} = location.state;

    const addToCart = (product, cart, dispatch, e) => {
        product.price = parseInt(product.price)
        const productKey = `product${product.id}`;
        const products = cart.products;
        cart.totalPrice += product.price

        if(productKey in products){
            products[productKey].piece++
            products[productKey].totalPrice = products[productKey].price * products[productKey].piece
        }else{
            product.piece = 1
            products[productKey] = product
            products[productKey].totalPrice = product.price
        }

        dispatch({type: 'ADD_TO_CART', payload: cart})
    }

    return (
        <ProductConsumer>
            {
                value => {
                    const {cart, dispatch} = value;

                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 detail-container mt-4 p-3">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img src="http://placeimg.com/640/480/sports" alt=""/>
                                        </div>
                                        <div className="col-lg-6">
                                            <h1>{product.name}</h1>
                                            <h3 className="text-primary">{product.price} ₺</h3>
                                            <button className="btn btn-primary mt-5 mb-2 w-100" onClick={addToCart.bind(this, product, cart, dispatch)}>Add to Cart</button>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <Cart/>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        </ProductConsumer>
    )
}

export default Detail;