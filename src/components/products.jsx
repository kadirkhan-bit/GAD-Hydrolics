import React from "react";

export const Products = (props) => {
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Products</h2>
          <p>
            Comprehensive range of material handling equipment and hydraulic solutions
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-12 col-sm-6 col-md-4">
                  <div className="product-item">
                    <i className={d.icon}></i>
                    <h3>{d.name}</h3>
                    <p className="product-description">{d.description}</p>
                    <div className="product-specs">
                      {d.specifications && Object.entries(d.specifications).map(([key, value], idx) => (
                        <div key={idx} className="spec-item">
                          <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}
                        </div>
                      ))}
                    </div>
                    <button className="btn btn-custom btn-lg">
                      {d.cta || "Learn More"}
                    </button>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};