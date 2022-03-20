import ItemListContainer from "./ItemListContainer";
import HomepageSlider from "./HomepageSlider";

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
        <ItemListContainer preTitle="New winter season items"/>
        </>
    )
}