import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import { getFirestore, getDoc, doc, query} from "firebase/firestore/lite";
import Spinner from "./Spinner";

export default function ItemDetailContainer () {

    const [loading, setLoading] = useState(true)

    const { productID } = useParams()

    const [product, setProduct] = useState({})
   
    useEffect(()=> {
        
        const db = getFirestore();

        const queryDoc = doc(db, "items", productID);

        getDoc(queryDoc)
        .then(resp => setProduct( {id: resp.id, ...resp.data()} ))
        .then(() => setLoading(false))

    }, [productID])

    return (
        
            <section className="container item-detail-container">
                { loading ? <Spinner></Spinner>
                :
                <div className="title-container">
                    <p className="pre-title">{product.category}</p>
                    <h1 className="section-title">Shopping</h1>
                    <ItemDetails
                        title={product.title}
                        price={product.price}
                        image={product.imageURL}
                        stock={product.stock}
                        description={product.description} 
                        id={product.id}
                        category={product.category}      
                    />
                </div>
                }
            </section>
        
    )
}