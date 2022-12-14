import React, {useState} from 'react';
import {ProductContext} from "../context";
import axios from "axios";

function Filter(props) {
    const context = React.useContext(ProductContext);
    const {dispatch} = context;

    const brandList = ["Tesla", "Toyota", "Rolls Royce"];
    const [brandChecked, setBrandChecked] = useState([]);

    const sortBy = async (e) => {
        console.log(e.target.value)
        let endpoint = 'p=1&l=12&';

        switch (e.target.value) {
            case "oldToNew":
                endpoint += 'sortBy=createdAt&order=asc'
                break;
            case "newToOld":
                endpoint += 'sortBy=createdAt&order=desc'
                break;
            case "priceHighToLow":
                endpoint += 'sortBy=price&order=desc'
                break;
            case "priceLowToHigh":
                endpoint += 'sortBy=price&order=asc'
                break;
            default:
                break;
        }

        const response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products?${endpoint}`)

        dispatch({type: 'UPDATE_PRODUCT_LIST', payload: response.data})
    }

    const brandFilter = async (e) => {
        var updatedList = [...brandChecked];
        if (e.target.checked) {
            updatedList = [...brandChecked, e.target.value];
        } else {
            updatedList.splice(brandChecked.indexOf(e.target.value), 1);
        }
        setBrandChecked(updatedList);

        console.log(brandChecked)

        let endpoint = 'p=1&l=12';

        if(updatedList.length > 0){
            endpoint += '&brand=tesla'
        }

        // brandChecked.map(brand => {
        //     endpoint += `&brand=${brand}`
        // })

        const response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products?${endpoint}`)

        console.log(response)

        dispatch({type: 'UPDATE_PRODUCT_LIST', payload: response.data})
    }

    return (
        <div className="container mb-4 p-1">
            <label htmlFor="" className="cart-product-label">Sort By</label>
            <div className="container px-3 py-2 cart-product-container mb-4">
                <div className="row mb-1">
                    <ul className="list-group">
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sortBy"
                                    id="sortBy"
                                    value="oldToNew"
                                    onChange={sortBy}
                                />
                                <label className="form-check-label" htmlFor="sortBy">
                                    Old to new
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sortBy"
                                    id="sortBy"
                                    value="newToOld"
                                    onChange={sortBy}
                                />
                                <label className="form-check-label" htmlFor="sortBy">
                                    New to old
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sortBy"
                                    id="sortBy"
                                    value="priceHighToLow"
                                    onChange={sortBy}
                                />
                                <label className="form-check-label" htmlFor="sortBy">
                                    Price high to low
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item border-0">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sortBy"
                                    id="sortBy"
                                    value="priceLowToHigh"
                                    onChange={sortBy}
                                />
                                <label className="form-check-label" htmlFor="sortBy">
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
                        {
                            brandList.map((brand, index) => (
                                <li className="list-group-item border-0" key={index}>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={brand}
                                            id="defaultCheck1"
                                            name="brands[]"
                                            onChange={brandFilter}
                                        />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            {brand}
                                        </label>
                                    </div>
                                </li>
                            ))
                        }
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