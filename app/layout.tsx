// app/layout.tsx

import "./globals.css"
import MuiProvider from "@/components/providers/ThemeProvider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "TECHA9",
  description: "Modern e-commerce"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>
          <Navbar />
          {children}
          <Footer />
        </MuiProvider>
      </body>
    </html>
  )
}
