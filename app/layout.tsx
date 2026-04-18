import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { NAVIGATION_PATHS, EXTERNAL_LINKS } from "@/lib/content";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plato-design-site.vercel.app"),
  title: "Plato Design | Structural Research & Spatial Analysis",
  description: "Independent research institute focused on the environmental conditions enabling high-quality human difference generation.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
              {NAVIGATION_PATHS.map((path, index) => (
                <li key={index}>
                  {path.external ? (
                    <a href={path.href} target="_blank" rel="noopener noreferrer">{path.label.toUpperCase()}</a>
                  ) : (
                    <Link href={path.href}>{path.label.toUpperCase()}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div style={{ marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            <span className="mono">Practice Summary</span>
            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '1rem' }}>
              Plato Design: Theory-driven spatial research and design practice studying the environmental conditions 
              of human difference generation.
            </p>
          </div>
          <div className="footer-links">
            {EXTERNAL_LINKS.map((link, index) => (
              <span key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                {index < EXTERNAL_LINKS.length - 1 && <span className="separator">/</span>}
              </span>
            ))}
          </div>
          <p style={{ marginTop: '2rem' }}>© {new Date().getFullYear()} PLATO DESIGN RESEARCH INSTITUTE. ALL RIGHTS RESERVED.</p>
        </footer>
      </body>
    </html>
  );
}
