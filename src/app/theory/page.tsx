import { THEORY_ARCHITECTURE } from "@/lib/content";

export const metadata = {
  title: "Theory | Plato Design",
  description: "Operational frameworks for reading environmental conditions and guiding spatial redesign.",
};

export default function Theory() {
  return (
    <div className="theory-container">
      <section className="page-intro">
        <span className="mono">0.3 / Conceptual Logic</span>
        <h1 className="page-title">Usable Frameworks.</h1>
        <p>
          Plato Design develops and uses conceptual frameworks as operational design tools. 
          Theory here is a structured language for reading environmental conditions, 
          identifying breakdowns, and guiding redesign.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {THEORY_ARCHITECTURE.map((item, index) => (
            <div key={index} className="structural-unit">
              <span className="mono">Framework Item / 0{index + 1}</span>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{item.title}</h2>
              
              <div className="grid" style={{ borderTop: 'none', paddingTop: 0 }}>
                <div className="col-8">
                  <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#1a1a1a' }}>{item.definition}</p>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    <strong>Observation Utility:</strong> {item.utility}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    <strong>Redesign Support:</strong> {item.support}
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
