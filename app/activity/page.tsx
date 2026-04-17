import { ACTIVITY } from "@/lib/content";

export const metadata = {
  title: "Activity | Plato Design",
  description: "A structured trace of ongoing work, field observations, and concept development.",
};

export default function Activity() {
  return (
    <div className="activity-container">
      <section className="page-intro">
        <span className="mono">0.5 / Operational Rhythm</span>
        <h1 className="page-title">Continuity.</h1>
        <p>
          Authority is derived from visible persistence. This log provides 
           a structured trace of ongoing research development, visual 
          theory boards, spatial diagnostics, and brand infrastructure studies.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {ACTIVITY.map((log, index) => (
            <div key={index} className="structural-unit" style={{ display: 'flex', gap: '4rem' }}>
              <div style={{ minWidth: '100px' }}>
                <span className="mono">{log.date}</span>
              </div>
              <div>
                <span className="mono">{log.category}</span>
                <p style={{ marginTop: '1rem', maxWidth: '80ch', fontSize: '1rem' }}>{log.entry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">Visible Persistence</span>
            <h2>Ongoing Studies.</h2>
            <p>
              We maintain an active operational rhythm in Semi-AI human 
              environment studies and visual research. For daily fragments 
              and field observations, follow our 
              <a href="https://www.instagram.com/plato.design.lab" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', marginLeft: '0.5rem' }}>Instagram</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
