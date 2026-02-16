"use client"

export default function Footer() {
  return (
    <footer className="bg-green-500 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <p>© {new Date().getFullYear()} TECHA9. All rights reserved.</p>
      </div>
    </footer>
  )
}