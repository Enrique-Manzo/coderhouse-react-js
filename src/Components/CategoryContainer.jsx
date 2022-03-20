import "./CategoryContainer.css";
import { useParams } from "react-router-dom";
import { products } from "../api/product";
import { useEffect } from "react";
import Item from "./Item";

export default function CategoryContainer () {

    const { categoryName } = useParams();

    const findItems = (products) => {

        const productArray = [];

        for (const product of products) {
            product.category == categoryName && productArray.push(product)
        }

        return productArray
    };

    const categoryProducts = findItems(products);

    return (
<           section className="container item-detail-container">
                <div className="title-container">
                    <p className="pre-title">{categoryName}</p>
                    <h1 className="section-title">Product Category</h1>
                    <div className="d-flex justify-content-between align-items-center flex-column flex-sm-column flex-md-row flex-lg-row flex-wrap">
                    {categoryProducts.map(item => <Item
                    title={item.title} 
                    category={item.category}
                    price={item.price}
                    image={item.imageURL}
                    productKey={item.id}></Item>)}
                    </div>
                    
                    
                </div>
            </section>
    )

}