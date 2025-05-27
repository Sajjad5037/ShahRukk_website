import { useState, useEffect } from "react";

const ModelTrainingAlert = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false); // Hide alert after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    showAlert && (
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#f44336",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
      >
        Model training is in progress...
      </div>
    )
  );
};

export default ModelTrainingAlert;
