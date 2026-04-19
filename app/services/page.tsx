import { SERVICE_ARCHITECTURE } from "@/lib/content";

export const metadata = {
  title: "Services | Plato Design",
  description: "Three-tier service architecture for spatial diagnostic, recomposition, and strategic habitat direction.",
};

export default function Services() {
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
          {SERVICE_ARCHITECTURE.map((service, index) => (
            <div key={index} className="structural-unit">
              <span className="mono">{service.tier}</span>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>{service.title}</h2>
              
              <div className="grid" style={{ borderTop: 'none', paddingTop: 0 }}>
                <div className="col-8">
                  <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{service.description}</p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <span className="mono">Inclusions</span>
                    <p style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>{service.includes}</p>
                  </div>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <span className="mono">Client Deliverable</span>
                    <p style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>{service.output}</p>
                  </div>
                </div>
                
                <div className="col-4 right">
                  <span className="mono">Protocol</span>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>
                    Scope-based engagement / Project-fit review.
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
