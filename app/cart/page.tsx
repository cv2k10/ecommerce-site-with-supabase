"use client"

import { useState } from 'react'
import { useCart } from '@/lib/CartContext'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const router = useRouter()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // Simulate a checkout process
    setTimeout(() => {
      clearCart()
      setIsCheckingOut(false)
      router.push('/checkout-success')
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-8">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
            <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
          </div>
          <Button 
            className="w-full" 
            onClick={handleCheckout} 
            disabled={isCheckingOut}
          >
            {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
          </Button>
        </>
      )}
    </div>
  )
}