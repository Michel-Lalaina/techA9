import Link from "next/link"
import Image from "next/image"
import { Container, Typography, Card, CardContent, Button } from "@mui/material"

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

export default function ProductsPage() {
  return (
    <Container maxWidth="lg" className="py-20">
      <Typography variant="h4" className="text-center mb-12 font-bold">
        Our Products
      </Typography>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map(product => (
          <Card key={product.id} className="rounded-2xl overflow-hidden hover:shadow-xl transition">
            <Link href={`/products/${product.id}`}>
              <div className="relative h-72 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>

            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" className="mt-2 text-gray-600">
                {product.description}
              </Typography>
              <Typography variant="h6" className="mt-4 font-bold">
                ${product.price}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                className="mt-4"
                component={Link}
                href={`/products/${product.id}`}
              >
                View
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
