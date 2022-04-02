import { createContext, useState} from "react";

export const cartContext = createContext([]);

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) => {
        
        const itemInCart = cartList.some((product) => product.id == item.id);

        if (itemInCart) {
            const updatedCart = cartList.map((product) => {
                if (product.id == item.id) {
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
        setCartList(cartList.filter(item => item.id != id ))
    }

    const reduceQuantity = (item, quantity) => {
        
        const updatedCart = cartList.map((product) => {
                if (product.id == item.id) {
                    return {...product, quantity: product.quantity - quantity}
                } else {
                    return product                    
                }
            })
        
        setCartList(updatedCart);
    }

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            setCartList,
            removeFromCart,
            reduceQuantity
        }}>
            { children }
        </cartContext.Provider>
    )
}

export default CartContextProvider;