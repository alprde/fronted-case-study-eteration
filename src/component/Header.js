import React from 'react';

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Eteration</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse pt-sm-4 pt-lg-0 justify-content-between" id="navbarSupportedContent">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><i className="fas fa-shopping-cart"> 0 ₺</i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><i className="fas fa-user-alt"> User</i></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;