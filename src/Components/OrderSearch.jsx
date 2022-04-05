import "./OrderSearch.css";
import Spinner from "./Spinner";
import {getFirestore, getDoc, getDocs, doc, collection, query, where, documentId} from "firebase/firestore/lite";
import { useEffect, useState } from "react";

export default function OrderSearch () {

    const [orderResult, setOrderResult] = useState({});
    const [loading, setLoading] = useState(false)
 
    const searchOrder = () => {

        setLoading(true)

        const userOrder = document.getElementById("orderID").value;
        
        const db = getFirestore();
        
        const queryDoc = doc(db, "orders", userOrder.trim())
        
        getDoc(queryDoc)
        .then(resp => setOrderResult({...resp.data()}))
        .then(()=> {setLoading(false)})
        .catch(err => console.log(err.message))

    }

    return (
        <section className="container">
            <div className="title-container">
                <p className="pre-title"></p>
                <h1 className="section-title">Order Search</h1>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                <div>
                    <h4>Type in your order ID in the field below to check your order status</h4>
                </div>
                <div className="search-form-container">
                    <form action="" className="cart-form-item">
                        <input id="orderID" type="text" />
                        <button type="button" onClick={searchOrder}>Search</button>
                    </form>
                </div>
            </div>
            {
                Object.keys(orderResult).length == 0 ?
                    loading && <Spinner></Spinner>
                :
            <div className="d-flex align-items-center justify-content-center">
                <div className="cart-form-items">
                    <p>Order status: {orderResult.status}</p>
                    <p>Date: {orderResult.date}</p>
                    <p>Total: {orderResult.total}</p>
                    {orderResult.items.map(item => 
                        <div className="item-order-details">
                            <p>Item name: {item.title}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        )}
                </div>
            </div>
            }

        </section>
    )
}