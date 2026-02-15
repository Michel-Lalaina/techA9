"use client";

import Link from "next/link"
import Image from "next/image"
import { Container, Typography, Card, CardContent, Button } from "@mui/material"

const products = [
  { id: "1", name: "Premium Sneakers", description: "Ultra comfortable modern sneakers.", price: 120, image: "/products/shoes.jpg" },
  { id: "2", name: "Premium Alt", description: "Ultra comfortable modern Alt.", price: 120, image: "/products/alt.jpg" },
  { id: "3", name: "Minimal Watch", description: "Elegant minimal design watch.", price: 250, image: "/products/watch.jpg" },
  { id: "4", name: "Leather Backpack", description: "Premium genuine leather backpack.", price: 180, image: "/products/bag.jpg" },
  { id: "5", name: "Leather Build", description: "Premium Build leather backpack.", price: 180, image: "/products/build.jpg" },
  { id: "6", name: "Leather Bing", description: "Premium Bing leather backpack.", price: 180, image: "/products/bing.jpg" }
]

export default function ProductsPage() {
  return (
    <Container maxWidth="lg" className="py-20">
      <Typography variant="h4" className="text-center mb-16 font-extrabold tracking-wide text-gray-900">
        Our Products
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {products.map(product => (
          <Card
            key={product.id}
            className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white"
          >
            <Link href={`/products/${product.id}`}>
              <div className="relative h-72 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Link>

            <CardContent className="flex flex-col justify-between h-full">
              <div>
                <Typography variant="h6" className="font-semibold text-gray-900">
                  {product.name}
                </Typography>
                <Typography variant="body2" className="mt-2 text-gray-500">
                  {product.description}
                </Typography>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Typography variant="h6" className="font-bold text-gray-900">
                  ${product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  href={`/products/${product.id}`}
                  className="rounded-full px-6 py-2 font-medium hover:bg-blue-700 transition"
                >
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
