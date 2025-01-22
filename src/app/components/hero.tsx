"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { cn } from "@/lib/utils"
import "@/styles/animations.css"

export default function Hero() {
  return (
    <div className="relative min-h-[500px] md:h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        {/* Add decorative elements */}
        <div className="absolute right-0 md:right-10 top-10 md:top-20 w-40 h-40 md:w-72 md:h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute left-0 md:left-10 bottom-10 md:bottom-20 w-56 h-56 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl" />
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

