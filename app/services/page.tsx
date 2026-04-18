import { SERVICES } from "@/lib/content";

export const metadata = {
  title: "Services | Plato Design",
  description: "Offer architecture for environmental diagnostic, recomposition, and strategic habitat direction.",
};

export default function ServicesPage() {
  return (
    <div className="services-container">
      <section className="page-intro">
        <span className="mono">0.2 / Offer Architecture</span>
        <h1 className="page-title">Service Structures.</h1>
        <p>
          Plato Design provides an integrated path from diagnostic observation 
          to strategic environmental stewardship.
        </p>
      </section>

      <div className="grid">
        <div className="col-12">
          {SERVICES.map((service, index) => (
            <div key={index} className="structural-unit">
              <span className="mono">Tier 0{index + 1}</span>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>{service.title}</h2>
              
              <div className="grid" style={{ borderTop: 'none', paddingTop: 0 }}>
                <div className="col-8">
                  <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{service.description}</p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <span className="mono">Engagement Scope</span>
                    <p style={{ fontSize: '0.9rem' }}>{service.inclusions}</p>
                  </div>
                  
                  {service.reasons && (
                    <div style={{ marginBottom: '2rem' }}>
                      <span className="mono">Typical Inquiry Reasons</span>
                      <p style={{ fontSize: '0.9rem' }}>{service.reasons}</p>
                    </div>
                  )}

                  {service.output && (
                    <div style={{ marginBottom: '2rem' }}>
                      <span className="mono">Deliverable Output</span>
                      <p style={{ fontSize: '0.9rem' }}>{service.output}</p>
                    </div>
                  )}
                </div>
                
                <div className="col-4 right">
                  <span className="mono">Inquiry Protocol</span>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>
                    {service.engagement || "Scope-based engagement / Project-fit review."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
