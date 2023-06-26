import { createContext, useState, useEffect } from "react"

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

	// Get products
	const [items, setItems] = useState(null)

	// Get products by title
	const [searchBytitle, setSearchByTitle] = useState(null)
	console.log('searchByTitle: ', searchBytitle)

	useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  },[])

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
			setOrder,
			items,
			setItems,
			searchBytitle,
			setSearchByTitle
		}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}