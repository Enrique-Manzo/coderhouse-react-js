import "./bootstrap.min.css";
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function NavBar({companyName, companyLogo, items}) {
    
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

                {/*    
                <li className="nav-item active">
                    <a className="nav-link" href="#">{companyName} <span className="sr-only">(current)</span></a>
                </li>
                */}
                
                <li className="nav-item">
                    <a className="nav-link" href={items[0].link}>{items[0].name}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={items[1].link}>{items[1].name}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={items[2].link}>{items[2].name}</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search products" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </nav>
        
    )
};

export default NavBar;