"use client"

import { Button } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

export default function AddToCartButton() {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<ShoppingCartIcon />}
      className="mt-6"
      fullWidth
    >
      Add to Cart
    </Button>
  )
}
