import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WApp from "../src/Images/WApp.jpeg";
import oyo from "../src/Images/oyo.png";
import nyka from "../src/Images/nyka.jpg";
import fc1 from "../src/Images/fc1.jpeg";
import ama from "../src/Images/ama.jpeg";
import reliance from "../src/Images/reliance.png";
import telegram from "../src/Images/telegram.jpeg";

// add images
const importedImages = [WApp, oyo, nyka, fc1, ama, reliance,telegram];

function GetAppImages() {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  async function fetchApps() {
    try {
      const response = await fetch("https://localhost:44382/api/App/GetAllApps");
      const jsonData = await response.json();
      setApps(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApps();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          textAlign: "center", 
          margin: "20px 0", 
        }}
      >
        <h3>We Value Your Feedback</h3>
        <button
  onClick={() => navigate(`/AddNewReview1`)} 
  style={{
    marginTop: "10px",
    backgroundColor: "#007bff", 
    color: "#fff", 
    border: "none", 
    borderRadius: "9px", 
    padding: "10px 20px", 
    cursor: "pointer", 
    fontSize: "16px", 
  }}
>
  Give Feedback
</button>

      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {apps.map((item, i) => (
          <div
            key={i}
            style={{
              border: "3px solid pink",
              backgroundColor: "lavender",
              color: "brown",
              width: "200px",
              height: "200px", 
              margin: "10px",
              padding: "3px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "4px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column", 
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={importedImages[i % importedImages.length]} 
              alt={item.appName}
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        ))}
      </div>

      <div>
        <button style={{ position: "absolute", top: "20px", left: "40px" }}>
          <Link to="/Navbar">Back</Link>
        </button>
      </div>
    </div>
  );
}

export default GetAppImages;
