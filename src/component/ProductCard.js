import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProductConsumer from "../context";

class ProductCard extends Component {
    addToCart = (product, cart, dispatch, e) => {
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

    render() {
        const {product} = this.props;

        return (
            <ProductConsumer>
                {
                    value => {
                        const {dispatch, cart} = value;

                        return (
                            <div className="col-md-3 mb-4">
                                <div className="card">
                                    <Link to={`/detail/${product.id}`} state={{product: product}}>
                                        <img src={product.image} className="card-img-top" alt={product.name} loading="lazy"/>
                                    </Link>
                                    <div className="card-body">
                                        <Link to={`/detail/${product.id}`} props={product.id}>
                                            <h5 className="card-title text-primary">{product.price} ₺</h5>
                                            <p className="card-text">{product.name}</p>
                                        </Link>
                                        <button type="button" className="btn btn-primary mt-1 w-100" onClick={this.addToCart.bind(this, product, cart, dispatch)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            </ProductConsumer>
        )
    }
}

export default ProductCard;