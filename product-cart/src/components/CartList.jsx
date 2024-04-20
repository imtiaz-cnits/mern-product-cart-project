import React, {useEffect, useState} from 'react';
import axios from "axios";
import Helper from "../utility/Helper.js";
import toast from "react-hot-toast";
import FullScreenLoader from "./FullScreenLoader.jsx";

const CartList = () => {

    let [data, setData] = useState(null)
    let [loader, setLoader] = useState(false);

    useEffect( ()=> {
        (async ()=> {
            await callProductList()
        })()
    }, []);

    const callProductList = async ()=> {
        let res = await axios.get(`${Helper.API_BASE}/cart-list`)
        let productList = res.data['data']
        setData(productList);
    }

    const RemoveCart = async (id) => {
        try {
            setLoader(true)
            let res = await axios.get(`${Helper.API_BASE}/remove-cart/${id}`, Helper.tokenHeader());
            setLoader(false)
            if (res.data['msg'] === "success") {
                toast.success("Product Removed Successfully");
            }
            else {
                toast.error("Request failed!");
            }
        }
        catch (e) {
            Helper.unauthorized(e.response.status);
        }
    }

    return (
        <div>
            {data == null || loader ? (<FullScreenLoader/>) : (
                <div className="container mt-3">
                    <div className="row">
                        {
                            data.map((item, i) => {
                                return (
                                    <div className="col-md-3 p-1">
                                        <div className="card p-3">
                                            <img className="w-100" src={item ['product']['image']} alt=""/>
                                            <h5> PRICE: $
                                                {item['discount'] === 0 ? (<span>{item['price']}</span>) : (
                                                    <span><strike>{<span>{item['price']}</span>}</strike> {
                                                        <span>{item['discount_price']}</span>
                                                    }
                                                 </span>
                                                )}
                                            </h5>
                                            <p>{item["title"]}</p>
                                            <button onClick={async () => {
                                                await AddToCart(item['id'])
                                            }} className="btn btn-outline-danger">Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartList;