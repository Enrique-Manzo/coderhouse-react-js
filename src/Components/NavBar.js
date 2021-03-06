import "./bootstrap.min.css";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link, NavLink } from 'react-router-dom';
import {useState, useEffect, useContext} from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cartContext } from "./Contexts/CartContext";
import { auth } from "../Config/Config";
import { signOut } from "firebase/auth";

function NavBar({companyLogo, items}) {

    const {user, loggedIn, setUser, setLoggedIn} = useContext(cartContext);
    
    const logOut = async () => {
        await signOut(auth);
        setUser({user: {email: ""}});
        setLoggedIn(false);
    }

    let [Height, setHeight] = useState(100);
    let [Top, setTop] = useState(40)
    let [LogoWidth, setLogoWidth] = useState(10);

    const changeHeight = () => {

        document.documentElement.scrollTop > 40 && setHeight(height => height = 40)
        document.documentElement.scrollTop < 40 && setHeight(height => height = 100)

        document.documentElement.scrollTop > 40 && setTop(top => top = 20)
        document.documentElement.scrollTop < 40 && setTop(top => top = 40)

        document.documentElement.scrollTop > 40 && setLogoWidth(width => width = 5)
        document.documentElement.scrollTop < 40 && setLogoWidth(width => width = 10)

    }

    useEffect(()=>{
        document.addEventListener("scroll", changeHeight)

        return () => {
            document.removeEventListener("scroll", changeHeight)
        }

    }, [])
    
    
    return (
        <nav className="navbar navbar-expand-md" style={{"height": `${Height}px`}}>
            <div style={{"width": `${LogoWidth}%`}}>
                <Link to="/">
                    <img className="logo-image" src={companyLogo} style={{"top": `${Top}px`}}/>
                </Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <div className="navbar-toggler-icon-bar"></div>
                    <div className="navbar-toggler-icon-bar"></div>
                    <div className="navbar-toggler-icon-bar"></div>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink 
                                to={items[0].link}
                                className={({ isActive }) => (isActive && "active-section")}
                            >
                            <p className="nav-link">{items[0].name}</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                    to={items[1].link}
                                    className={({ isActive }) => (isActive && "active-section")}
                            >
                            <p className="nav-link">{items[1].name}</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to={items[2].link}
                                className={({ isActive }) => (isActive && "active-section")}
                            >
                            <p className="nav-link">{items[2].name}</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to={items[3].link}
                                className={({ isActive }) => (isActive && "active-section")}
                            >
                            <p className="nav-link">{items[3].name}</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to={items[4].link}
                                className={({ isActive }) => (isActive && "active-section")}
                            >
                            <p className="nav-link">{items[4].name}</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="form-items">
                <Link to="/search-order">
                    <div className="navbar-search">
                        <p>Search order</p>
                        <FontAwesomeIcon style={{"color": "#FD8F5F"}} icon={faMagnifyingGlass} />
                    </div>
                </Link>
                    <CartWidget />
                <div>
                    {
                    loggedIn ?
                    <div className="logged-in-user-nav">
                    <p>
                        {user.user.email}
                    </p>
                    <p onClick={logOut} className="log-out-button">
                        Log out
                    </p>
                    </div>
                    :
                    <NavLink to="/log-in">
                        <button className="login-btn" type="button">Log In!</button>
                    </NavLink>
                    
                    }
                </div>
                </div>
            </div>
        </nav>
        
    )
};

export default NavBar;