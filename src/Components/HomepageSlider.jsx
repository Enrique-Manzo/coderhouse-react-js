import "./HomepageSlider.css"
import { useState } from "react";

function SliderContainer ({image, title, text, itemPosition}) {  

    return (
        <>
            <div className="slider-container" style={{"transform": `translateX(${itemPosition}%)`}}>
                <img src={image} alt="" />
                <div className="slider-text">
                    <h1>{title}</h1>
                    <p className="slider-description">{text}</p>
                </div>
            </div>
        </>
    )
}


export default function HomepageSlider ({content}) {

    let [Position, setPosition] = useState(0)

    const prev = () => {
        Position == 0 ? (setPosition(position => position = 0)) : setPosition(position => position + 100)
    }

    const next = () => {
        Position == -200 ? (setPosition(position => position = 0)) : setPosition(position => position - 100)
    }
    console.log(content)

    return (
        <>
        <div className="slider">
            <div className="slider-track" style={{"transform": `translateX(${Position}%)`}}>                
                {content.map(item => <SliderContainer image={item.image} title={item.title} text={item.text} itemPosition={item.position}/>)}
            </div>
            <button className="prev" onClick={prev}>{"<"}</button>
            <button className="next" onClick={next}>{">"}</button>
        </div>
        
        </>
    )
}