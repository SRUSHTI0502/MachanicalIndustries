import React from "react";

export default function HomePage() {
    return (
        <div style={pageStyle}>
            <header style={headerStyle}>
                <h1>🔧 Welcome to Gondya's Mechanical Industries</h1>
                <p>Leading the way in industrial solutions and innovations.</p>
            </header>

           

            <section style={sectionStyle}>
                <h2>⚙️ Our Services</h2>
                <ul>
                    <li>Custom Industrial Machinery</li>
                    <li>Precision Engineering</li>
                    <li>Metal Fabrication</li>
                    <li>Maintenance & Repairs</li>
                </ul>
            </section>

            <section style={sectionStyle}>
                <h2>📞 Contact Us</h2>
                <p>Email: contact@Gondya's mechanical.com</p>
                <p>Phone: +1 234 567 890</p>
            </section>
        </div>
    );
}

const pageStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
};

const headerStyle = {
    backgroundColor: "#222",
    color: "white",
    padding: "40px",
    borderRadius: "10px",
};

const sectionStyle = {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
};
