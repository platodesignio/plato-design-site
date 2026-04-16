export default function Home() {
  return (
    <div className="home-container">
      <section className="page-intro">
        <span className="mono">0.0 / Mandate</span>
        <h1 className="page-title">Plato Design is not decoration.</h1>
        <p>
          It redesigns the environmental conditions that enable high-quality 
          human activity through structural recalibration.
        </p>
      </section>

      <div className="grid">
        <div className="col-8">
          <span className="mono">Operating Parameters</span>
          <div className="structural-unit">
            <h2>Decision Load</h2>
            <p>Evaluating the cognitive friction and semantic noise of the immediate spatial environment.</p>
          </div>
          
          <div className="structural-unit">
            <h2>Breathing Support</h2>
            <p>The atmospheric and volumetric capacity required to sustain deep intellectual labor.</p>
          </div>
          
          <div className="structural-unit">
            <h2>Staying Quality</h2>
            <p>The stability of the center of stay over extended operational cycles.</p>
          </div>
          
          <div className="structural-unit">
            <h2>Input Density</h2>
            <p>Precision management of sensory throughput to prevent cognitive saturation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
