import Hero from "./components/hero"
import PropertyCarousel from "./components/property-carousel"
import CityCarousel from "./components/city-carousel"
import ReviewsSection from "./components/reviews-section"
import { Footer } from "./components/footer"
import { properties, reviews, cities } from "./data"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Featured Properties</h2>
        <PropertyCarousel properties={properties} />
      </section>
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Explore Real Estate in Popular Indian Cities</h2>
          <CityCarousel cities={cities} />
        </div>
      </section>
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">What Our Clients Say</h2>
        <ReviewsSection reviews={reviews} />
      </section>
      <Footer />
    </main>
  )
}

