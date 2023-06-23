import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
	//ShoppingCart - Increment quantity
	const [count, setCount] = useState(0)

	

	//ProductDetail- Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
	const openProductDetail = () => setIsProductDetailOpen(true)
	const closeProductDetail = () => setIsProductDetailOpen(false)

	//Checkout Side Menul- Open/Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

	//ProductDetail - Show Product
	const [productToShow, setProductToShow] = useState({})

	//ShoppingCart Add products to cart
	const [cartProducts, setCartProducts] = useState([])

	// Shopping cart - Order
	const [order, setOrder] = useState([])

	return (
		<ShoppingCartContext.Provider value={{
			count,
			setCount,
			openProductDetail,
			closeProductDetail,
			isProductDetailOpen,
			productToShow,
			setProductToShow,
			cartProducts, 
			setCartProducts,
			isCheckoutSideMenuOpen,
			openCheckoutSideMenu,
			closeCheckoutSideMenu,
			order,
			setOrder
		}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}