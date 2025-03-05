import React from "react";

export default function Product() {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Our Products</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", justifyContent: "center" }}>
                <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
                    <img src="/image/hpump.png" alt="Hydraulic Pump" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px" }} />
                    <h3>Hydraulic Pump</h3>
                    <p>High-performance hydraulic pumps for industrial applications.</p>
                    <button style={{ backgroundColor: "#007bff", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Learn More
                    </button>
                </div>

                <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
                    <img src="/image/gearbox.jpg" alt="Gear Box" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px" }} />
                    <h3>Gear Box</h3>
                    <p>Durable and efficient gearboxes for mechanical industries.</p>
                    <button style={{ backgroundColor: "#007bff", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Learn More
                    </button>
                </div>

                <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
                    <img src="/image/Industrial Valve.jpg" alt="Industrial Valve" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px" }} />
                    <h3>Industrial Valve</h3>
                    <p>Reliable industrial valves for fluid control systems.</p>
                    <button style={{ backgroundColor: "#007bff", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
