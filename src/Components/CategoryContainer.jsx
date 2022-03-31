import "./CategoryContainer.css";
import { useParams } from "react-router-dom";
import { products } from "../api/product";
import { useEffect, useState } from "react";
import Item from "./Item";
import Spinner from "./Spinner";
import {getFirestore, getDoc, getDocs, doc, collection, query, where} from "firebase/firestore/lite";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function CategoryContainer () {

    const [loading, setLoading] = useState(true)

    const [firebaseProducts, setFirebaseProducts] = useState({});

    const { categoryName } = useParams();

    useEffect(()=> {

        const db = getFirestore();
        
        const queryCollection = collection(db, "items")
        const queryFilter = query(queryCollection, where("category", "==", categoryName))

        loading && setFirebaseProducts({})        

        getDocs(queryFilter)
        .then(resp => setFirebaseProducts(resp._docs.map(product => ({ id: product.id, ...product.data() }) )))
        .then(() => setLoading(false))
        .catch(err => console.log(err))

        console.log(firebaseProducts)


    }, [categoryName])

/*     useEffect(()=> {
        if (loading == false) {
            const storage = getStorage();

            for (const product of firebaseProducts) {

                getDownloadURL(ref(storage, product.imageURL.replace("gs://e-commerce-home-space.appspot.com/", "")))
                .then((url) => setFirebaseProducts([...firebaseProducts, {...product, imageURL: url}]))
                console.log(firebaseProducts)
            }
        

        }


    }, [loading])
 */
    return (
<           section className="container item-detail-container">
                <div className="title-container">
                    <p className="pre-title">{categoryName}</p>
                    <h1 className="section-title">Product Category</h1>
                    { loading ? <Spinner></Spinner>
                    :
                    <div className="d-flex justify-content-between align-items-center flex-column flex-sm-column flex-md-row flex-lg-row flex-wrap">
    
                    {firebaseProducts.map(item => <Item
                    key={item.id}
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