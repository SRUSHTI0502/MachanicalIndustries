import React from "react";

export default function About() {
    return (

        
        <div style={containerStyle}>
            <h1 style={headingStyle}>About Us</h1>
            <p style={textStyle}>
                Welcome to <strong>XYZ Mechanical Industries</strong>, a leader in innovative
                engineering and industrial solutions. With decades of experience, we provide
                high-quality mechanical services, cutting-edge technology, and sustainable
                manufacturing processes.
            </p>
            
            
          

            <h2 style={subHeadingStyle}>Why Choose Us?</h2>
            <ul style={listStyle}>
                <li>✅ Advanced Industrial Technology</li>
                <li>✅ Skilled & Experienced Professionals</li>
                <li>✅ High-Quality Manufacturing Standards</li>
                <li>✅ Customer-Centric Approach</li>
                <li>✅ Sustainable & Eco-Friendly Practices</li>
            </ul>
        </div>
    );
}

const containerStyle = {
    padding: "40px",
    maxWidth: "800px",
    margin: "auto",
    textAlign: "center",
};

const headingStyle = {
    fontSize: "32px",
    marginBottom: "20px",
};

const subHeadingStyle = {
    fontSize: "24px",
    marginTop: "30px",
    color: "#444",
};

const textStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#666",
};

const listStyle = {
    textAlign: "left",
    fontSize: "18px",
    color: "#444",
    margin: "20px auto",
    maxWidth: "600px",
};

