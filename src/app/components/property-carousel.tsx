"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { cn } from "@/lib/utils"
import { useSwipe } from "../hooks/use-swipe"

interface Property {
  id: string
  title: string
  location: string
  price: string
  image: string
  featured?: boolean
}

interface PropertyCarouselProps {
  properties: Property[]
}

export default function PropertyCarousel({ properties }: PropertyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * (carouselRef.current.offsetWidth / 1)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= properties.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? properties.length - 1 : prev - 1))
  }

  useEffect(() => {
    scrollToIndex(currentIndex)
  }, [currentIndex])

  useSwipe({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  })

  return (
    <div className="relative">
      <div ref={carouselRef} className="flex overflow-x-hidden gap-4 md:gap-6 scroll-smooth">
        {properties.map((property) => (
          <Card
            key={property.id}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] transition-transform duration-300 hover:scale-[1.02]"
          >
            <CardContent className="p-0">
              <div className="relative h-[180px] sm:h-[200px]">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                {property.featured && (
                  <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-sm">Featured</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2">{property.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{property.location}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base sm:text-lg">{property.price}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white/90 shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/90 shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  )
}

