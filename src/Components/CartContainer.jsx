import "./CartContainer.css";
import CartProducts from "./Cart";
import CartForm from "./CartForm";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./Contexts/CartContext";

export default function Cart() {

    const {cartList, processed, setProcessed} = useContext(cartContext);

    useEffect(()=>{
        setProcessed(false)
        
    }, [])

    const setProcessedFalse = () => {
        setProcessed(false)
    }

    const setProcessedTrue = () => {
        setProcessed(true)
    }

    return (
        <section className="container item-detail-container">
        <div className="title-container">
            <p className="pre-title">Thank you for trusting on us</p>
            <h1 className="section-title">Checkout</h1>
        </div>
        {
            cartList.length > 0 &&
        <div className="order-status">
            <div onClick={setProcessedFalse} className={`order-status-item ${processed ? "inactive-status" : "active-status"}`}>
                <p>cart details</p>
            </div>
            <div onClick={setProcessedTrue} className={`order-status-item ${processed ? "active-status" : "inactive-status"}`}>
                <p>payment details</p>
            </div>
        </div>
        }
        {
        cartList.length > 0 ?        
            processed ?
            <CartForm />
            :
            <CartProducts />
        :
        <div className="no-items-yet">
        <img className="cat" src={require("../Assets/Cat-throwing-a-vase.png")} />
        <h2>Whoops! You haven't added any products to the cart yet. <Link to={"/"}>Check out our products here.</Link></h2>
        </div>
        }
        </section>
    )
}