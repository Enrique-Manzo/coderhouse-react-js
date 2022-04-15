import "./LogIn.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../Config/Config";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "./Contexts/CartContext";
import swal from "sweetalert";

export default function LogIn () {

    const {setUser, setLoggedIn} = useContext(cartContext);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const navigate = useNavigate();

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          setUser(user);
          setLoggedIn(true);
          navigate("/");
        } catch (error) {
            const errorMessage = error.message
            console.log(errorMessage);
            swal(errorMessage, "", "error")
        }
      };

    const googleSignIn = () => {
        signInWithGoogle()
        .then((result) => {
        const picture = result.user.photoURL;
        const name = result.user.displayName;
        const email = result.user.email;
    
        const user = {
            user: {
            email: email,
            name: name,
            picture: picture,
            }
        };

        setUser(user);
        setLoggedIn(true);
        navigate("/");
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className="container login-form-container">
            <div className="login-message">
                <h3>Welcome back!</h3>
                <p>Sign in to continue to your account</p>
            </div>
            <div className="login-form-form">
                <button onClick={googleSignIn} type="button" className="login-with-google-btn">Log in with Google</button>
                <form className="d-flex flex-column cart-form-item" action="">
                    <input placeholder="Email address" type="text" onChange={(event) => setLoginEmail(event.target.value)} />
                    <input placeholder="Password" type="password" onChange={(event) => setLoginPassword(event.target.value)} />
                    <button onClick={login} type="button">Sign in</button>
                </form>
                <div className="register-link">
                    <Link to="/register">
                        <p>Create new account</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}