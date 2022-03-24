import "./Cart.css";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext, cartList } from "./Contexts/CartContext";
import CounterControls from "./CounterControls";

export default function Cart() {

    const {cartList, setCartList} = useContext(cartContext);

    const [productTotal, setProductTotal] = useState(0);

    useEffect(() => {        
        setProductTotal(cartList.reduce(function (a,b) { return a + (b.price * b.quantity); }, 0))
    })

    const remove = (id) => {
        setCartList(cartList.filter(item => item.id != id ))
    }
    

    return (
        <section className="container item-detail-container">
        <div className="title-container">
            <p className="pre-title">Thank you for trusting on us</p>
            <h1 className="section-title">Checkout</h1>
        </div>
        {cartList.length > 0 ? 
            <div>
            <div className="container cart-list-container">
                <ul className="checkout-items item-titles">
                    <li>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>Quantity</p>
                    </li>
                    <li>
                        <p>Total</p>
                    </li>
                    <li>
                        <p>Remove</p>
                    </li>
                </ul>
                <ul>
                    {cartList.map(item => 
                    
                    <li className="checkout-li">
                        <div className="checkout-items">
                            <Link to={`/product/${item.id}`}>
                            <div className="checkout-product-details">
                                <img className="checkout-image" src={item.image} alt="" />
                                <p className="checkout-title">{item.title}</p>
                            </div>
                            </Link>
                            <div className="checkout-price">
                                <p>${item.price}</p> 
                            </div>
                            <div>
                                <p>${item.quantity}</p>
                            </div>
                            <div>
                                <p>${(item.quantity * item.price).toFixed(2)}</p>
                            </div>
                            <div>
                                <p className="x" onClick={()=>remove(item.id)}>X</p>
                            </div>
                        </div> 
                    </li>
                    )}
                </ul>
            </div>
            <div className="payment-container">
                <div>
                    <h3>Payment details</h3>
                </div>
                <div className="payment-totals">
                    <p>Purchase subtotal</p>
                    <p>${productTotal.toFixed(2)}</p>
                </div>
                <div className="payment-totals">
                    <p>VAT (27%)</p>
                    <p>${(productTotal * 0.27).toFixed(2)}</p>
                </div>
                <div className="payment-totals payment-totals-order">
                    <p>Order total</p>
                    <p>${(productTotal * 1.27).toFixed(2)}</p>
                </div>
            </div>
        </div>
        :
        <div className="no-items-yet">
        <img className="cat" src={require("../Assets/Cat-throwing-a-vase.png")} />
        <h2>Whoops! You haven't added any products to the cart yet.</h2>
        </div>
        }
        </section>
    )
}