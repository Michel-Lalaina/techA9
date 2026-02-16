"use client";

import Link from "next/link"
import Image from "next/image";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import SearchIcon from "@mui/icons-material/Search"
import Badge from "@mui/material/Badge"
import { useCart } from "@/context/CartContext"
import { Home } from "@mui/icons-material";


export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      className="bg-white text-black border-b"
    >
      <Toolbar className="max-w-7xl mx-auto w-full flex justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold hover:text-white">
                  <Image
            src="/logo.png"     
            alt="TechA9 Logo"
            width={200}
            height={200}
            className="object-contain"
          />
  
        </Link>

        {/* CENTER MENU */}
        <div className="hidden md:flex gap-8 text-gray-700 font-bold">
          <Link href="/" className="hover:text-white transition">
          <Home> </Home> Accueil
          </Link>
          <Link href="/products" className="hover:text-white transition">
            Shop
          </Link>
          <Link href="#" className="hover:text-white transition">
            Categories
          </Link>

                    <Link href="#" className="hover:text-white transition">
            Distribution
          </Link>

          <Link href="#" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          <IconButton>
            <SearchIcon className="hover:text-white transition" />
          </IconButton>

          <IconButton>
            <ShoppingCartIcon className="hover:text-white transition" />
          </IconButton>

          <IconButton>
            <PersonOutlineIcon className="hover:text-white transition" />
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
