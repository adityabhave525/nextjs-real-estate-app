"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface City {
  id: string
  name: string
  propertyCount: number
  image: string
}

interface CityCarouselProps {
  cities: City[]
}

export default function CityCarousel({ cities }: CityCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * (carouselRef.current.offsetWidth / 2)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= cities.length ? 0 : prev + 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(cities.length - 2, 0) : prev - 2))
  }

  useEffect(() => {
    scrollToIndex(currentIndex)
  }, [currentIndex])

  return (
    <div className="relative">
      <div ref={carouselRef} className="flex overflow-x-hidden gap-6 scroll-smooth">
        {cities.map((city, index) => (
          <Card
            key={city.id}
            className={`min-w-[calc(50%-12px)] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] ${index % 2 === 0 ? "mt-0" : "mt-12"}`}
          >
            <CardContent className="p-0">
              <div className="relative h-[200px]">
                <Image
                  src={city.image || "/placeholder.svg"}
                  alt={city.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{city.name}</h3>
                <p className="text-muted-foreground">{city.propertyCount.toLocaleString()} properties</p>
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

