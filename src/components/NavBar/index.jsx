import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
const NavBar = () => {
	const context = useContext(ShoppingCartContext)
	const activeStyle = 'underline underline-offset-4'
	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3 ">
				<li className="font-semibold text-lg">
					<NavLink to='/'>
						Shopi
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/'
						onClick={() => context.setSearchByCategory()}
						className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						All
					</NavLink>
				</li>
				<li>
					<NavLink 
					to="/clothes"
					onClick={() => context.setSearchByCategory("men's clothing")}
					className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink 
					to='/electronics'
					onClick={() => context.setSearchByCategory('electronics')}
					className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink 
					to='/jewelery'
					onClick={() => context.setSearchByCategory('jewelery')}
					className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Jewelery
					</NavLink>
				</li>
				<li>
					<NavLink 
					to='/toys'
					onClick={() => context.setSearchByCategory('toys')}
					className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink 
					to='/others'
					onClick={() => context.setSearchByCategory('others')}
					className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">
					orangeleando@gmail.com	
				</li>
				<li>
					<NavLink 
					to='/my-orders'
					className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						My orders
					</NavLink>
				</li>
				<li>
					<NavLink 
					to='/my-account'
					className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink 
					to='/sign-in'
					className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						SignIn
					</NavLink>
				</li>
				<li className="flex w-7">
					<ShoppingCartIcon className='h-6 w-6 text-black'/> 
					<div>
						{context.cartProducts.length}
					</div>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar 