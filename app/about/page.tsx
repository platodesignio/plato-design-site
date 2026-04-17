import { DIAGNOSTIC_AXES, FOUNDER } from "@/lib/content";

export const metadata = {
  title: "Research Framework | Plato Design",
  description: "The ten diagnostic axes used to read and evaluate environmental conditions.",
};

export default function About() {
  return (
    <div className="about-container">
      <section className="page-intro">
        <span className="mono">0.1 / Foundation</span>
        <h1 className="page-title">The Conditions of Difference.</h1>
        <p>
          Plato Design studies and redesigns the conditions that shape human attention, 
          judgment, recovery, action, and generative capacity through the configuration 
          of space, environment, and support structure.
        </p>
        <p>
          We do not design objects or curated lifestyles. We re-compose the 
          underlying fields that dictate whether a person or organization 
          can function at peak intellectual or physiological potential.
        </p>
      </section>

      <section className="structural-unit">
        <span className="mono">Diagnostic Framework</span>
        <h2>Ten Common Diagnostic Axes</h2>
        <p>
          The practice reads environments through ten explicit lenses used 
          to understand why a space supports or degrades human performance.
        </p>

        <div className="grid mt-large">
          {DIAGNOSTIC_AXES.map((axis) => (
            <div key={axis.id} className="col-6" style={{ marginBottom: '6rem' }}>
              <span className="mono">{axis.id} / {axis.title}</span>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}><strong>Definition:</strong> {axis.definition}</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                {axis.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">Operational Integration</span>
            <h2>Representative Profile</h2>
            <p>{FOUNDER.text}</p>
            <p>
              We focus on the development of conceptual structures that 
              translate biological necessity into architectural and 
              informational geometry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
