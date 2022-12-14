import React from 'react';
import ProductConsumer from "../context";
import axios from "axios";

function Header(props) {
    const search = async (dispatch, e) => {
        let response = '';

        if(e.target.value === ''){
            response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products?page=1&limit=12`)
        }else{
            response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products?name=${e.target.value}`)
        }

        dispatch({type: 'UPDATE_PRODUCT_LIST', payload: response.data})
    }

    return (
        <ProductConsumer>
            {
                value => {
                    const {dispatch, cart} = value;

                    return (
                        <div>
                            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                                <div className="container">
                                    <a className="navbar-brand" style={{marginRight: '9rem', color: '#fff'}} href="#">Eteration</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse pt-sm-4 pt-lg-0 justify-content-between" id="navbarSupportedContent">
                                        <form className="d-flex col-lg-4">
                                            <input
                                                className="form-control me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                                onChange={search.bind(this, dispatch)}
                                            />
                                        </form>
                                        <ul className="navbar-nav mr-auto ml-auto">
                                            <li className="nav-item">
                                                <a className="nav-link" aria-current="page" href="#"><i className="fas fa-shopping-cart"></i> {cart.totalPrice} ₺</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" aria-current="page" href="#"><i className="fas fa-user-alt"></i> User</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    );
                }
            }
        </ProductConsumer>
    )
}

export default Header;