import { THEORY_CONCEPTS } from "@/lib/content";

export const metadata = {
  title: "Theory | Plato Design",
  description: "Conceptual frameworks for spatial research and design logic.",
};

export default function Theory() {
  return (
    <div className="theory-container">
      <section className="page-intro">
        <span className="mono">0.3 / Conceptual Logic</span>
        <h1 className="page-title">Usable Frameworks.</h1>
        <p>
          Plato Design produces conceptual frameworks that translate 
          bodily necessity into actionable design logic. Our theory 
          is not decorative; it is a producer of reproducible reading lenses.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {THEORY_CONCEPTS.map((item, index) => (
            <div key={index} className="structural-unit">
              <span className="mono">Framework Item</span>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{item.title}</h2>
              
              <div className="grid" style={{ borderTop: 'none', paddingTop: 0 }}>
                <div className="col-8">
                  <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{item.definition}</p>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    <em>Observation / Redesign Utility:</em> {item.utility}
                  </p>
                </div>
                <div className="col-4 right">
                  <p className="mono">Archive release pending</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">Future Development</span>
            <h2>Expansion Strategy.</h2>
            <p>
              The Theory section is designed for long-term growth. Each 
              concept will connect to a dedicated research plate, essay, 
              or data release as our public archive accumulates.
            </p>
            <p>
              Access deeper research releases and full theory boards 
              on our <a href="https://www.patreon.com/cw/platodesignlab" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Patreon</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
