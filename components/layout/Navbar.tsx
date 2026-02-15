"use client"

import Link from "next/link"
import { AppBar, Toolbar, IconButton, Button } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import SearchIcon from "@mui/icons-material/Search"

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      className="bg-white text-black border-b"
    >
      <Toolbar className="max-w-7xl mx-auto w-full flex justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          OALID
        </Link>

        {/* CENTER MENU */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-green-600 transition">
            Shop
          </Link>
          <Link href="#" className="hover:text-green-600 transition">
            Categories
          </Link>
          <Link href="#" className="hover:text-green-600 transition">
            Contact
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          <IconButton>
            <SearchIcon />
          </IconButton>

          <IconButton>
            <ShoppingCartIcon />
          </IconButton>

          <IconButton>
            <PersonOutlineIcon />
          </IconButton>

          <Button
            variant="contained"
            size="small"
            className="ml-2"
          >
            Sign Up
          </Button>

        </div>

      </Toolbar>
    </AppBar>
  )
}
