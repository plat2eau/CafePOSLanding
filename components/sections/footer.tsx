import Image from "next/image";
import { Container } from "@/components/ui";
import { orderDeskLogoUrl } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <a className="flex items-center" href="#top" aria-label="OrderDesk home">
          <Image
            alt="OrderDesk"
            className="h-9 w-auto object-contain"
            height={72}
            src={orderDeskLogoUrl}
            width={220}
          />
        </a>
        <nav className="flex flex-wrap gap-4" aria-label="Footer">
          <a className="font-semibold hover:text-navy" href="#features">
            Features
          </a>
          <a className="font-semibold hover:text-navy" href="#how-it-works">
            How It Works
          </a>
          <a className="font-semibold hover:text-navy" href="#for-cafes">
            For Cafes
          </a>
          <a className="font-semibold hover:text-navy" href="#demo">
            Demo
          </a>
        </nav>
        <p>&copy; 2026 OrderDesk. Cafe-first POS software.</p>
      </Container>
    </footer>
  );
}
