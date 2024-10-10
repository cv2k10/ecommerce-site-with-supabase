"use client"

import { Button } from "@/components/ui/button"
import { useCart } from '@/lib/CartContext'

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
    alert('Product added to cart!')
  }

  return (
    <Button onClick={handleAddToCart}>Add to Cart</Button>
  )
}