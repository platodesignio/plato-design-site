import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Plato Design | Independent Research Institute",
  description: "High-end design research and architectural inquiry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="antialiased">
        <header className="site-header">
          <div className="header-top">
            <Link href="/" className="logo">PLATO DESIGN</Link>
          </div>
          <nav className="site-nav">
            <ul>
              <li><Link href="/about">ABOUT</Link></li>
              <li><Link href="/services">SERVICES</Link></li>
              <li><Link href="/method">METHOD</Link></li>
              <li><Link href="/case-direction">CASE DIRECTION</Link></li>
              <li><Link href="/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} PLATO DESIGN RESEARCH INSTITUTE. ALL RIGHTS RESERVED.</p>
        </footer>
      </body>
    </html>
  );
}
