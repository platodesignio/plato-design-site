import Link from "next/link";
import { 
  HERO_CONTENT, 
  NAVIGATION_PATHS, 
  INSTITUTIONAL_INTRO,
  RELIABILITY_CONTENT,
  SOCIAL_REGISTRY
} from "@/lib/content";

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
            {NAVIGATION_PATHS.slice(0, 6).map((path, index) => (
              <li key={index} className="col-4">
                <Link href={path.href} className="block-link">
                  <span className="mono">Pathway 0{index + 1}</span>
                  <h3 style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>{path.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="structural-unit">
        <span className="mono">0.1 / Foundation</span>
        <div className="grid">
          <div className="col-8">
            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#1a1a1a' }}>
              {INSTITUTIONAL_INTRO.text}
            </p>
          </div>
        </div>
      </section>

      {/* 3. RELIABILITY & AUTHORITY */}
      <section className="structural-unit">
        <span className="mono">0.2 / Reliability</span>
        <div className="grid">
          <div className="col-8">
            <h2>Authority Through Method.</h2>
            <p>{RELIABILITY_CONTENT.text}</p>
          </div>
        </div>
      </section>

      {/* 4. VERIFICATION REGISTRY */}
      <section className="structural-unit">
        <span className="mono">0.3 / Verification Registry</span>
        <h2>Connected Research Channels.</h2>
        <div className="grid">
          {SOCIAL_REGISTRY.map((link, index) => (
            <div key={index} className="col-12" style={{ borderBottom: '1px solid #f0f0f0', padding: '1.5rem 0' }}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="verification-link" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', textDecoration: 'none', color: 'inherit' }}>
                <span className="mono" style={{ fontSize: '0.8rem', color: '#1a1a1a' }}>{link.label}</span>
                <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>{link.desc}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INQUIRY REDIRECT */}
      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">0.4 / Inquiry</span>
            <h2>Initiate Procedural Inquiry.</h2>
            <p>
              Plato Design reviews submissions based on research alignment and operational capacity. 
              Submissions are reviewed for project fit within a limited response window.
            </p>
            <div className="mt-large">
              <Link href="/contact" className="submit-btn" style={{ display: 'inline-block' }}>
                Go to Inquiry Registry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', fontSize: '0.5rem', color: '#ccc', zIndex: 1000, opacity: 0.1 }}>PROD_v7.0.0</div>
    </div>
  );
}
