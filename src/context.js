import React, {Component} from 'react';
import axios from "axios";

const ProductContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            localStorage.setItem('cart', JSON.stringify(action.payload))

            return {
                ...state,
                cart: action.payload
            }
        case "REMOVE_FROM_CART":
            localStorage.setItem('cart', JSON.stringify(action.payload))

            return {
                ...state,
                cart: action.payload
            }
        case "UPDATE_PRODUCT_LIST":
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export class ProductProvider extends Component {
    state = {
        products: [],
        cart: {totalPrice: 0, products: {}},
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    componentDidMount = async () => {
        if('cart' in localStorage){
            const localCart = JSON.parse(localStorage.getItem('cart'));

            this.setState({
                cart: localCart
            })
        }

        const response = await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products?page=1&limit=12')

        this.setState({
            products: response.data
        })
    }

    render() {
        return (
            <ProductContext.Provider value={this.state}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export default ProductConsumer;
