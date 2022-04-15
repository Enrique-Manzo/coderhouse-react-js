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
    const [secondPassword, setSecondPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState()

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
            const errorMessage = error.message
            console.log(errorMessage);
            swal(errorMessage, "", "error")
        }
    }

    const checkRegisterPasswordMatch = (event) => {
        const firstPassword = event.target.value;
        setRegisterPassword(firstPassword);
        
        if (firstPassword === secondPassword) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false)
        }
    }

    const checkPasswordsMatch = (event) => {
        const secondPasswordInput = event.target.value;
        setSecondPassword(secondPasswordInput);
        if (secondPasswordInput === registerPassword) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false)
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
                    <input placeholder="Password" type="password" onChange={checkRegisterPasswordMatch} />
                    {
                        passwordsMatch == false &&
                        <p className="form-error-message">Passwords don't match!</p>
                    }
                    <input placeholder="Repeat password" type="password" onChange={checkPasswordsMatch} />
                    <button disabled={passwordsMatch ? false : true} type="button" onClick={register}>Create new account</button>
                </form>
            </div>
        </div>
    )
}