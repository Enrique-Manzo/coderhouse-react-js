import "./bootstrap.min.css";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";

function NavBar({companyLogo, items}) {

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
            
            <img className="logo-image" src={companyLogo} style={{"top": `${Top}px`, "width": `${LogoWidth}%`}}/>
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <div className="navbar-toggler-icon-bar"></div>
                    <div className="navbar-toggler-icon-bar"></div>
                    <div className="navbar-toggler-icon-bar"></div>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={items[0].link}>
                        <p className="nav-link">{items[0].name}</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={items[1].link}>
                        <p className="nav-link">{items[1].name}</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={items[2].link}>
                        <p className="nav-link">{items[2].name}</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={items[3].link}>
                        <p className="nav-link">{items[3].name}</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={items[4].link}>
                        <p className="nav-link">{items[4].name}</p>
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search products" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 margin-right" type="submit">Search</button>
                </form>
                <CartWidget />
            </div>
        </nav>
        
    )
};

export default NavBar;