import React, { useState, useEffect } from "react";
import { FaBullseye, FaHandshake, FaUsers, FaLightbulb, FaGraduationCap, FaAward, FaChartLine, FaHeart, FaRocket, FaShieldAlt } from "react-icons/fa";

const About = () => {
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    satisfaction: 0
  });

  // Animated counters
  useEffect(() => {
    const targets = {
      students: 5000,
      courses: 50,
      instructors: 150,
      satisfaction: 98
    };

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        students: Math.floor(targets.students * progress),
        courses: Math.floor(targets.courses * progress),
        instructors: Math.floor(targets.instructors * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const achievements = [
    { icon: <FaUsers size={40} />, number: counters.students, label: "Students Trained", suffix: "+" },
    { icon: <FaGraduationCap size={40} />, number: counters.courses, label: "Courses Offered", suffix: "+" },
    { icon: <FaAward size={40} />, number: counters.instructors, label: "Expert Instructors", suffix: "+" },
    { icon: <FaHeart size={40} />, number: counters.satisfaction, label: "Satisfaction Rate", suffix: "%" }
  ];

  const values = [
    {
      icon: <FaShieldAlt size={50} />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty, transparency, and ethical practices in all our training programs.",
      color: "#667eea"
    },
    {
      icon: <FaLightbulb size={50} />,
      title: "Innovation",
      description: "We continuously update our curriculum with the latest industry trends and cutting-edge technologies.",
      color: "#f093fb"
    },
    {
      icon: <FaAward size={50} />,
      title: "Excellence",
      description: "We are committed to delivering exceptional quality education that transforms careers and lives.",
      color: "#4facfe"
    },
    {
      icon: <FaRocket size={50} />,
      title: "Growth",
      description: "We foster an environment that encourages continuous learning and professional development.",
      color: "#43e97b"
    }
  ];

  const timeline = [
    { year: "2015", title: "Founded", description: "ZEPFTER was established with a vision to transform technical education" },
    { year: "2017", title: "1000+ Students", description: "Reached our first major milestone of training 1000 students" },
    { year: "2019", title: "Multiple Branches", description: "Expanded to 5 locations across major cities" },
    { year: "2021", title: "Industry Partnerships", description: "Partnered with 50+ leading healthcare and tech companies" },
    { year: "2023", title: "5000+ Alumni", description: "Proud to have trained 5000+ successful professionals" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section text-center position-relative" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '120px 0 80px'
      }}>
        <div className="container position-relative" data-aos="fade-up">
          <h1 className="fw-bold display-3 mb-4">About ZEPFTER</h1>
          <p className="fs-4 mb-0" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Empowering individuals with industry-ready Medical, Clinical, and IT training programs 
            that bridge the gap between education and career success.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="position-absolute" style={{ bottom: 0, left: 0, right: 0 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="row g-4">
            {achievements.map((item, idx) => (
              <div className="col-lg-3 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="glass-card text-center p-4 h-100">
                  <div className="text-primary mb-3">{item.icon}</div>
                  <div className="display-4 fw-bold text-primary mb-2">
                    {item.number}{item.suffix}
                  </div>
                  <div className="text-muted fw-semibold">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section container" data-aos="fade-up">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Who We Are"
                className="img-fluid rounded-4 shadow-lg"
              />
              <div className="position-absolute bottom-0 start-0 p-4">
                <div className="glass-card p-4">
                  <div className="d-flex align-items-center gap-3">
                    <FaChartLine size={40} className="text-primary" />
                    <div>
                      <div className="fs-3 fw-bold text-white">95%</div>
                      <div className="text-white-50">Placement Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="fw-bold display-5 mb-4">Who We Are</h2>
            <p className="text-muted fs-5 mb-4 lh-lg">
              ZEPFTER is a leading professional training institution offering a comprehensive range 
              of <strong>Medical, Clinical, and IT courses</strong> designed for real-world success. 
              We collaborate with industry experts, healthcare professionals, and technology specialists 
              to ensure that every learner receives world-class training.
            </p>
            <p className="text-muted fs-5 mb-4 lh-lg">
              Our mission goes beyond education — we transform careers through practical, hands-on 
              learning experiences that prepare you for the challenges of modern industries.
            </p>
            
            <div className="row g-3 mt-4">
              <div className="col-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3">
                    <FaBullseye className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="fw-bold">Industry-Focused</div>
                    <div className="small text-muted">Real-world curriculum</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle bg-success bg-opacity-10 p-3">
                    <FaHandshake className="text-success" size={24} />
                  </div>
                  <div>
                    <div className="fw-bold">100% Support</div>
                    <div className="small text-muted">Placement assistance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-light">
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3">What We Do</h2>
            <p className="text-muted fs-5">We provide comprehensive training solutions across multiple domains</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="0">
              <div className="glass-card text-center p-5 h-100">
                <div className="mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                    style={{
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)'
                    }}>
                    <FaGraduationCap size={50} className="text-white" />
                  </div>
                </div>
                <h4 className="fw-bold mb-3">Professional Training</h4>
                <p className="text-muted">
                  Career-oriented training programs in Medical, Clinical, and IT fields with 
                  industry-recognized certifications.
                </p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="glass-card text-center p-5 h-100">
                <div className="mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                    style={{
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(135deg, #f093fb, #f5576c)'
                    }}>
                    <FaLightbulb size={50} className="text-white" />
                  </div>
                </div>
                <h4 className="fw-bold mb-3">Skill Development</h4>
                <p className="text-muted">
                  Build real-world skills through hands-on experience, live projects, and 
                  practical workshops led by industry experts.
                </p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="glass-card text-center p-5 h-100">
                <div className="mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                    style={{
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(135deg, #4facfe, #00f2fe)'
                    }}>
                    <FaUsers size={50} className="text-white" />
                  </div>
                </div>
                <h4 className="fw-bold mb-3">Career Guidance</h4>
                <p className="text-muted">
                  Comprehensive placement assistance, interview training, resume building, and 
                  long-term career mentoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">Our Core Values</h2>
          <p className="text-muted fs-5">The principles that guide everything we do</p>
        </div>

        <div className="row g-4">
          {values.map((value, idx) => (
            <div className="col-lg-3 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="glass-card text-center p-4 h-100 position-relative overflow-hidden">
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                  style={{ background: value.color }}
                />
                <div className="position-relative">
                  <div className="mb-3" style={{ color: value.color }}>
                    {value.icon}
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: value.color }}>
                    {value.title}
                  </h4>
                  <p className="text-muted">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-light">
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3">Our Journey</h2>
            <p className="text-muted fs-5">Milestones that shaped our success story</p>
          </div>

          <div className="position-relative">
            {/* Timeline Line */}
            <div 
              className="position-absolute start-50 translate-middle-x bg-primary d-none d-md-block"
              style={{ width: '4px', height: '100%', top: 0 }}
            />

            {timeline.map((item, idx) => (
              <div 
                className="row mb-5 position-relative" 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className={`col-md-6 ${idx % 2 === 0 ? 'text-md-end' : 'order-md-2'}`}>
                  <div className="glass-card p-4">
                    <div className="badge bg-primary mb-3 px-3 py-2">{item.year}</div>
                    <h4 className="fw-bold mb-2">{item.title}</h4>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="col-md-6 d-none d-md-block">
                  <div className="position-absolute start-50 translate-middle" style={{ top: '30px' }}>
                    <div 
                      className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                      style={{ width: '40px', height: '40px', border: '4px solid white' }}
                    >
                      <div className="bg-white rounded-circle" style={{ width: '12px', height: '12px' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center position-relative" style={{
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        color: 'white'
      }}>
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold display-5 mb-4">Ready to Start Your Journey?</h2>
          <p className="fs-5 mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Join thousands of successful professionals who transformed their careers with ZEPFTER
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button className="btn btn-light btn-lg px-5 py-3 fw-semibold">
              Explore Courses
            </button>
            <button className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;