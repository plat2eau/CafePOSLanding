import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { orderDeskLogoUrl } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <Link className="flex items-center" href="/" aria-label="OrderDesk POS home">
          <Image
            alt="OrderDesk POS"
            className="h-9 w-auto object-contain"
            height={72}
            src={orderDeskLogoUrl}
            width={220}
          />
        </Link>
        <nav className="flex flex-wrap gap-4" aria-label="Footer">
          <Link className="font-semibold hover:text-navy" href="/#features">
            Features
          </Link>
          <Link className="font-semibold hover:text-navy" href="/#how-it-works">
            How It Works
          </Link>
          <Link className="font-semibold hover:text-navy" href="/#for-cafes">
            For Cafes
          </Link>
          <Link className="font-semibold hover:text-navy" href="/resources">
            Resources
          </Link>
          <Link className="font-semibold hover:text-navy" href="/#demo">
            Demo
          </Link>
        </nav>
        <p>&copy; 2026 OrderDesk POS. Cafe-first POS software.</p>
      </Container>
    </footer>
  );
}
