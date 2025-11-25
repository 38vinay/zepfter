import React from 'react';

const Privacy = () => {
  return (
    <div>
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f8f9fa, #e8f4ff)',
          padding: '60px 0',
          marginTop: '100px'
        }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="fw-bold" style={{ color: 'var(--primary-color)' }}>Privacy Policy</h1>
            <p className="text-muted">Last updated: {new Date().getFullYear()}</p>
          </div>

          <div className="mx-auto" style={{ maxWidth: 900 }}>
            <div className="glass-card">
              <section>
                <h5 className="fw-semibold">1. Information We Collect</h5>
                <p className="text-muted">We collect information you provide directly and information collected automatically when you use our services.</p>
              </section>

              <section className="mt-4">
                <h5 className="fw-semibold">2. How We Use Information</h5>
                <p className="text-muted">We use information to provide, maintain, and improve our services, and to communicate with you.</p>
              </section>

              <section className="mt-4">
                <h5 className="fw-semibold">3. Data Security</h5>
                <p className="text-muted">We implement reasonable security measures, but cannot guarantee absolute security. You are responsible for protecting your account credentials.</p>
              </section>

              <section className="mt-4">
                <h5 className="fw-semibold">4. Contact</h5>
                <p className="text-muted">If you have questions about this policy, contact us at support@zepfter.com.</p>
              </section>

              <div className="mt-4 text-end">
                <a href="/contact" className="btn btn-gradient">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
