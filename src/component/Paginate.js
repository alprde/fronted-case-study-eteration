import React, {useEffect, useState} from 'react';
import ProductConsumer from "../context";
import ReactPaginate from "react-paginate";
import axios from "axios";

function Paginate(props) {
    const [pageCount, setpageCount] = useState(0);

    let limit = 12;

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products?page=1&limit=${limit}`)
            setpageCount(Math.ceil(await getTotal() / limit));
            // console.log(Math.ceil(total/12));
            // dispatch({type: 'UPDATE_PRODUCT_LIST', payload: products})
        };

        getProducts();
    }, [limit]);

    const getTotal = async () => {
        let total =  await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products`);

        return total.data.length
    }

    const fetchProducts = async (currentPage) => {
        const response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products?page=${currentPage}&limit=${limit}`)
        // console.log(response)
        setpageCount(Math.ceil(await getTotal() / limit));

        return response.data
    }

    const handlePageClick = async (dispatch, data) => {
        let currentPage = data.selected + 1;

        const products = await fetchProducts(currentPage);

        dispatch({type: 'UPDATE_PRODUCT_LIST', payload: products})
    };

    return (
        <ProductConsumer>
            {
                value => {
                    const {products, dispatch} = value;

                    return (
                        <div>
                            <ReactPaginate
                                previousLabel={"previous"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageClick.bind(this, dispatch)}
                                containerClassName={"pagination justify-content-center"}
                                pageClassName={"page-item"}
                                pageLinkClassName={"page-link"}
                                previousClassName={"page-item"}
                                previousLinkClassName={"page-link"}
                                nextClassName={"page-item"}
                                nextLinkClassName={"page-link"}
                                breakClassName={"page-item"}
                                breakLinkClassName={"page-link"}
                                activeClassName={"active"}
                            />
                        </div>
                    )
                }
            }
        </ProductConsumer>
    );
}

export default Paginate;