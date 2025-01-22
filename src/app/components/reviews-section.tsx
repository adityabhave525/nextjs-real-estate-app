"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Review {
  id: string
  name: string
  location: string
  text: string
  image: string
}

interface ReviewsSectionProps {
  reviews: Review[]
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0
        } else {
          scrollRef.current.scrollLeft += 1
        }
      }
    }

    const timer = setInterval(scroll, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <div ref={scrollRef} className="flex overflow-x-hidden gap-4 md:gap-6 py-4">
      {[...reviews, ...reviews].map((review, index) => (
        <Card key={`${review.id}-${index}`} className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px]">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">{review.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm md:text-base">{review.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

