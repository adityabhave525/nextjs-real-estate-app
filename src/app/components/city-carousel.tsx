/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useSwipe } from "../hooks/use-swipe";

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
      const scrollAmount = index * (carouselRef.current.offsetWidth / 1)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= cities.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? cities.length - 1 : prev - 1))
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
        {cities.map((city, index) => (
          <Card
            key={city.id}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[calc(50%-12px)] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <CardContent className="p-0">
              <div className="relative h-[180px] sm:h-[200px]">
                <Image
                  src={city.image || "/placeholder.svg"}
                  alt={city.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2">{city.name}</h3>
                <p className="text-muted-foreground text-sm">{city.propertyCount.toLocaleString()} properties</p>
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

