import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="container mb-4 p-1">
                <label htmlFor="" className="cart-product-label">Sort By</label>
                <div className="container px-3 py-2 cart-product-container">
                    <div className="row mb-1">
                        <ul className="list-group">
                            <li className="list-group-item border-0">Old to new</li>
                            <li className="list-group-item border-0">New to old</li>
                            <li className="list-group-item border-0">Price high to low</li>
                            <li className="list-group-item border-0">Price low to high</li>
                        </ul>
                    </div>
                </div>

                <label htmlFor="" className="cart-product-label">Brands</label>
                <div className="container px-3 py-2 cart-product-container">
                    <div className="row mb-1">
                        <ul className="list-group">
                            <li className="list-group-item border-0">Old to new</li>
                            <li className="list-group-item border-0">New to old</li>
                            <li className="list-group-item border-0">Price high to low</li>
                            <li className="list-group-item border-0">Price low to high</li>
                        </ul>
                    </div>
                </div>

                <label htmlFor="" className="cart-product-label">Model</label>
                <div className="container px-3 py-2 cart-product-container">
                    <div className="row mb-1">
                        <ul className="list-group">
                            <li className="list-group-item border-0">Old to new</li>
                            <li className="list-group-item border-0">New to old</li>
                            <li className="list-group-item border-0">Price high to low</li>
                            <li className="list-group-item border-0">Price low to high</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;