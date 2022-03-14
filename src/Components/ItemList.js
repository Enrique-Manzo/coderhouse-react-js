import { useEffect, useState } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

const products = [
    {id: 1, title: "Decorative Vase", stock: 5, price: 30.50, imageURL: require("../Assets/Product-images/lamp.webp")},
    {id: 2, title: "Minimalist Bedside", stock: 10, price: 150, imageURL: require("../Assets/Product-images/bedside-table.webp")},
    {id: 3, title: "Luxury Lamp", stock: 8, price: 60, imageURL: require("../Assets/Product-images/standing-lamp.webp")},
    {id: 4, title: "Luxury Chair", stock: 12, price: 180, imageURL: require("../Assets/Product-images/lux-chair.webp")}
]

const promise = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout( ()=> {
            resolve(products)
        }, 10000)
    } else {
        reject("Error 404: no products found")
    }
})


export default function ItemList () {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        promise
        .then(setLoading(false))
    }, [])    


    return (
        <>
        { loading ? <h1>Cargando</h1>
            :
        products.map(item => <Item key={item.id} title={item.title} price={item.price} image={item.imageURL}><ItemCount stock={item.stock} /></Item>)
        }
        </>
    )
}