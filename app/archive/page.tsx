import { ARCHIVE_ENTRIES } from "@/lib/content";

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
          The archive documents Plato Design as an ongoing producer of theory-driven 
          spatial research. It includes structured essays, theory boards, release documents, 
          and long-form conceptual studies.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {ARCHIVE_ENTRIES.map((item, index) => (
            <div key={index} className="structural-unit" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ maxWidth: '70%' }}>
                <span className="mono">Archive Item 0{index + 1}</span>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h2>
                <p style={{ fontSize: '0.9rem' }}>{item.summary}</p>
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
