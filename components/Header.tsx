"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/CartContext'

const Header = () => {
  const pathname = usePathname()
  const { cart } = useCart()

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          SoftwareHub
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/software" className={pathname === '/software' ? 'font-bold' : ''}>
                Software
              </Link>
            </li>
            <li>
              <Link href="/api-services" className={pathname === '/api-services' ? 'font-bold' : ''}>
                API Services
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header