import ItemListContainer from "./ItemListContainer";
import HomepageSlider from "./HomepageSlider";
import PromoBanner from "./PromoBanner";
import CategoryBanners from "./CategoryBanners";
import CategoryFilterContainer from "./CategoryFilterContainer";

export default function Home () {
    return (
        <>
        <HomepageSlider content={[
            {
                title: "Autumn / Winter Collection",
                text: "With the approach of cooler months on the not so distant horizon, we’re thrilled to introduce the Autumn/Winter 2015 collection; a firecracker of energy and warmth to liven up those dreary months with sparkle, sizzle and sensuousness. Integrating the new designs into the Adventurer, Metro and Age of Elegance room themes, an array of new innovations continue to expand on our core values of authentic materials and craft.",
                image: require("../Assets/Product-images/homepage-slider1.webp"),
                position: 0
            },
            {
                title: "Quality Products",
                text: "Choose from a range of durable and functional doors in several finishes. Whether you’re looking for traditional cottage-style doors or a more contemporary look, we have something for everyone. ",
                image: require("../Assets/Product-images/homepage-slider2.webp"),
                position: 100
            },
            {
                title: "Cottage Rose",
                text: "There’s the romantic “Cottage Rose” print, placed on Altai wool and cashmere, perfect for upholstery or curtains. “Essential Check,” meanwhile, is meant for the most luxurious of throws and pillows.",
                image: require("../Assets/Product-images/homepage-slider3.webp"),
                position: 200
            }
        ]}/>
        <ItemListContainer preTitle="New winter season items" title="most popular" start={13} end={17}/>
        <CategoryBanners />
        <ItemListContainer preTitle="Trending items in Argentina" title="trending" start={4} end={12} filter={0}/>
        <PromoBanner title={"Discover your Lights | New Collection"} description={"Dive deep into our latest collection of lights and lamps of all sorts and sizes"} ctaText={"Discover Lights"}/>
        <CategoryFilterContainer />
        </>
    )
}