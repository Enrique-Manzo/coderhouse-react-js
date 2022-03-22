import { useEffect, useState } from "react";
import Item from "./Item";
import { products } from "../api/product";

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


export default function ItemList ({start, end, filter}) {

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

    const currentProducts = products.slice(start, end);

    return (
        
        <>
        { loading ? <h1>Loading...</h1>
            :
        currentProducts.map(item =><Item key={item.id} productKey={item.id} title={item.title} category={item.category} price={item.price} image={item.imageURL}></Item>)
        }
        </>
    )
}