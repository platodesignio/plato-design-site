import { GRAVITY_STUDIES } from "@/lib/content";

export const metadata = {
  title: "Advanced Environments | Plato Design",
  description: "Specialized research field examining body-space synchronization under altered gravity conditions.",
};

export default function Gravity() {
  return (
    <div className="gravity-container">
      <section className="page-intro">
        <span className="mono">0.4 / Specialized Field</span>
        <h1 className="page-title">Gravity Transition Studies.</h1>
        <p>
          Gravity Transition Studies (GTS) is a major research field within Plato Design. 
          It extends body-space design into environments where gravitational reference 
          cannot be assumed to remain stable.
        </p>
        <p>
          Architecture here must function as a re-synchronization system. This field 
          links habitat design, bodily symmetry, support logic, and sensorimotor 
          recalibration under altered gravity.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {GRAVITY_STUDIES.map((study, index) => (
            <div key={index} className="structural-unit">
              <span className="mono">{study.id} / Research Release</span>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{study.title}</h2>
              <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-sans)', color: '#666', marginBottom: '2rem', fontWeight: 300 }}>{study.jp_title}</h3>
              
              <div className="grid" style={{ borderTop: 'none', paddingTop: 0 }}>
                <div className="col-8">
                  <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#1a1a1a' }}><strong>Focus:</strong> {study.definition}</p>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>{study.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
