import React, { useState, useEffect, useRef } from "react";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    Days: 2,
    Hours: 0,
    Minutes: 0,
    Seconds: 0
  });
  const targetDateRef = useRef();

  useEffect(() => {
    // Check localStorage for existing target date
    const storedTarget = localStorage.getItem('countdownTarget');
    const initialTarget = storedTarget ? parseInt(storedTarget) : null;

    const setNewTarget = () => {
      const now = new Date().getTime();
      const newTarget = now + 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
      targetDateRef.current = newTarget;
      localStorage.setItem('countdownTarget', newTarget.toString());
    };

    if (initialTarget && initialTarget > Date.now()) {
      targetDateRef.current = initialTarget;
    } else {
      setNewTarget();
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = targetDateRef.current - now;

      if (distance <= 0) {
        setNewTarget();
        setTimeRemaining({ Days: 2, Hours: 0, Minutes: 0, Seconds: 0 });
        return;
      }

      const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const Hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const Minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const Seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ Days, Hours, Minutes, Seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center limited_time_offer" style={{ marginTop: "12px" }}>
      <h2 className="section-head-title title">
        <span className="pt-5">Limited Time Offer</span>
      </h2>
      <p className="mb-4 text-muted">
        Don’t miss out on this exclusive deal! The offer expires soon.
      </p>
      <div className="d-flex justify-content-start w-100">
        {Object.entries(timeRemaining).map(([unit, value]) => (
          <div
            key={unit}
            className="text-center mx-2 p-3"
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              minWidth: "80px",
              textAlign: "center",
            }}
          >
            <div
              className="display-4 fw-bold"
              style={{ color: "#1d4ed8", fontSize: "2.5rem" }}
            >
              {value.toString().padStart(2, '0')}
            </div>
            <div
              className="text-uppercase text-muted"
              style={{ fontSize: "1rem", fontWeight: 800, color: "#330c79" }}
            >
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
