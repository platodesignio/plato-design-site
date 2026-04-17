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
  title: "Plato Design | Structural Research & Spatial Analysis",
  description: "Independent research institute focused on the environmental conditions enabling high-quality human difference generation.",
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
              <li><Link href="/about">RESEARCH</Link></li>
              <li><Link href="/services">SERVICES</Link></li>
              <li><Link href="/theory">THEORY</Link></li>
              <li><Link href="/archive">ARCHIVE</Link></li>
              <li><Link href="/activity">ACTIVITY</Link></li>
              <li><a href="https://www.instagram.com/plato.design.lab" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
              <li><a href="https://www.patreon.com/cw/platodesignlab" target="_blank" rel="noopener noreferrer">PATREON</a></li>
              <li><Link href="/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="footer-links">
            <a href="https://www.instagram.com/plato.design.lab" target="_blank" rel="noopener noreferrer">@plato.design.lab</a>
            <span className="separator">/</span>
            <a href="https://www.patreon.com/cw/platodesignlab" target="_blank" rel="noopener noreferrer">Plato Design Lab on Patreon</a>
          </div>
          <p>© {new Date().getFullYear()} PLATO DESIGN RESEARCH INSTITUTE. ALL RIGHTS RESERVED.</p>
        </footer>
      </body>
    </html>
  );
}
