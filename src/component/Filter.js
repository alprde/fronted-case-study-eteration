import React from 'react';
import {ProductContext} from "../context";

function Filter(props) {
    const context = React.useContext(ProductContext)

    return (
        <div className="container mb-4 p-1">
            <label htmlFor="" className="cart-product-label">Sort By</label>
            <div className="container px-3 py-2 cart-product-container mb-4">
                <div className="row mb-1">
                    <ul className="list-group">
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios"
                                       id="exampleRadios1" value="option1"/>
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Old to new
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios"
                                       id="exampleRadios2" value="option2"/>
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    New to old
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios"
                                       id="exampleRadios3" value="option3"/>
                                <label className="form-check-label" htmlFor="exampleRadios3">
                                    Price high to low
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios"
                                       id="exampleRadios4" value="option4"/>
                                <label className="form-check-label" htmlFor="exampleRadios4">
                                    Price low to high
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <label htmlFor="" className="cart-product-label">Brands</label>
            <div className="container px-3 py-2 cart-product-container mb-4">
                <div className="row mb-1">
                    <ul className="list-group">
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Apple
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Samsung
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Huawei
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <label htmlFor="" className="cart-product-label">Model</label>
            <div className="container px-3 py-2 cart-product-container mb-4">
                <div className="row mb-1">
                    <ul className="list-group">
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    11
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    12 Pro
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    13 Pro Max
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Filter;