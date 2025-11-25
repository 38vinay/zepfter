import React from 'react';

const Terms = () => {
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
            <h1 className="fw-bold" style={{ color: 'var(--primary-color)' }}>Terms &amp; Conditions</h1>
            <p className="text-muted">Last updated: {new Date().getFullYear()}</p>
          </div>

          <div className="mx-auto" style={{ maxWidth: 900 }}>
            <div className="glass-card">
              <section>
                <h5 className="fw-semibold">1. Acceptance of Terms</h5>
                <p className="text-muted">By accessing and using this website, you accept and agree to be bound by these Terms &amp; Conditions.</p>
              </section>

              <section className="mt-4">
                <h5 className="fw-semibold">2. Use of Content</h5>
                <p className="text-muted">All content provided on this site is for informational purposes. You agree not to reproduce or redistribute content without permission.</p>
              </section>

              <section className="mt-4">
                <h5 className="fw-semibold">3. Limitation of Liability</h5>
                <p className="text-muted">Zepfter is not liable for any direct or indirect damages arising from the use of this website or the information contained herein.</p>
              </section>

              <section className="mt-4">
                <h5 className="fw-semibold">4. Changes</h5>
                <p className="text-muted">We may update these terms from time to time. Continued use of the site constitutes acceptance of the updated terms.</p>
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

export default Terms;
