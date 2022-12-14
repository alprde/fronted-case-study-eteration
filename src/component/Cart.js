import React from 'react';
import {ProductContext} from "../context";

function Cart(props) {
    const context = React.useContext(ProductContext);
    const {dispatch, cart} = context;
    const cartProducts = cart.products;

    const increaseCartPiece = (product, cart, dispatch, e) => {
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

    const decreaseCartPiece = (product, cart, dispatch, e) => {
        const productKey = `product${product.id}`;
        const products = cart.products;

        products[productKey].piece--;
        products[productKey].totalPrice = products[productKey].price * products[productKey].piece;
        cart.totalPrice -= products[productKey].price;

        if(products[productKey].piece === 0){
            delete products[productKey]
        }

        dispatch({type: 'REMOVE_FROM_CART', payload: cart})
    }


    return (
        <div className="container mb-4 p-1">
            <label htmlFor="" className="cart-product-label">Cart</label>
            <div className="container px-3 py-2 cart-product-container mb-3">
                {
                    Object.keys(cartProducts).map((key) => {
                        // price = price.toLocaleString('tr-TR', {
                        //     style: 'currency',
                        //     currency: 'TRY'
                        // }).replace('₺', '')
                        const product = cartProducts[key];

                        return (
                            <div className="row mb-1" key={product.id}>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column">
                                        <div>{product.name}</div>
                                        <small className="text-primary">{product.price} ₺</small>
                                    </div>
                                    <div className="btn-group">
                                        <button className="btn btn-light btn-md" onClick={decreaseCartPiece.bind(this, product, cart, dispatch)}>-</button>
                                        <button className="btn btn-primary btn-md">{product.piece}</button>
                                        <button className="btn btn-light btn-md" onClick={increaseCartPiece.bind(this, product, cart, dispatch)}>+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {Object.keys(cartProducts).length === 0 ? <div className="text-center">Cart is empty</div> : null}
            </div>

            <label htmlFor="" className="cart-product-label">Checkout</label>
            <div className="container px-3 py-2 cart-product-container">
                <div className="row mb-1">
                    <div className="d-flex flex-column">
                        <div className="mb-2">
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item border-0 ps-0">Total Price: </li>
                                <li className="list-group-item border-0 text-primary ps-0">{cart.totalPrice} ₺</li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-primary btn-md">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;