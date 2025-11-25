import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight,  } from "react-icons/fa";

const PageCarousel = ({ slides, autoPlay = true, autoPlayDelay = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile to change layout (show single testimonial per slide on small screens)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // If the carousel is used for testimonials, group them into pairs on desktop,
  // but show single per slide on mobile for better readability.
  const isTestimonialMode = slides[0]?.type === 'testimonial';
  const groupedSlides = (() => {
    if (!isTestimonialMode) return slides.map((s) => [s]);
    if (isMobile) return slides.map((s) => [s]);
    // desktop: group into pairs
    return slides.reduce((acc, cur, idx) => {
      if (idx % 2 === 0) acc.push([cur]);
      else acc[acc.length - 1].push(cur);
      return acc;
    }, []);
  })();

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % groupedSlides.length);
    }, autoPlayDelay);

    return () => clearInterval(timer);
  }, [isAutoPlay, groupedSlides.length, autoPlayDelay]);

  // If groupedSlides length changes (e.g., responsive change), ensure currentSlide is valid
  // Use functional update so we don't reference `currentSlide` in the dependency array
  useEffect(() => {
    setCurrentSlide((prev) => (prev >= groupedSlides.length ? 0 : prev));
  }, [groupedSlides.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + groupedSlides.length) % groupedSlides.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedSlides.length);
    setIsAutoPlay(false);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      setIsAutoPlay(true);
    }
  };

  const slide = groupedSlides[currentSlide];
  const firstSlideColor = slides[0]?.color || '#1E3679';

  return (
    <section 
      className="section page-carousel-section"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa, #e8f4ff)',
        position: 'relative',
        padding: '80px 0'
      }}
    >
      <div className="container">
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fw-bold display-5 mb-3" style={{ color: '#1E3679' }}>
            {slide[0]?.title}
          </h2>
          <p className="text-muted fs-5">{slide[0]?.subtitle}</p>
        </motion.div>

        {/* Main Carousel Container */}
        <motion.div
          className="position-relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slides Container */}
          <div 
            className="position-relative overflow-hidden"
            style={{
              perspective: '1000px',
              minHeight: '450px'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100, rotateY: 20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -20 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%'
                }}
              >
                {isTestimonialMode ? (
                  // Two testimonial cards per slide (or one if odd)
                  <div
                    className="mx-auto"
                    style={{
                      maxWidth: '1200px',
                      paddingBottom: '40px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        gap: '30px',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        flexWrap: 'wrap'
                      }}
                    >
                      {slide.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="glass-card text-center"
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(15px)',
                            borderRadius: '25px',
                            padding: isMobile ? '24px' : '40px',
                            border: '1px solid rgba(30, 54, 121, 0.1)',
                            position: 'relative',
                            overflow: 'hidden',
                            flex: isMobile ? '0 0 100%' : '0 0 48%',
                            minWidth: isMobile ? '100%' : '280px'
                          }}
                          whileHover={{
                            y: -10,
                            boxShadow: '0 30px 60px rgba(30, 54, 121, 0.15)',
                            transition: { duration: 0.3 }
                          }}
                        >
                          <motion.img
                            src={item.image}
                            alt={item.name}
                            className="testimonial-img"
                            style={{
                              width: isMobile ? '80px' : '100px',
                              height: isMobile ? '80px' : '100px',
                              objectFit: 'cover',
                              borderRadius: '50%',
                              border: `4px solid ${item.color || '#FBD21A'}`,
                              boxShadow: '0 8px 20px rgba(30, 54, 121, 0.15)',
                              marginBottom: isMobile ? '12px' : '20px'
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          />

                          <h5 className="fw-bold mt-3" style={{ color: item.color || '#1E3679', fontSize: isMobile ? '1rem' : undefined }}>
                            {item.name}
                          </h5>
                          <p className="text-muted mb-2" style={{ fontSize: isMobile ? '0.85rem' : '0.9rem' }}>{item.role}</p>

                          <div className="text-warning mb-3" style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>
                            {[...Array(5)].map((_, i) => (
                              <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}>⭐</motion.span>
                            ))}
                          </div>

                          <p className="testimonial-text" style={{ fontStyle: 'italic', marginTop: '12px', color: '#333', lineHeight: '1.6', fontSize: isMobile ? '0.95rem' : '1rem' }}>
                            "{item.text}"
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Page/Content Card
                  <div 
                    className="mx-auto"
                    style={{
                      maxWidth: '900px',
                      paddingBottom: '40px'
                    }}
                  >
                    <motion.div
                      className="glass-card"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(15px)',
                        borderRadius: '25px',
                        padding: '50px',
                        border: '1px solid rgba(30, 54, 121, 0.1)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      whileHover={{ 
                        y: -10,
                        boxShadow: '0 30px 60px rgba(30, 54, 121, 0.15)',
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Icon or Image */}
                      {slide.icon && (
                        <motion.div 
                          style={{ fontSize: '3rem', marginBottom: '20px', color: slide.color }}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          {slide.icon}
                        </motion.div>
                      )}

                      {slide.heroImage && (
                        <motion.img 
                          src={slide.heroImage} 
                          alt={slide.title}
                          style={{
                            width: '100%',
                            height: '250px',
                            objectFit: 'cover',
                            borderRadius: '15px',
                            marginBottom: '30px'
                          }}
                          whileHover={{ scale: 1.05 }}
                        />
                      )}

                      {/* Content */}
                      <h3 
                        className="fw-bold mb-3"
                        style={{ 
                          color: slide.color || '#1E3679',
                          fontSize: '1.8rem'
                        }}
                      >
                        {slide.contentTitle}
                      </h3>

                      <p 
                        style={{
                          color: '#555',
                          lineHeight: '1.8',
                          fontSize: '1rem'
                        }}
                      >
                        {slide.content}
                      </p>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrevious}
            className="carousel-control-btn carousel-control-prev"
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '50px',
              height: '50px',
              background: 'rgba(30, 54, 121, 0.4)',
              backdropFilter: 'blur(10px)',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            whileHover={{ 
              background: firstSlideColor,
              scale: 1.1
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft size={20} />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="carousel-control-btn carousel-control-next"
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '50px',
              height: '50px',
              background: 'rgba(30, 54, 121, 0.4)',
              backdropFilter: 'blur(10px)',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            whileHover={{ 
              background: firstSlideColor,
              scale: 1.1
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight size={20} />
          </motion.button>

          {/* Responsive - Hide buttons on mobile */}
          <style>{`
            @media (max-width: 768px) {
              .carousel-control-btn {
                display: none !important;
              }
            }
          `}</style>
        </motion.div>

        {/* Dot Indicators */}
        <div 
          className="d-flex justify-content-center gap-2 mt-5"
          style={{ position: 'relative', zIndex: 5 }}
        >
          {groupedSlides.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleDotClick(idx)}
              style={{
                background: idx === currentSlide ? firstSlideColor : 'rgba(30, 54, 121, 0.3)',
                border: 'none',
                width: idx === currentSlide ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}
              whileHover={{
                background: firstSlideColor
              }}
              animate={{
                width: idx === currentSlide ? '32px' : '10px'
              }}
              transition={{
                duration: 0.3
              }}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div 
          className="text-center mt-4"
          style={{
            color: firstSlideColor,
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '1px'
          }}
        >
          {currentSlide + 1} / {groupedSlides.length}
        </div>
      </div>
    </section>
  );
};

export default PageCarousel;
