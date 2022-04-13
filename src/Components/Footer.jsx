import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-elements">
                <div className="column">
                    <p className="footer-title">contact us</p>
                    <div>
                        <ul>
                            <li>Address: <span>Budapest, Kossuth Lajos tér 1-3, 1055 Hungary</span></li>
                            <li>Phone: <span>+36 1 463 9100</span></li>
                            <li>Email: <span>style@modern-space.com</span></li>
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