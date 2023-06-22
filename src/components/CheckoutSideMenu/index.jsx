import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext)

  return (
		<aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex flex-col fixed top-20 right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My Order</h2>
				<div>
					<XMarkIcon 
						className='h-6 w-6 text-black cursor-pointer'
						onClick={() => context.closeCheckoutSideMenu()}/>
				</div>
			</div>
			<div className='px-6'>
				{
					context.cartProducts.map(product => (
						<OrderCard 
							key={product.id}
							title={product.title}
							imageUrl={product.image}
							price={product.price}
						/>
					))
				}
			</div>
		</aside>
  )
}

export default CheckoutSideMenu