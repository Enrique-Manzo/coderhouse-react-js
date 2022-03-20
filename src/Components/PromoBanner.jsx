import "./PromoBanner.css";

export default function PromoBanner ({title, description, ctaText}) {
    return (
        <>
        <div className="promo-banner">
            <div>
                <img src={require("../Assets/promo-image1.jpg")} alt="" />
            </div>
            <div className="image-cover"></div>
            <div className="banner-description">
                <h2>{title}</h2>
                <p className="banner-text">{description}</p>
                <p className="banner-cta">{ctaText}</p>
            </div>
        </div>
        </>
    )
}