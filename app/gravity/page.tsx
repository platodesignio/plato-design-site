import { GRAVITY_STUDIES } from "@/lib/content";

export const metadata = {
  title: "Gravity Transition Studies | Plato Design",
  description: "Specialized research field examining body-space synchronization under altered gravity conditions.",
};

export default function Gravity() {
  return (
    <div className="gravity-container">
      <section className="page-intro">
        <span className="mono">0.4 / Specialized Field</span>
        <h1 className="page-title">Gravity Transition Studies.</h1>
        <p>
          Gravity Transition Studies is a major research field within Plato Design. It extends 
          body-space design into environments where gravitational reference cannot be assumed 
          to remain stable.
        </p>
        <p>
          Architecture can no longer be treated as static enclosure alone; it must function 
          as a re-synchronization system linking habitat design, bodily symmetry, support logic, 
          and sensorimotor recalibration.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {GRAVITY_STUDIES.map((study, index) => (
            <div key={index} className="structural-unit">
              <span className="mono">Study 0{index + 1}</span>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{study.title}</h2>
              <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-sans)', color: '#666', marginBottom: '2rem' }}>{study.jp_title}</h3>
              
              <div className="grid" style={{ borderTop: 'none', paddingTop: 0 }}>
                <div className="col-8">
                  <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}><strong>Focus:</strong> {study.definition}</p>
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
