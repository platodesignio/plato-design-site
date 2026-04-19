import { ARCHIVE_REGISTRY } from "@/lib/content";

export const metadata = {
  title: "Archive | Plato Design",
  description: "A disciplined archive of theory-driven spatial research, essays, and release documents.",
};

export default function Archive() {
  return (
    <div className="archive-container">
      <section className="page-intro">
        <span className="mono">0.5 / Public Research</span>
        <h1 className="page-title">Research Archive.</h1>
        <p>
          A disciplined repository of conceptual work releases, theory boards, 
          essays, and structured public fragments. Plato Design functions 
          as a continuing research-producing entity.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {ARCHIVE_REGISTRY.map((item, index) => (
            <div key={index} className="structural-unit" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ maxWidth: '70%' }}>
                <span className="mono">{item.type}</span>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h2>
                <p style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>{item.summary}</p>
              </div>
              <div className="right">
                <span className="mono">Release Pending Editorial Completion</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
