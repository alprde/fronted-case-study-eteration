import React from 'react';
import {ProductContext} from "../context";
import Filter from "../component/Filter";
import ProductCard from "../component/ProductCard";
import Cart from "../component/Cart";
import Paginate from "../component/Paginate";

function Products(props) {
    const context = React.useContext(ProductContext);
    const {products} = context;

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

export default Products;