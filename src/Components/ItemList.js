import { useEffect, useState } from "react";
import Item from "./Item";
import Spinner from "./Spinner";
import {getFirestore, getDocs, collection} from "firebase/firestore/lite";


export default function ItemList ({start, end, filter}) {

    const [loading, setLoading] = useState(true)

    const [firebaseProducts, setFirebaseProducts] = useState([]);

    const [currentProducts, setCurrentProducts] = useState([])

    useEffect(()=> {

        const db = getFirestore();

        const queryCollection = collection(db, "items");

        getDocs(queryCollection)
        .then(resp => setFirebaseProducts(resp._docs.map(product => ({ id: product.id, ...product.data() }) )))
        .then(() => setCurrentProducts(firebaseProducts.slice(start, end)))
        .then(()=> setLoading(false))
        .catch(err => console.log(err))

    }, [])

    

    return (
        
        <>
        { loading ? <Spinner></Spinner>
            :
        firebaseProducts.slice(start, end).map(item =><Item key={item.id} productKey={item.id} title={item.title} category={item.category} price={item.price} image={item.imageURL}></Item>)
        }
        </>
    )
}