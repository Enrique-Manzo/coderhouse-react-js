import { createContext, useState} from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

export const cartContext = createContext([]);

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    const [order, setOrder] = useState({});

    const [processed, setProcessed] = useState(false)

    const [showOrderDetails, setShowOrderDetails] = useState(false)

    const [user, setUser] = useState({});

    const [loggedIn, setLoggedIn] = useState(false);

    const addToCart = (item, quantity) => {
        
        const itemInCart = cartList.some((product) => product.id === item.id);

        if (itemInCart) {
            const updatedCart = cartList.map((product) => {
                if (product.id === item.id) {
                    return {...product, quantity: quantity + product.quantity}
                } else {
                    return product                    
                }
            })
            
            setCartList(updatedCart);
        } else {
            setCartList([...cartList, item])
        }
    }

    const removeFromCart = (id) => {
        setCartList(cartList.filter(item => item.id !== id ))
    }

    const reduceQuantity = (item, quantity) => {
        
        const updatedCart = cartList.map((product) => {
                if (product.id === item.id) {
                    return {...product, quantity: product.quantity - quantity}
                } else {
                    return product                    
                }
            })
        
        setCartList(updatedCart);
    }

    const createOrder = (name, phone, email, total, itemList) => {
        
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        const todayString = mm + '/' + dd + '/' + yyyy;

        const productOrder = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: [],
            date: todayString,
            total: total,
            status: "Received",
        }

        for (const item of itemList) {

            productOrder.items.push({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            })
        }

        const db = getFirestore();
        const queryCollection = collection(db, "orders");
        addDoc(queryCollection, productOrder)
        .then(resp => productOrder.id = resp.id)
        .then(()=> {setOrder(productOrder)})        
    }


    const processMutate = () => {
        setProcessed(!processed)
    }

    

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            setCartList,
            removeFromCart,
            reduceQuantity,
            createOrder,
            order,
            processed,
            setProcessed,
            processMutate,
            showOrderDetails,
            setShowOrderDetails,
            user,
            setUser,
            loggedIn,
            setLoggedIn,
        }}>
            { children }
        </cartContext.Provider>
    )
}

export default CartContextProvider;