import { createContext, useState} from "react";

export const cartContext = createContext([]);

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList([...cartList, item])
    }

    const removeFromCart = (id) => {
        setCartList(cartList.filter(item => item.id != id ))
    }

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            setCartList
        }}>
            { children }
        </cartContext.Provider>
    )
}

export default CartContextProvider;