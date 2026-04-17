import { SERVICES } from "@/lib/content";

export const metadata = {
  title: "Services | Plato Design",
  description: "The three-tier service architecture: Reading, Recomposition, and Direction.",
};

export default function Services() {
  return (
    <div className="services-container">
      <section className="page-intro">
        <span className="mono">0.2 / Offer Architecture</span>
        <h1 className="page-title">Structural Redesign Services.</h1>
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
                  <span className="mono">Engagement Logic</span>
                  <p style={{ fontSize: '1.1rem', marginBottom: '3rem' }}>{service.for}</p>
                  
                  <div className="grid" style={{ gap: '2rem' }}>
                    <div className="col-6">
                      <span className="mono">Inclusions</span>
                      <p style={{ fontSize: '0.9rem' }}>{service.includes}</p>
                    </div>
                    <div className="col-6">
                      <span className="mono">Deliverable</span>
                      <p style={{ fontSize: '0.9rem' }}>{service.produces}</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-4 right">
                  <span className="mono">Protocol</span>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>{service.engagement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
