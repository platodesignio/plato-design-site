import { ACTIVITY_ENTRIES } from "@/lib/content";

export const metadata = {
  title: "Activity | Plato Design",
  description: "A structured log of ongoing research, field observations, and spatial diagnostics.",
};

export default function Activity() {
  return (
    <div className="activity-container">
      <section className="page-intro">
        <span className="mono">0.6 / Operational Rhythm</span>
        <h1 className="page-title">Operational Trace.</h1>
        <p>
          Plato Design maintains an active research and development rhythm across theory, 
          visual articulation, spatial diagnostics, and environmental frameworks. 
          Activity is documented as an operational trace of ongoing work.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {ACTIVITY_ENTRIES.map((log, index) => (
            <div key={index} className="structural-unit" style={{ display: 'flex', gap: '4rem' }}>
              <div style={{ minWidth: '120px' }}>
                <span className="mono">Entry 0{index + 1}</span>
              </div>
              <div>
                <span className="mono">{log.category}</span>
                <p style={{ marginTop: '1rem', maxWidth: '80ch', fontSize: '1rem', lineHeight: '1.6' }}>{log.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
