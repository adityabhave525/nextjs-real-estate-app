import { useState, useEffect } from "react"

interface SwipeInput {
  onSwipedLeft: () => void
  onSwipedRight: () => void
}

export function useSwipe({ onSwipedLeft, onSwipedRight }: SwipeInput) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      if (isLeftSwipe) {
        onSwipedLeft()
      } else if (isRightSwipe) {
        onSwipedRight()
      }
    }

    document.addEventListener("touchstart", onTouchStart)
    document.addEventListener("touchmove", onTouchMove)
    document.addEventListener("touchend", onTouchEnd)

    return () => {
      document.removeEventListener("touchstart", onTouchStart)
      document.removeEventListener("touchmove", onTouchMove)
      document.removeEventListener("touchend", onTouchEnd)
    }
  }, [onSwipedLeft, onSwipedRight, touchStart, touchEnd])
}

