import React, { createContext, useContext, useState} from 'react';

const CartContext = createContext();

export const useCart = () => {
	return useContext(CartContext)
};

export const CartProvider = ({children}) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		setCartItems([...cartItems, item]);
	};

	const removeFromCart = (itemIndex) => {
		const updateCart = cartItems.filter((_, index) => index !== itemIndex);
		setCartItems(updateCart);
	};

	const clearCart = () => {
		setCartItems([]);
	}

	return(
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>	
	);
};