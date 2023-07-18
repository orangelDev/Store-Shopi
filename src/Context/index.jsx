import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

//  Inicializar variables account y sign-out en localStorage
export const initializeLocalStorage = () => {
	const accountInLocalStorage = localStorage.getItem('account')
	const signOutInLocalStorage = localStorage.getItem('sign-out')
	let parsedAccount
	let parsedSignOut

	if (!accountInLocalStorage) {
		localStorage.setItem('account', JSON.stringify({}))
		parsedAccount = {}
	}else {
		parsedAccount = JSON.parse(accountInLocalStorage)
	}

	if (!signOutInLocalStorage) {
		localStorage.setItem('sign-out', JSON.stringify(false))
		parsedSignOut = false
	}else {
		parsedSignOut = JSON.parse(signOutInLocalStorage)
	}
}

export const ShoppingCartProvider = ({children}) => {

	// My account 
	const [account, setAccount] = useState({})

	// Sign out
	const [signOut, setSignOut] = useState(false)

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
	const [filteredItems, setFilteredItems] = useState(null)

	// Get products by title
	const [searchByTitle, setSearchByTitle] = useState(null)
	console.log('searchByTitle: ', searchByTitle)

	// Get products by category
	const [searchByCategory, setSearchByCategory] = useState(null)
	
	

	useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  },[])

	const filteredItemsByTitle = (items, searchByTitle) => {
		return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
	}
	
	const filteredItemsByCategory = (items, searchByCategory) => {
		return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
	}

	const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])



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
			searchByTitle,
			setSearchByTitle,
			filteredItems,
			searchByCategory,
			setSearchByCategory,
			account,
			setAccount,
			signOut,
			setSignOut
		}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}