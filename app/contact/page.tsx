import { EXTERNAL_LINKS } from "@/lib/content";

export const metadata = {
  title: "Inquiry | Plato Design",
  description: "Initiate a procedural inquiry for spatial reading, project collaboration, or research releases.",
};

export default function Contact() {
  return (
    <div className="contact-container">
      <section className="page-intro">
        <span className="mono">0.6 / Contact</span>
        <h1 className="page-title">Inquiry Initiation.</h1>
        <p>
          Plato Design accepts a limited number of professional inquiries 
          per cycle. Submissions are reviewed for project fit, scope, 
          and timing within a limited response window.
        </p>
      </section>

      <div className="grid">
        <div className="col-6">
          <p>
            For spatial readings, please specify the type of space, 
            its current use, and the primary environmental challenge. 
          </p>
          <div className="mt-large">
            <span className="mono">Direct Channel</span>
            <p>platodesign@icloud.com</p>
          </div>
          <div className="mt-large">
            <span className="mono">Research Access</span>
            <p>
              Access research releases and member-only theory boards 
              via <a href="https://www.patreon.com/cw/platodesignlab" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Patreon</a>.
            </p>
          </div>
          <div className="mt-large">
            <span className="mono">Verification Registry</span>
            <div style={{ marginTop: '1.5rem' }}>
              {EXTERNAL_LINKS.map((link, index) => (
                <div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #f9f9f9', paddingBottom: '0.5rem' }}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="verification-link" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <span className="mono" style={{ fontSize: '0.7rem', color: '#1a1a1a' }}>{link.label}</span>
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
                <option value="reading">Spatial Reading</option>
                <option value="project">Project Inquiry</option>
                <option value="collaboration">Collaboration / Speaking</option>
                <option value="licensing">Research Release / Licensing</option>
                <option value="general">General Contact</option>
              </select>
            </div>

            <div className="form-group">
              <label>Type of Space / Current Use</label>
              <input type="text" placeholder="e.g., Robotics Lab, Studio, Residence" />
            </div>

            <div className="form-group">
              <label>Nature of Challenge / Context</label>
              <textarea rows={4} placeholder="Describe the structural conditions, main issue, or project objective" required></textarea>
            </div>

            <div className="form-group">
              <label>Supporting Data (Optional)</label>
              <p className="mono" style={{ fontSize: '0.5rem', marginBottom: '0.5rem' }}>Photos or drawings can be sent via email after initiation.</p>
            </div>
            
            <div className="form-group">
              <label>Desired Timeline</label>
              <input type="text" placeholder="e.g., Immediate, Q3 2026" />
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
