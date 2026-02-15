import Link from "next/link"
import Image from "next/image"
import { Button, Container, Typography, Card, CardContent } from "@mui/material"

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

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="bg-white">
        <Container maxWidth="lg" className="py-20">
          <div className="grid md:grid-cols-2 items-center gap-12">

            {/* LEFT SIDE */}
            <div>
              <p className="text-green-600 font-semibold tracking-wider mb-4">
                PREMIUM COLLECTION
              </p>

              <Typography
                variant="h3"
                className="font-bold mb-6 leading-tight"
              >
                Elevate Your <span className="text-green-600">Style</span> <br />
                Everyday Confidence
              </Typography>

              <Typography
                variant="body1"
                className="mb-8 text-gray-600 max-w-md"
              >
                Discover exclusive products crafted for modern lifestyle and timeless elegance.
              </Typography>

              <Link href="/products">
                <Button
                  variant="contained"
                  size="large"
                  className="px-8 py-3"
                >
                  Shop Now
                </Button>
              </Link>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.png"
                alt="Hero"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </Container>
      </div>


      {/* PRODUCTS */}
      <Container maxWidth="lg" className="py-24">
        <Typography
          variant="h4"
          className="text-center mb-14 font-bold"
        >
          Featured Products
        </Typography>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <Card
              key={product.id}
              className="rounded-3xl overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative h-72 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </Link>

              <CardContent className="p-6">
                <Typography variant="h6" className="font-semibold">
                  {product.name}
                </Typography>

                <Typography
                  variant="body2"
                  className="mt-2 text-gray-600"
                >
                  {product.description}
                </Typography>

                <Typography
                  variant="h6"
                  className="mt-4 font-bold text-green-600"
                >
                  ${product.price}
                </Typography>

                <Link href={`/products/${product.id}`}>
                  <Button
                    fullWidth
                    variant="contained"
                    className="mt-4"
                  >
                    View Product
                  </Button>
                </Link>

              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </>
  )
}
