import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function Cart() {
    const { cart, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

    return (
        <div className="pt-10 px-4 md:px-8 bg-gray-100 dark:bg-gray-900">
            <div className="p-4 bg-white dark:bg-gray-800 rounded shadow flex justify-between items-center">
                <div>
                    <h3 className="font-semibold text-lg text-green-800 dark:text-green-300">Shopping Cart</h3>
                    <p className="text-green-700 dark:text-green-200">{totalItems} item(s) | ${totalPrice.toFixed(2)}</p>
                </div>
                <button
                    onClick={clearCart}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-all duration-200"
                    disabled={cart.length === 0}
                >
                    Clear Cart
                </button>
            </div>

            {cart.length === 0 ? (
                <div className="mt-16 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow p-12">
                    <ShoppingBagIcon className="h-20 w-20 text-green-400 mb-4" />
                    <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200">Your cart is empty</h2>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-lg">
                        Looks like you haven’t added anything yet.
                    </p>
                </div>
            ) : (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {cart.map(item => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
                            <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded mb-2" />
                            <h4 className="text-green-800 dark:text-green-300 font-semibold text-lg text-center">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300">Qty: {item.quantity}</p>
                            <p className="text-gray-800 dark:text-gray-200 font-medium">
                                Price: ${((item.discountedPrice ?? item.price) * item.quantity).toFixed(2)}
                            </p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="mt-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-all duration-200"
                            >
                                Remove One
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
