import React from "react";

export const Features = (props) => {
  const styles = {
    featuresSection: {
      padding: '80px 0',
      background: '#f8f9fa',
      position: 'relative',
    },
    sectionTitle: {
      marginBottom: '60px',
    },
    heading: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '16px',
      color: '#6c757d',
      marginTop: '15px',
      maxWidth: '700px',
      margin: '0 auto',
    },
    featureCol: {
      padding: '0 15px',
      marginBottom: '30px',
      display: 'flex',
    },
    featureCard: {
      padding: '40px 30px',
      borderRadius: '15px',
      background: '#fff',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      height: '100%',
      border: 'none',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    },
    featureCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
    },
    iconWrapper: {
      width: '80px',
      height: '80px',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, #FFA500 0%, #FF6B35 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '25px',
      transition: 'all 0.4s ease',
      boxShadow: '0 8px 20px rgba(255, 165, 0, 0.3)',
    },
    iconWrapperHover: {
      transform: 'rotate(-5deg) scale(1.1)',
      boxShadow: '0 12px 30px rgba(255, 107, 53, 0.4)',
    },
    icon: {
      fontSize: '40px',
      color: '#fff',
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '15px',
      transition: 'color 0.3s ease',
    },
    featureTitleHover: {
      color: '#FF6B35',
    },
    featureText: {
      fontSize: '15px',
      color: '#6c757d',
      lineHeight: '1.7',
      margin: '0',
    },
    loadingContainer: {
      padding: '100px 0',
      fontSize: '18px',
      color: '#6c757d',
      width: '100%',
    },
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div id="features" className="text-center" style={styles.featuresSection}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1" style={styles.sectionTitle}>
          <h2 style={styles.heading}>Why Choose Us?</h2>
          <p style={styles.subtitle}>
            Trusted by 1000+ businesses across India for excellence in hydraulic solutions
          </p>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div 
                key={`${d.title}-${i}`} 
                className="col-xs-6 col-md-3"
                style={styles.featureCol}
              >
                <div
                  style={{
                    ...styles.featureCard,
                    ...(hoveredIndex === i ? styles.featureCardHover : {}),
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    style={{
                      ...styles.iconWrapper,
                      ...(hoveredIndex === i ? styles.iconWrapperHover : {}),
                    }}
                  >
                    <i className={d.icon} style={styles.icon}></i>
                  </div>
                  <h3 
                    style={{
                      ...styles.featureTitle,
                      ...(hoveredIndex === i ? styles.featureTitleHover : {}),
                    }}
                  >
                    {d.title}
                  </h3>
                  <p style={styles.featureText}>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            <div style={styles.loadingContainer}>
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};