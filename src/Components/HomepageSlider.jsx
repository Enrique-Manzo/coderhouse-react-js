import "./HomepageSlider.css"
import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function SliderContainer ({image, title, text, itemPosition}) {  

    return (
        <>
            <div className="slider-container" style={{"transform": `translateX(${itemPosition}%)`}}>
                <div className="slider-images">
                    <img src={image} alt="" />
                    <svg className="svg-one" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#018A73" d="M33.8,-33.2C48.8,-27.8,69.3,-21.8,68.4,-14C67.5,-6.2,45.2,3.5,35.3,20.2C25.5,36.9,28.1,60.7,20.1,70.1C12,79.5,-6.7,74.6,-21.3,66.1C-35.9,57.5,-46.5,45.2,-57.6,30.9C-68.7,16.5,-80.4,0.1,-77.6,-13.3C-74.8,-26.8,-57.5,-37.3,-42.1,-42.7C-26.8,-48.1,-13.4,-48.3,-2,-45.9C9.4,-43.6,18.9,-38.6,33.8,-33.2Z" transform="translate(100 100)" />
                    </svg>
                    <svg className="svg-two" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#BC1823" d="M25.5,-37.3C37.7,-37.1,55.5,-39.7,66,-33.9C76.5,-28.2,79.8,-14.1,78,-1C76.3,12.1,69.7,24.2,63.2,37C56.8,49.8,50.6,63.3,40.1,72C29.6,80.7,14.8,84.5,4.9,76.1C-5,67.7,-10.1,46.9,-23.7,40C-37.3,33.1,-59.5,40.2,-67.7,35.8C-75.8,31.4,-70,15.7,-65.6,2.5C-61.2,-10.7,-58.3,-21.3,-53.2,-30.9C-48,-40.5,-40.6,-49,-31.4,-50.9C-22.1,-52.8,-11.1,-48,-2.2,-44.2C6.6,-40.3,13.3,-37.4,25.5,-37.3Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="slider-text">
                    <h1>{title}</h1>
                    <p className="slider-description">{text}</p>
                </div>
                <svg className="bottom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,218.7C672,203,768,149,864,154.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </>
    )
}


export default function HomepageSlider ({content}) {

    let [Position, setPosition] = useState(0)

    const prev = () => {
        Position === 0 ? (setPosition(position => position = 0)) : setPosition(position => position + 100)
    }

    const next = () => {
        Position === -200 ? (setPosition(position => position = 0)) : setPosition(position => position - 100)
    }
    

    return (
        <>
        <div className="slider">
            <div className="slider-track" style={{"transform": `translateX(${Position}%)`}}>                
                {content.map(item => <SliderContainer key={item.key} image={item.image} title={item.title} text={item.text} itemPosition={item.position}/>)}
            </div>
            <button className="prev" onClick={prev}><FaAngleLeft /></button>
            <button className="next" onClick={next}><FaAngleRight /></button>
        </div>
        
        </>
    )
}