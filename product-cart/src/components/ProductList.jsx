import React, {useEffect, useState} from 'react';
import axios from "axios";
import Helper from "../utility/Helper.js";
import FullScreenLoader from "./FullScreenLoader.jsx";

const ProductList = () => {

    let [data, setData] = useState(null)

    useEffect( ()=> {
        (async ()=> {
            await callProductList()
        })()
    }, []);


    const callProductList = async ()=> {
        let res = await axios.get(`${Helper.API_BASE}/product-list`)
        let productList = res.data['data']
        setData(productList);
    }



    return (
        <div>
            {data==null ? (<FullScreenLoader/>):(
                <div className="container mt-3">
                    <div className="row">
                        {
                            data.map((item, i)=> {
                                return (
                                    <div className="col-md-3 p-1">
                                        <div className="card p-3">
                                            <img className="w-100" src={item['image']} alt=""/>
                                            <h5> PRICE: $
                                                {item['discount']===0 ? (<span>{item['price']}</span>) :  (
                                                 <span><strike>{<span>{item['price']}</span>}</strike> {
                                                     <span>{item['discount_price']}</span>
                                                 }
                                                 </span>
                                                )}
                                            </h5>
                                            <p>{item["title"]}</p>
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

export default ProductList;