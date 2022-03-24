import "./CategoryContainer.css";
import { useParams } from "react-router-dom";
import { products } from "../api/product";
import { useEffect, useState } from "react";
import Item from "./Item";
import Spinner from "./Spinner";


const promise = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout( ()=> {
            resolve(products)
        }, 3000)
    } else {
        reject("Error 404: no products found")
    }
})

export default function CategoryContainer () {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        promise
        .then((value) => {
            setLoading(false);
            return (
                value
            )
        })
    })

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
                    { loading ? <Spinner></Spinner>
                    :
                    <div className="d-flex justify-content-between align-items-center flex-column flex-sm-column flex-md-row flex-lg-row flex-wrap">
    
                    {categoryProducts.map(item => <Item
                    title={item.title} 
                    category={item.category}
                    price={item.price}
                    image={item.imageURL}
                    productKey={item.id}></Item>)}
                    </div>
                    }
                </div>
            </section>
    )

}