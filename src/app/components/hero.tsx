'use client'

import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from "@/lib/utils"
import "@/styles/animations.css"

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        {/* Add decorative elements */}
        <div className="absolute right-10 top-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute left-10 bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Find Your Dream Home
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Discover the perfect property from our extensive collection of homes, apartments, and luxury estates
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto animate-fade-in-up">
          <Input 
            placeholder="Enter location, property type, or keyword"
            className="bg-white/90 text-black placeholder:text-gray-500 backdrop-blur-sm"
          />
          <Button className="bg-white text-primary hover:bg-white/90">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

