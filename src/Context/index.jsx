import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
	//ShoppingCart - Increment quantity
	const [count, setCount] = useState(0)

	

	//ProductDetail- Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
	const openProductDetail = () => setIsProductDetailOpen(true)
	const closeProductDetail = () => setIsProductDetailOpen(false)

	//ProductDetail - Show Product
	const [productToShow, setProductToShow] = useState({})
	return (
		<ShoppingCartContext.Provider value={{
			count,
			setCount,
			openProductDetail,
			closeProductDetail,
			isProductDetailOpen,
			productToShow,
			setProductToShow
		}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}