import Link from "next/link";
import { 
  HERO_CONTENT, 
  NAVIGATION_PATHS, 
  INTRO_CONTENT,
  RESEARCH_DOMAINS,
  GRAVITY_PREVIEW,
  SERVICES,
  AUTHORITY_TEXT,
  EXTERNAL_LINKS
} from "@/lib/content";

export const metadata = {
  title: "Plato Design | Structural Research & Spatial Analysis",
  description: "Independent research institute focused on the environmental conditions enabling high-quality human difference generation.",
  other: {
    "cache-bust": new Date().getTime().toString(),
  }
};

export default function Home() {
  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="page-intro center">
        <span className="mono">0.0 / Practice Definition</span>
        <h1 className="page-title" style={{ maxWidth: 'none' }}>
          {HERO_CONTENT.main}
        </h1>
        <p style={{ margin: '0 auto 4rem auto' }}>
          {HERO_CONTENT.sub}
        </p>
        
        <nav className="action-layer">
          <ul className="grid" style={{ listStyle: 'none', textAlign: 'left' }}>
            {NAVIGATION_PATHS.map((path, index) => (
              <li key={index} className="col-3">
                {path.external ? (
                  <a href={path.href} target="_blank" rel="noopener noreferrer" className="block-link">
                    <span className="mono">External / 0{index + 1}</span>
                    <h3 style={{ fontSize: '0.9rem', letterSpacing: '0.1em' }}>{path.label}</h3>
                  </a>
                ) : (
                  <Link href={path.href} className="block-link">
                    <span className="mono">Pathway / 0{index + 1}</span>
                    <h3 style={{ fontSize: '0.9rem', letterSpacing: '0.1em' }}>{path.label}</h3>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="structural-unit">
        <span className="mono">0.1 / Introduction</span>
        <div className="grid">
          <div className="col-8">
            <p style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
              {INTRO_CONTENT.text}
            </p>
          </div>
        </div>
      </section>

      {/* 3. RESEARCH SIGNAL */}
      <section className="structural-unit">
        <span className="mono">0.2 / Research Domains</span>
        <div className="grid">
          <div className="col-8">
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {RESEARCH_DOMAINS.map((domain, index) => (
                <li key={index} style={{ marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {domain}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. GRAVITY TRANSITION PREVIEW */}
      <section className="structural-unit">
        <span className="mono">0.3 / Specialized Field</span>
        <h2>{GRAVITY_PREVIEW.title}</h2>
        <div className="grid">
          <div className="col-8">
            <p>{GRAVITY_PREVIEW.text}</p>
            <div className="mt-large">
              <Link href="/gravity" className="mono" style={{ textDecoration: 'underline' }}>
                View Gravity Transition Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES PREVIEW */}
      <section className="structural-unit">
        <span className="mono">0.4 / Service Architecture</span>
        <div className="grid">
          {SERVICES.map((service, index) => (
            <div key={index} className="col-4">
              <span className="mono">Tier 0{index + 1}</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{service.description.split('.')[0]}.</p>
            </div>
          ))}
        </div>
        <div className="mt-large">
          <Link href="/services" className="mono" style={{ textDecoration: 'underline' }}>
            View Full Service Offers
          </Link>
        </div>
      </section>

      {/* 6. AUTHORITY PREVIEW */}
      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">0.5 / Authority</span>
            <h2>Method Clarity.</h2>
            <p>{AUTHORITY_TEXT}</p>
          </div>
        </div>
      </section>

      {/* 7. VERIFICATION REGISTRY */}
      <section className="structural-unit">
        <span className="mono">0.6 / Verification Registry</span>
        <h2>Connected Research Channels.</h2>
        <div className="grid">
          {EXTERNAL_LINKS.map((link, index) => (
            <div key={index} className="col-12" style={{ borderBottom: '1px solid #f0f0f0', padding: '1rem 0' }}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="verification-link" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', textDecoration: 'none', color: 'inherit' }}>
                <span className="mono" style={{ fontSize: '0.8rem', color: '#1a1a1a' }}>{link.label}</span>
                <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>{link.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CONTACT PREVIEW */}
      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">0.7 / Inquiry</span>
            <h2>Initiate Procedural Inquiry.</h2>
            <p>
              We prioritize projects presenting unique structural challenges or requiring 
              deep analysis of environmental conditions.
            </p>
            <div className="mt-large">
              <Link href="/contact" className="submit-btn" style={{ display: 'inline-block' }}>
                Go to Inquiry Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', fontSize: '0.5rem', color: '#ccc', zIndex: 1000, opacity: 0.2 }}>v5.0.0</div>
    </div>
  );
}
