import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Apple, PlayCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="hover:text-primary-foreground/80">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link
                href="#"
                className="flex items-center bg-primary-foreground text-primary px-3 py-2 rounded-md hover:bg-primary-foreground/90 text-sm"
              >
                <Apple className="w-5 h-5 mr-2" />
                <span>App Store</span>
              </Link>
              <Link
                href="#"
                className="flex items-center bg-primary-foreground text-primary px-3 py-2 rounded-md hover:bg-primary-foreground/90 text-sm"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                <span>Play Store</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm">&copy; 2023 DreamHome Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

