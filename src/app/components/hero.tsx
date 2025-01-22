"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { cn } from "@/lib/utils"
import "@/styles/animations.css"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative min-h-[500px] md:h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <Image src="/luxury-home.jpg" alt="Luxury Home" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text visibility */}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
          Find Your Dream Home
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Discover the perfect property from our extensive collection of homes, apartments, and luxury estates
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto animate-fade-in-up">
          <Input
            placeholder="Enter location, property type, or keyword"
            className="bg-white/90 text-black placeholder:text-gray-500 backdrop-blur-sm"
          />
          <Button className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

