export default function Contact() {
  return (
    <div className="contact-container">
      <section className="page-intro">
        <span className="mono">0.5 / Contact</span>
        <h1 className="page-title">Inquiry Initiation.</h1>
      </section>

      <div className="grid">
        <div className="col-6">
          <p>
            Plato Design accepts a limited number of professional inquiries 
            per cycle. We prioritize projects requiring deep analysis of 
            environmental and operating conditions.
          </p>
          <div className="mt-large">
            <span className="mono">Direct Channel</span>
            <p>institute@plato.design</p>
          </div>
        </div>
        <div className="col-6">
          <form className="contact-form">
            <div className="form-group">
              <label>Origin (Organization / Principal)</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Nature of Environmental Challenge</label>
              <textarea rows={4}></textarea>
            </div>
            <div className="form-group">
              <label>Communication Channel (Email)</label>
              <input type="email" />
            </div>
            <button type="submit" className="submit-btn">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}
