import "./CartForm.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { cartContext } from "./Contexts/CartContext";
import { Link } from "react-router-dom";


export default function CartForm () {

    const {cartList, setCartList, createOrder, order, showOrderDetails, setShowOrderDetails} = useContext(cartContext);
    
    const [sameEmail, setSameEmail] = useState(true)
    const [formErrorMessageID, setFormErrorMessageID] = useState()

    useEffect(()=>{
        window.scroll(0,0)
        console.log(showOrderDetails)       
    }, [])


    const logOrder = () => {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const emailConfirm = document.getElementById("email-confirm").value;
        const phone = document.getElementById("phone").value;

        if (email != emailConfirm) {
            setSameEmail(false);
        } else if (name.length == 0) {
            setFormErrorMessageID(1)
            
        } else if (email.length == 0) {
            setFormErrorMessageID(2)
            
        } else if (emailConfirm.length == 0) {
            setFormErrorMessageID(3)
            
        } else if (phone.length == 0) {
            setFormErrorMessageID(4)
            
        } else {

            const productTotal = cartList.reduce(function (a,b) { return a + (b.price * b.quantity); }, 0);

            createOrder(
                name,
                phone,
                email,
                productTotal*1.27,
                cartList)
            
            setShowOrderDetails(true)
            
        }
        
    }

    const resetOrder = () => {
        setShowOrderDetails(false)
        setCartList([])
    }


    return (
        <div className="container cart-form-container">
            {
            Object.keys(order).length > 0 && showOrderDetails ?
            <div>
                <h3>Your order was placed successfully</h3>
                <p>Use your order ID to check your order details: {order.id}</p>
                <h3>Here's the data you have submitted</h3>
                <p>Name: {order.buyer.name}</p>
                <p>Email: {order.buyer.email}</p>
                <p>Phone: {order.buyer.phone}</p>
                <p>Date: {order.date}</p>
                <p>Total: {order.total}</p>
                <Link to="/">
                <button onClick={resetOrder} type="button">Close</button>
                </Link>
            </div>
            :
            <form className="cart-form-items" action="">
                <div className="cart-form-item">
                    <label htmlFor="">Full name</label>
                    {formErrorMessageID == 1 && <p className="form-error-message">This field is required</p>}
                    <input id="name" type="text" required />
                </div>
                <div className="cart-form-item">
                    <label htmlFor="">Email address</label>
                    {formErrorMessageID == 2 && <p className="form-error-message">This field is required</p>}
                    <input id="email" type="text" required />
                </div>
                <div className="cart-form-item">
                    <label htmlFor="">Confirm email address</label>
                    {sameEmail == false && <p className="form-error-message">The email addresses do not match</p>}
                    {formErrorMessageID == 3 && <p className="form-error-message">This field is required</p>}
                    <input id="email-confirm" type="text" required />
                </div>
                <div className="cart-form-item">
                    <label htmlFor="">Phone number</label>
                    {formErrorMessageID == 4 && <p className="form-error-message">This field is required</p>}
                    <input id="phone" type="text" required />
                </div>
                <button onClick={logOrder} type="button">Place purchase order</button>
            </form>            
            }
        </div>
    )

}