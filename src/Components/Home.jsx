import ItemListContainer from "./ItemListContainer";
import HomepageSlider from "./HomepageSlider";
import PromoBanner from "./PromoBanner";
import CategoryBanners from "./CategoryBanners";
import CategoryFilterContainer from "./CategoryFilterContainer";
import { createContext } from "react";


const contextApp = createContext("cart");

export default function Home () {
    return (
        <>
        <HomepageSlider content={[
            {
                title: "Autumn / Winter Collection",
                text: "With the approach of cooler months on the not so distant horizon, we’re thrilled to introduce the Autumn/Winter 2015 collection; a firecracker of energy and warmth to liven up those dreary months with sparkle, sizzle and sensuousness. Integrating the new designs into the Adventurer, Metro and Age of Elegance room themes, an array of new innovations continue to expand on our core values of authentic materials and craft.",
                image: require("../Assets/millennial-one.jpg"),
                position: 0,
                key: 1
            },
            {
                title: "Durable, party-resistant furniture",
                text: "Choose from a range of durable and functional doors in several finishes. Whether you’re looking for traditional cottage-style doors or a more contemporary look, we have something for everyone. ",
                image: require("../Assets/millennial-two.jpg"),
                position: 100,
                key: 2
            },
            {
                title: "Minimalist Modern Space",
                text: "One brand, many companies, and many, many people – that’s us in a nutshell. Spread all over the world, we have a passion for home furnishing and an inspiring shared vision: to create a better everyday life for the many people. This, together with our straightforward business idea, shared values, and a culture based on the spirit of togetherness, guides us in everything we do.",
                image: "https://res.cloudinary.com/dovuoehfu/image/upload/v1648918269/homepage-slider1_m6tcgi.webp",
                position: 200,
                key: 3
            }
        ]}/>
        <ItemListContainer preTitle="New winter season items" title="most popular" start={1} end={5}/>
        <CategoryBanners />
        <ItemListContainer preTitle="Trending items in Argentina" title="trending" start={0} end={8} filter={0}/>
        <PromoBanner title={"Discover your Lights | New Collection"} description={"Dive deep into our latest collection of lights and lamps of all sorts and sizes"} ctaText={"Discover Lights"}/>
        <CategoryFilterContainer />
        </>
    )
}