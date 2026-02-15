"use client"

import { createContext, useContext, useState } from "react"

type CartContextType = {
  count: number
  addToCart: () => void
}

const CartContext = createContext<CartContextType>({
  count: 0,
  addToCart: () => {}
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  const addToCart = () => {
    setCount(prev => prev + 1)
  }

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
