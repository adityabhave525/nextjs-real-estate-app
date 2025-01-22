import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Apple, PlayCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="hover:text-primary-foreground/80">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80">
                <Instagram />
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80">
                <Linkedin />
              </Link>
            </div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="flex items-center bg-primary-foreground text-primary px-3 py-2 rounded-md hover:bg-primary-foreground/90"
              >
                <Apple className="mr-2" />
                <span>App Store</span>
              </Link>
              <Link
                href="#"
                className="flex items-center bg-primary-foreground text-primary px-3 py-2 rounded-md hover:bg-primary-foreground/90"
              >
                <PlayCircle className="mr-2" />
                <span>Play Store</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p>&copy; 2023 DreamHome Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

