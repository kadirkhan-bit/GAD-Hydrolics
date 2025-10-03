import React from "react";

export const Services = (props) => {
  const styles = {
    servicesSection: {
      padding: '60px 0',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    },
    sectionTitle: {
      marginBottom: '40px',
    },
    heading: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#333',
      marginBottom: '10px',
      position: 'relative',
      display: 'inline-block',
    },
    headingUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: '#5ca9fb',
    },
    subtitle: {
      fontSize: '15px',
      color: '#666',
      marginTop: '15px',
      maxWidth: '600px',
      margin: '15px auto 0',
    },
    serviceCard: {
      background: '#fff',
      padding: '25px 20px',
      marginBottom: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
      transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    },
    serviceCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
    },
    iconWrapper: {
      fontSize: '38px',
      color: '#5ca9fb',
      marginBottom: '15px',
      transition: 'all 0.3s ease',
      display: 'inline-block',
    },
    iconWrapperHover: {
      transform: 'scale(1.1) rotate(5deg)',
      color: '#4a90e2',
    },
    serviceName: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '10px',
      transition: 'color 0.3s ease',
    },
    serviceText: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.6',
      margin: '0',
    },
    decorativeCircle: {
      position: 'absolute',
      top: '-40px',
      right: '-40px',
      width: '120px',
      height: '120px',
      background: 'rgba(92, 169, 251, 0.05)',
      borderRadius: '50%',
      transition: 'all 0.4s ease',
    },
    loadingContainer: {
      padding: '100px 0',
      fontSize: '18px',
      color: '#999',
    },
    spinner: {
      display: 'inline-block',
      width: '40px',
      height: '40px',
      border: '4px solid rgba(92, 169, 251, 0.2)',
      borderTop: '4px solid #5ca9fb',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '15px',
    },
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div id="services" className="text-center" style={styles.servicesSection}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div className="container">
        <div className="section-title" style={styles.sectionTitle}>
          <h2 style={styles.heading}>
            Our Services
            <span style={styles.headingUnderline}></span>
          </h2>
          <p style={styles.subtitle}>
            Comprehensive support solutions to keep your operations running smoothly
          </p>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6" style={{ display: 'flex' }}>
                <div
                  style={{
                    ...styles.serviceCard,
                    ...(hoveredIndex === i ? styles.serviceCardHover : {}),
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    style={{
                      ...styles.decorativeCircle,
                      ...(hoveredIndex === i ? { top: '-30px', right: '-30px', background: 'rgba(92, 169, 251, 0.1)' } : {}),
                    }}
                  ></div>
                  <i
                    className={d.icon}
                    style={{
                      ...styles.iconWrapper,
                      ...(hoveredIndex === i ? styles.iconWrapperHover : {}),
                    }}
                  ></i>
                  <div className="service-desc" style={{ flex: '1' }}>
                    <h3 style={styles.serviceName}>{d.name}</h3>
                    <p style={styles.serviceText}>{d.text}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={styles.loadingContainer}>
              <div style={styles.spinner}></div>
              <p>Loading services...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};