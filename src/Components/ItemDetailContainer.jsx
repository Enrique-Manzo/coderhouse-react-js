import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../api/product";
import ItemDetails from "./ItemDetails";


export default function ItemDetailContainer () {

    const { productID } = useParams()

    const furnitureProduct = products.find(object => object.id == productID)
   

    return (
        
            <section className="container item-detail-container">
                <div className="title-container">
                    <p className="pre-title">{furnitureProduct.category}</p>
                    <h1 className="section-title">Shopping</h1>
                    <ItemDetails
                        title={furnitureProduct.title}
                        price={furnitureProduct.price}
                        image={furnitureProduct.imageURL}
                        stock={furnitureProduct.stock}
                        description={furnitureProduct.description} 
                        id={furnitureProduct.id}
                        category={furnitureProduct.category}      
                    />
                    
                </div>
            </section>
        
    )
}