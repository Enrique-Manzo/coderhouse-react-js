import "./bootstrap.min.css";
import "./NavBar.css"
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom';

function NavBar({companyLogo, items}) {

    console.log(document.body.scrollTop)
    
    return (
        <nav className="navbar navbar-expand-md">
            
            <img className="logo-image" src={companyLogo} />
                     
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
                        <a className="nav-link">{items[0].name}</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        
                        <a className="nav-link">{items[1].name}</a>
                        
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {items[2].name}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">{items[2].list[0]}</a>
                            <a className="dropdown-item" href="#">{items[2].list[1]}</a>
                            <a className="dropdown-item" href="#">{items[2].list[2]}</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search products" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <CartWidget />
            </div>
        </nav>
        
    )
};

export default NavBar;