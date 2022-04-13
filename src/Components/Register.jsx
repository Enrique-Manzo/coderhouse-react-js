import "./LogIn.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/Config";
import { useState, useContext } from "react";
import { cartContext } from "./Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Register () {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const { setUser, setLoggedIn } = useContext(cartContext)

    const navigate = useNavigate();

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            setUser(user);
            swal("Account created!", "", "success")
            .then(()=>{navigate("/")})
            .then(()=>{setLoggedIn(true)})
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div className="container login-form-container">
            <div className="login-message">
                <h3>Create your account</h3>
                <p>Your journey to minimalist furniture is about to begin</p>
            </div>
            <div className="login-form-form">
                <form className="d-flex flex-column cart-form-item" action="">
                    <input placeholder="Email address" type="text" onChange={(event) => setRegisterEmail(event.target.value)} />
                    <input placeholder="Password" type="password" onChange={(event) => setRegisterPassword(event.target.value)} />
                    <button type="button" onClick={register}>Create new account</button>
                </form>
            </div>
        </div>
    )
}