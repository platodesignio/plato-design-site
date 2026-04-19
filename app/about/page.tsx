import { DIAGNOSTIC_INDEX } from "@/lib/content";

export const metadata = {
  title: "Research | Plato Design",
  description: "Foundational statement and common diagnostic axes of the Plato Design research practice.",
};

export default function About() {
  return (
    <div className="about-container">
      <section className="page-intro">
        <span className="mono">0.1 / Research Foundation</span>
        <h1 className="page-title">The Architecture of Generative Conditions.</h1>
        <p>
          Plato Design studies and redesigns the conditions that shape human attention, 
          judgment, recovery, action, and generative capacity through the configuration 
          of space, environment, and support structure.
        </p>
        <p>
          The practice does not treat space as background. It treats space as an active 
          condition of judgment, movement, and orientation. A room, a studio, or a workplace 
          can strengthen or degrade the body’s ability to generate high-quality difference.
        </p>
      </section>

      <section className="structural-unit">
        <span className="mono">Methodology</span>
        <h2>Ten Common Diagnostic Axes</h2>
        <p>
          The practice reads environments through ten explicit lenses used to identify 
          how a space organizes bodily reference and distributes situational pressure.
        </p>

        <div className="grid mt-large">
          {DIAGNOSTIC_INDEX.map((axis) => (
            <div key={axis.id} className="col-6" style={{ marginBottom: '4rem' }}>
              <span className="mono">{axis.id} / {axis.title}</span>
              <p style={{ fontSize: '1rem', marginTop: '1rem' }}>{axis.definition}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">Institutional Goal</span>
            <h2>Action Stability and Precision.</h2>
            <p>
              Plato Design works across theory, spatial reading, and environmental redesign 
              to produce clearer conditions for action coherence. Our goal is not to produce 
              atmosphere for its own sake, but to redesign the fields under which human 
              difference can be generated with greater precision and depth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
