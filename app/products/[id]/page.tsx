import { notFound } from "next/navigation"
import Image from "next/image"
import { Container, Typography, Button } from "@mui/material"

const products = [
  {
    id: "1",
    name: "Premium Sneakers",
    description: "Ultra comfortable modern sneakers.",
    price: 120,
    image: "/products/shoes.jpg"
  },
  {
    id: "2",
    name: "Minimal Watch",
    description: "Elegant minimal design watch.",
    price: 250,
    image: "/products/watch.jpg"
  },
  {
    id: "3",
    name: "Leather Backpack",
    description: "Premium genuine leather backpack.",
    price: 180,
    image: "/products/bag.jpg"
  }
]

type Props = {
  params: { id: string }
}

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.id === params.id)

  if (!product) return notFound()

  return (
    <Container maxWidth="lg" className="py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div>
          <Typography variant="h3" className="font-bold">
            {product.name}
          </Typography>

          <Typography variant="body1" className="mt-6 text-gray-600">
            {product.description}
          </Typography>

          <Typography variant="h4" className="mt-8 font-bold">
            ${product.price}
          </Typography>

          <Button variant="contained" size="large" className="mt-6">
            Add to Cart
          </Button>
        </div>
      </div>
    </Container>
  )
}
