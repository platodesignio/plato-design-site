import { ARCHIVE } from "@/lib/content";

export const metadata = {
  title: "Archive | Plato Design",
  description: "A disciplined archive of conceptual work, theory boards, and research fragments.",
};

export default function Archive() {
  return (
    <div className="archive-container">
      <section className="page-intro">
        <span className="mono">0.4 / Public Research</span>
        <h1 className="page-title">Research Archive.</h1>
        <p>
          A disciplined repository of conceptual work releases, theory boards, 
          essays, and structured public fragments. Plato Design functions 
          as a continuing research-producing entity.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {ARCHIVE.map((item, index) => (
            <div key={index} className="structural-unit" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ maxWidth: '70%' }}>
                <span className="mono">Archive Item 0{index + 1}</span>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h2>
                <p style={{ fontSize: '0.9rem' }}>{item.summary}</p>
              </div>
              <div className="right">
                <span className="mono">{item.link_text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="structural-unit">
        <div className="grid">
          <div className="col-8">
            <span className="mono">External Publication</span>
            <h2>Dissemination Strategy.</h2>
            <p>
              Select materials are prepared for external publication via 
              Zenodo or dedicated research journals. Current releases 
              are optimized for high-end institutional and academic use.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
