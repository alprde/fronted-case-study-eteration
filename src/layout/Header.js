import React from 'react';
import {ProductContext} from "../context";
import axios from "axios";
import {Link} from "react-router-dom";

function Header(props) {
    const context = React.useContext(ProductContext)
    const {dispatch, cart} = context;

    const search = async (e) => {
        let response = '';

        if(e.target.value === ''){
            response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products?page=1&limit=12`)
        }else{
            response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products?name=${e.target.value}`)
        }

        dispatch({type: 'UPDATE_PRODUCT_LIST', payload: response.data})
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <Link className="navbar-brand" style={{marginRight: '9rem', color: '#fff'}} to={'/'}>Eteration</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars text-white fs-2"></i>
                    </button>
                    <div className="collapse navbar-collapse pt-sm-4 pt-lg-0 justify-content-between" id="navbarSupportedContent">
                        <form className="d-flex col-lg-4">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={search}
                            />
                        </form>
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="src/component#"><i className="fas fa-shopping-cart"></i> {cart.totalPrice.toLocaleString()} ₺</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="src/component#"><i className="fas fa-user-alt"></i> User</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;