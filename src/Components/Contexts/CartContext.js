import { createContext, useState} from "react";

export const cartContext = createContext([]);

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList([...cartList, item])
    }

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart
        }}>
            { children }
        </cartContext.Provider>
    )
}

export default CartContextProvider;