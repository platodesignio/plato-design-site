import { SOCIAL_REGISTRY, CONTACT_EMAIL } from "@/lib/content";

export const metadata = {
  title: "Registry | Plato Design",
  description: "Initiate a procedural inquiry for spatial reading, project recomposition, or research collaboration.",
};

export default function Contact() {
  return (
    <div className="contact-container">
      <section className="page-intro">
        <span className="mono">0.7 / Inquiry Registry</span>
        <h1 className="page-title">Procedural Initiation.</h1>
        <p>
          Contact Plato Design through the inquiry route that best matches the work. 
          Submissions are reviewed for project fit, scope, and timing within a limited 
          response window.
        </p>
      </section>

      <div className="grid">
        <div className="col-6">
          <div style={{ marginBottom: '4rem' }}>
            <span className="mono">Direct Channel</span>
            <p style={{ fontSize: '1.25rem', marginTop: '1rem', color: '#1a1a1a' }}>{CONTACT_EMAIL}</p>
          </div>
          
          <div style={{ marginBottom: '4rem' }}>
            <span className="mono">Institutional Review</span>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
              Submissions are reviewed according to our project-fit protocol. 
              Plato Design replies through a selective process based on research 
              alignment and operational capacity.
            </p>
          </div>

          <div className="mt-large">
            <span className="mono">Verification Registry</span>
            <div style={{ marginTop: '1.5rem' }}>
              {SOCIAL_REGISTRY.map((link, index) => (
                <div key={index} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #f9f9f9', paddingBottom: '0.75rem' }}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="verification-link" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <span className="mono" style={{ fontSize: '0.7rem', color: '#1a1a1a' }}>{link.label}</span>
                    <p style={{ fontSize: '0.7rem', color: '#888', marginTop: '0.25rem' }}>{link.desc}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-6">
          <form className="contact-form">
            <div className="form-group">
              <label>Origin (Organization / Principal)</label>
              <input type="text" placeholder="Identity of inquiry origin" required />
            </div>
            
            <div className="form-group">
              <label>Inquiry Category</label>
              <select required style={{ width: '100%', border: 'none', borderBottom: '1px solid #eeeeee', background: 'transparent', padding: '0.5rem 0', fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 300, color: '#333', outline: 'none' }}>
                <option value="">Select category</option>
                <option value="reading">Spatial Reading Inquiry</option>
                <option value="project">Project Recomposition</option>
                <option value="collaboration">Collaboration / Speaking</option>
                <option value="licensing">Research Release Licensing</option>
                <option value="general">General Contact</option>
              </select>
            </div>

            <div className="form-group">
              <label>Context / Nature of Challenge</label>
              <textarea rows={6} placeholder="Describe the structural conditions or project objective. For spatial inquiries, include space type and current use." required></textarea>
            </div>
            
            <div className="form-group">
              <label>Desired Timeline</label>
              <input type="text" placeholder="e.g., Immediate, Q4 2026" />
            </div>

            <div className="form-group">
              <label>Communication Channel (Email)</label>
              <input type="email" placeholder="direct@example.com" required />
            </div>
            
            <button type="submit" className="submit-btn">Submit Inquiry</button>
            <p className="mono" style={{ marginTop: '1.5rem', fontSize: '0.55rem' }}>
              Submission implies agreement to institutional review protocol.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
