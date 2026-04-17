import Link from "next/link";
import { 
  HERO_CONTENT, 
  NAVIGATION_PATHS, 
  DIAGNOSTIC_AXES, 
  THEORY_CONCEPTS, 
  SERVICES, 
  ARCHIVE, 
  ACTIVITY, 
  AUTHORITY, 
  FOUNDER, 
  EXTERNAL_LINKS 
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
            {NAVIGATION_PATHS.map((path, index) => (
              <li key={index} className="col-3">
                <Link href={path.href} className="block-link" target={path.external ? "_blank" : undefined}>
                  <span className="mono">{index < 4 ? `Pathway 0${index + 1}` : `Verification`}</span>
                  <h3 style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>{path.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* 2. ABOUT / RESEARCH FRAMEWORK */}
      <section className="structural-unit">
        <span className="mono">0.1 / Foundation</span>
        <h2>The Conditions of Difference.</h2>
        <div className="grid">
          <div className="col-8">
            <p>
              Plato Design studies and redesigns the conditions that shape human attention, 
              judgment, recovery, action, and generative capacity through the configuration 
              of space, environment, and support structure.
            </p>
            <p>
              The practice reads environments through ten common diagnostic axes used to 
              understand why a room, workspace, or facility supports or degrades human performance.
            </p>
          </div>
        </div>
        <div className="grid mt-large">
          {DIAGNOSTIC_AXES.slice(0, 4).map((axis) => (
            <div key={axis.id} className="col-3">
              <span className="mono">{axis.id}</span>
              <h3 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{axis.title}</h3>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>{axis.definition}</p>
            </div>
          ))}
          <div className="col-12" style={{ marginTop: '2rem' }}>
            <Link href="/about" className="mono" style={{ textDecoration: 'underline' }}>
              View all 10 diagnostic axes
            </Link>
          </div>
        </div>
      </section>

      {/* 3. THEORY SECTION */}
      <section className="structural-unit">
        <span className="mono">0.2 / Conceptual Logic</span>
        <h2>Usable Frameworks.</h2>
        <div className="grid">
          {THEORY_CONCEPTS.slice(0, 3).map((concept, index) => (
            <div key={index} className="col-4">
              <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>{concept.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{concept.definition}</p>
              <p style={{ fontSize: '0.8rem', color: '#666' }}><em>Utility:</em> {concept.utility}</p>
            </div>
          ))}
        </div>
        <div className="mt-large">
          <Link href="/theory" className="mono" style={{ textDecoration: 'underline' }}>
            Explore full theory architecture
          </Link>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="structural-unit">
        <span className="mono">0.3 / Offer Architecture</span>
        <h2>Structural Redesign Services.</h2>
        <div className="grid">
          {SERVICES.map((service, index) => (
            <div key={index} className="col-4">
              <span className="mono">Tier 0{index + 1}</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{service.for}</p>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>{service.produces}</p>
            </div>
          ))}
        </div>
        <div className="mt-large">
          <Link href="/services" className="mono" style={{ textDecoration: 'underline' }}>
            View service details and engagement logic
          </Link>
        </div>
      </section>

      {/* 5. ARCHIVE SECTION */}
      <section className="structural-unit">
        <span className="mono">0.4 / Public Research</span>
        <h2>Research Archive.</h2>
        <div className="grid">
          {ARCHIVE.map((item, index) => (
            <div key={index} className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <div style={{ maxWidth: '70%' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{item.summary}</p>
              </div>
              <span className="mono">{item.link_text}</span>
            </div>
          ))}
        </div>
        <div className="mt-large">
          <Link href="/archive" className="mono" style={{ textDecoration: 'underline' }}>
            Access full research archive
          </Link>
        </div>
      </section>

      {/* 6. ACTIVITY SECTION */}
      <section className="structural-unit">
        <span className="mono">0.5 / Operational Rhythm</span>
        <h2>Continuity.</h2>
        <div className="grid">
          {ACTIVITY.map((log, index) => (
            <div key={index} className="col-12" style={{ display: 'flex', gap: '4rem', marginBottom: '2rem' }}>
              <span className="mono" style={{ minWidth: '80px' }}>{log.date}</span>
              <div>
                <span className="mono">{log.category}</span>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{log.entry}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-large">
          <Link href="/activity" className="mono" style={{ textDecoration: 'underline' }}>
            View complete activity log
          </Link>
        </div>
      </section>

      {/* 7. AUTHORITY SECTION */}
      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">0.6 / Reliability</span>
            <h2>Authority Through Method.</h2>
            <p>{AUTHORITY.text}</p>
          </div>
        </div>
      </section>

      {/* 8. FOUNDER SECTION */}
      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">0.7 / Representation</span>
            <h2>Research & Implementation.</h2>
            <p>{FOUNDER.text}</p>
          </div>
        </div>
      </section>

      {/* 9. EXTERNAL LINKS */}
      <section className="structural-unit">
        <span className="mono">0.8 / External verification</span>
        <h2>Connected Research.</h2>
        <div className="grid">
          {EXTERNAL_LINKS.map((link, index) => (
            <div key={index} className="col-6">
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="block-link">
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{link.label}</h3>
                <p style={{ fontSize: '0.9rem' }}>{link.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CONTACT PREVIEW */}
      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">0.9 / Inquiry</span>
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

      <style jsx>{`
        .block-link {
          display: block;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.3s;
          padding: 1.5rem;
          border: 1px solid transparent;
        }
        .block-link:hover {
          opacity: 0.6;
          border-color: #eee;
        }
        .action-layer {
          margin-top: 6rem;
          margin-bottom: 8rem;
        }
        .submit-btn {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
