import { THEORY_ITEMS } from "@/lib/content";

export const metadata = {
  title: "Theory | Plato Design",
  description: "Operational design tools and conceptual frameworks for spatial research.",
};

export default function Theory() {
  return (
    <div className="theory-container">
      <section className="page-intro">
        <span className="mono">0.3 / Conceptual Logic</span>
        <h1 className="page-title">Operational Frameworks.</h1>
        <p>
          Plato Design develops and uses conceptual frameworks as operational design tools. 
          Theory here is not decorative abstraction. It is a structured language for reading 
          environmental conditions, identifying breakdowns, and guiding redesign.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {THEORY_ITEMS.map((item, index) => (
            <div key={index} className="structural-unit">
              <span className="mono">Framework Item 0{index + 1}</span>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{item.title}</h2>
              
              <div className="grid" style={{ borderTop: 'none', paddingTop: 0 }}>
                <div className="col-8">
                  <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{item.definition}</p>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    <strong>What it helps observe:</strong> {item.observe}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    <strong>What it supports:</strong> {item.supports}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
