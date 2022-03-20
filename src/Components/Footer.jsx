import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-elements">
                <div className="column">
                    <p className="footer-title">contact us</p>
                    <div>
                        <ul>
                            <li>Address: <span>THIS IS THE ADDRESS</span></li>
                            <li>Phone: <span>THIS IS THE PHONE</span></li>
                            <li>Email: <span>THIS IS THE EMAIL</span></li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <p className="footer-title">distribution centers</p>
                    <div>
                        <ul>
                            <li>Széged</li>
                            <li>Debrecen</li>
                            <li>Pécs</li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <p className="footer-title">join our newsletter</p>
                    <div>
                        <form action="">
                            <input type="text" name="" id="" />
                            <button>subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}