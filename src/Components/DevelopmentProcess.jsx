import React from "react";

const DevelopmentProcess = ({ steps, heading }) => {
  return (
    <section
      id="workflow_section_two"
      className="workflow-section section-spacing section-inner-spacing"
    >
      <div className="container">
        <div className="section-head-part">
          <h2 className="section-head-title">{heading}</h2>
        </div>

        <div className="store-development-process-main">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`store-development-item ${index % 2 === 1 ? "right" : ""} ${index === 0 ? "align-items-top" : ""} ${index === steps.length - 1 ? "align-items-end" : ""}`}
              >
                {index % 2 === 0 && (
                  <div className="number-main full">
                    <div className="number">{step.number}</div>
                  </div>
                )}
                <div className="text-main">
                  <h5 className="heading">{step.heading}</h5>
                  <p className="text">{step.description}</p>
                </div>
                {index % 2 === 1 && (
                  <div className="number-main full">
                    <div className="number">{step.number}</div>
                  </div>
                )}
              </div>

              {index < steps.length - 1 && (
                <div className="timeline">
                  <div className="timeline-box">
                    <div
                      className={`corner ${index % 2 === 0 ? "top-right" : "right-bottom"}`}
                    ></div>
                  </div>
                  <div className="timeline-box-line">
                    <hr />
                  </div>
                  <div className="timeline-box">
                    <div
                      className={`corner ${index % 2 === 0 ? "left-bottom" : "top-left"}`}
                    ></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
