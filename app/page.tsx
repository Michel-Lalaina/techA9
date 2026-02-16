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
    image: "/products/watch.jpg",
    badge: "NEW"
  },
    {
    id: "3",
    name: "Minimal Watch",
    description: "Elegant minimal design watch.",
    price: 250,
    image: "/products/bleu.png",
    badge: "NEW"
  },
  {
    id: "4",
    name: "Leather Backpack",
    description: "Premium genuine leather backpack.",
    price: 180,
    image: "/products/bag.jpg",
    badge: "NEW"
  }
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="bg-gradient-to-r from-white to-green-50 overflow-hidden">
        <Container maxWidth="lg" className="py-24">
          <div className="grid md:grid-cols-2 items-center gap-16">

            {/* LEFT */}
            <div className="animate-fadeInUp">
              <p className="text-green-600 font-semibold tracking-widest mb-4">
                PREMIUM COLLECTION
              </p>

              <Typography
                variant="h3"
                className="font-bold mb-6 leading-tight"
              >
                Moins de pannes <span className="text-green-600">Style</span> <br />
                Plus de performance
              </Typography>

              <Typography
                variant="body1"
                className="mb-8 text-gray-600 max-w-md font-bold"
              >
                A9 Protège ce qui fait tourner votre véhicules.
              </Typography>

              <Link href="/products">
                <Button
                  variant="contained"
                  size="large"
                  className="px-8 py-3 shadow-lg"
                >
                  Shop Now
                </Button>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-700">
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

{/* ========================= */}
{/* FEATURED PRODUCTS - STYLE 1 */}
{/* ========================= */}
<section className="bg-gray-50 py-24">
  <Container maxWidth="xl">
    <Typography
      variant="h4"
      className="text-center font-bold mb-16"
    >
      Featured Products
    </Typography>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-2xl transition duration-500 group relative"
        >
          {product.badge && (
            <div className="absolute top-6 left-6 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </div>
          )}

          <div className="relative h-52 w-52 mx-auto mb-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-105 transition duration-500">
            <Image
              src={product.image}
              alt={product.name}
              width={160}
              height={160}
              className="object-contain"
            />
          </div>

          <Typography variant="h6" className="font-semibold">
            {product.name}
          </Typography>

          <Typography
            variant="body2"
            className="text-gray-500 mt-2"
          >
            {product.description}
          </Typography>

          <div className="flex justify-center mt-3 text-yellow-400 text-sm">
            ★★★★★
          </div>

          <Typography
            variant="h6"
            className="mt-4 font-bold"
          >
            ${product.price}
          </Typography>

          <Link href={`/products/${product.id}`}>
            <Button
              variant="contained"
              className="mt-6 rounded-full px-6 shadow-lg"
            >
              Add to cart
            </Button>
          </Link>
        </div>
      ))}
    </div>
  </Container>
</section>



{/* ========================= */}
{/* MODERN OFFER SECTION - STYLE 2 */}
{/* ========================= */}
<section className="py-32 bg-gradient-to-r from-green-400 to-emerald-600 text-white relative overflow-hidden">
  <Container maxWidth="lg">
    <div className="text-center">
      <Typography variant="h3" className="font-bold mb-6">
        Protect Your Engine Today
      </Typography>

      <Typography variant="h6" className="opacity-90 mb-16">
        Limited 14-Day Offer
      </Typography>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "20% Discount",
            desc: "On your first treatment"
          },
          {
            title: "Free Delivery",
            desc: "From $100 purchase"
          },
          {
            title: "Free Diagnosis",
            desc: "For your vehicle"
          }
        ].map((item, i) => (
          <div
            key={i}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl hover:scale-105 transition duration-500"
          >
            <div className="text-4xl mb-4">✓</div>
            <Typography variant="h6" className="font-semibold mb-2">
              {item.title}
            </Typography>
            <Typography variant="body2" className="opacity-90">
              {item.desc}
            </Typography>
          </div>
        ))}
      </div>

      <Button
        variant="contained"
        size="large"
        className="rounded-full px-12 py-4 bg-white text-green-600 font-bold shadow-2xl hover:bg-gray-100"
      >
        Claim Offer Now
      </Button>
    </div>
  </Container>
</section>



{/* ========================= */}
{/* BENEFITS COMPARISON - STYLE 3 */}
{/* ========================= */}
<section className="py-28 bg-gray-100">
  <Container maxWidth="lg">
    <div className="text-center mb-16">
      <Typography variant="h3" className="font-bold mb-4">
        How A9 Transforms Your Engine
      </Typography>
      <Typography variant="body1" className="text-gray-600">
        Benefits Comparison
      </Typography>
    </div>

    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-3 bg-gray-50 p-6 font-semibold text-center">
        <div>Criteria</div>
        <div className="text-red-500">Without A9</div>
        <div className="text-green-600">With A9</div>
      </div>

      {[
        ["Oil Change", "Every 10 000 km", "Every 20 000 km"],
        ["Consumption", "7L / 100 km", "4.2L / 100 km"],
        ["Reliability", "Frequent breakdowns", "Engine protected"],
        ["Emissions", "High pollution", "-70% emissions"],
        ["Technical Check", "Stress", "Guaranteed pass"],
        ["Costs", "Unpredictable", "Predictable savings"]
      ].map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-3 text-center p-6 border-t"
        >
          <div className="font-medium">{row[0]}</div>
          <div className="text-gray-500">{row[1]}</div>
          <div className="text-green-600 font-semibold">{row[2]}</div>
        </div>
      ))}
    </div>
  </Container>
</section>


      {/* PRODUCTS
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
                <div className="relative h-80 w-full group overflow-hidden">

                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-20 shadow-lg">
                      {product.badge}
                    </div>
                  )}

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <Button
                      variant="contained"
                      size="small"
                      className="shadow-xl"
                    >
                      Quick View
                    </Button>
                  </div>

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
      </Container> */}
    </>
  )
}
