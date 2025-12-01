import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{ fontFamily: "var(--font-cool-reg)" }}
      className={` py-16 tracking-wider`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-3">
            <Link
              href="/"
              style={{ fontFamily: "var(--font-broch-reg)" }}
              className={`text-4xl font-bold tracking-wide mb-6 block`}
            >
              launchit.today
            </Link>
            <p className="text-xl leading-relaxed text-foreground mr-5">
              Tech agency, based in India shiping for the world.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xl font-medium mb-6">Lit Labs</h3>
            <nav className="space-y-4">
              <Link
                href="#"
                className="block text-foreground hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block text-foreground hover:text-orange-500 transition-colors"
              >
                Work
              </Link>
              <Link
                href="#"
                className="block text-foreground hover:text-orange-500 transition-colors"
              >
                Insights
              </Link>
              <Link
                href="#"
                className="block text-foreground hover:text-orange-500 transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-6">Case Studies</h3>
            <nav className="space-y-4">
              <Link
                href="/"
                className="block text-foreground hover:text-orange-500 transition-colors"
              >
                yardstoacres
              </Link>
              <Link
                href="/"
                className="block text-foreground hover:text-orange-500 transition-colors"
              >
                nexabetx
              </Link>
              <Link
                href="/"
                className="block text-foreground hover:text-orange-500 transition-colors"
              >
                pujegroup
              </Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-6">Address</h3>
            <address className="not-italic space-y-4">
              <p className="text-foreground">Indore,</p>
              <p className="text-foreground">Madhya Pradesh,</p>
              <p className="text-foreground">India</p>
            </address>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-6">Follow us</h3>
            <nav className="space-y-4">
              <Link
                href="https://linkedin.com/company/launchitoday"
                className="block text-foreground hover:text-orange-500 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://x.com/launchitoday"
                className="block text-foreground hover:text-orange-500 transition-colors"
              >
                X
              </Link>
              <Link
                href="https://instagram.com"
                className="block text-foreground hover:text-orange-500 transition-colors"
              >
                Instagram
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <Link
            href="#"
            className="text-foreground hover:text-orange-500 transition-colors mb-4 md:mb-0"
          >
            Privacy Policy
          </Link>
          <p className="text-foreground">
            © Lit Labs 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
