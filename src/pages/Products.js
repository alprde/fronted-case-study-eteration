import React, {Component} from 'react';
import ProductCard from "../component/ProductCard";
import ProductConsumer from "../context";
import Cart from "../component/Cart";
import Filter from "../component/Filter";
import Paginate from "../component/Paginate";

class Products extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {products} = value;

                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2">
                                        <Filter/>
                                    </div>
                                    <div className="col-md-7" style={{marginTop: '2.5rem'}}>
                                        <div className="row">
                                            {
                                                products.map(product => {
                                                    product.price = parseInt(product.price)

                                                    return(
                                                        <ProductCard
                                                            key={product.id}
                                                            product={product}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <Cart/>
                                    </div>
                                </div>
                                <div className="row">
                                    <Paginate/>
                                </div>
                            </div>
                        );
                    }
                }
            </ProductConsumer>
        )
    }
}

export default Products;