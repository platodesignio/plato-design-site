import { DIAGNOSTIC_AXES, FOUNDER_TEXT } from "@/lib/content";

export const metadata = {
  title: "Research | Plato Design",
  description: "Foundational statement and common diagnostic axes of Plato Design research practice.",
};

export default function About() {
  return (
    <div className="about-container">
      <section className="page-intro">
        <span className="mono">0.1 / Research Foundation</span>
        <h1 className="page-title">The Architecture of Generative Conditions.</h1>
        <p>
          Plato Design is an independent research and design practice focused on the 
          environmental conditions that shape human generative capacity. It studies the 
          relation between body, space, support field, symmetry, and action under both 
          ordinary and extreme environmental conditions.
        </p>
        <p>
          The central question is simple: What kinds of environments allow a person 
          or collective to sustain coherence, produce new difference, and remain 
          operational over time?
        </p>
        <p>
          The practice does not treat space as background. It treats space as an active 
          condition of judgment, movement, recovery, and orientation. A room, a studio, 
          a workplace, a research habitat, or a transitional environment can strengthen 
          or degrade the body’s ability to act.
        </p>
      </section>

      <section className="structural-unit">
        <span className="mono">Diagnostic Framework</span>
        <h2>Ten Common Diagnostic Axes</h2>
        <p>
          We read environments through an explicit diagnostic structure used to identify 
          how a space organizes bodily reference, distributes pressure, and either supports 
          or disrupts coherent action.
        </p>

        <div className="grid mt-large">
          {DIAGNOSTIC_AXES.map((axis) => (
            <div key={axis.id} className="col-6" style={{ marginBottom: '6rem' }}>
              <span className="mono">{axis.id} / {axis.title}</span>
              <p style={{ fontSize: '1.1rem' }}>{axis.definition}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">Representation</span>
            <h2>Theory and Implementation.</h2>
            <p>{FOUNDER_TEXT}</p>
            <p>
              The goal is not to produce atmosphere for its own sake. The goal is 
              to redesign the conditions under which human difference can be 
              generated with greater stability, precision, and depth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
