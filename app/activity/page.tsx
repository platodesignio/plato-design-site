import { ACTIVITY_LOG } from "@/lib/content";

export const metadata = {
  title: "Activity | Plato Design",
  description: "A structured trace of ongoing research development, spatial diagnostics, and visual production.",
};

export default function Activity() {
  return (
    <div className="activity-container">
      <section className="page-intro">
        <span className="mono">0.6 / Operational Rhythm</span>
        <h1 className="page-title">Continuity.</h1>
        <p>
          Authority is derived from visible persistence. This log provides 
          a structured trace of ongoing research, field observations, 
          and applied environmental diagnostics.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {ACTIVITY_LOG.map((log, index) => (
            <div key={index} className="structural-unit" style={{ display: 'flex', gap: '4rem' }}>
              <div style={{ minWidth: '100px' }}>
                <span className="mono">{log.date}</span>
              </div>
              <div>
                <span className="mono">{log.category}</span>
                <p style={{ marginTop: '1rem', maxWidth: '80ch', fontSize: '1rem', lineHeight: '1.6', color: '#1a1a1a' }}>{log.entry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
