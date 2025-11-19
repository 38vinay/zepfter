import React from "react";

const Contact = () => {
  return (
    <section className="section container" data-aos="fade-up">
      <h2 className="fw-bold mb-4">Contact Us</h2>

      <form className="row g-3">
        <div className="col-md-6">
          <input type="text" placeholder="Name" className="form-control" />
        </div>
        <div className="col-md-6">
          <input type="email" placeholder="Email" className="form-control" />
        </div>
        <div className="col-12">
          <textarea className="form-control" rows="4" placeholder="Message"></textarea>
        </div>
        <div className="col-12 text-center">
          <button className="btn btn-gradient">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
