import React from "react";

function App() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem", backgroundColor: "#f7fafc" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
        Inventory Management Hub
      </h1>
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", maxWidth: "1000px", margin: "0 auto" }}>
        {[
          "Inventory",
          "Add Inventory",
          "Subtract Inventory",
          "Reports",
          "Barcode Creator",
          "Parent Hub",
          "Notifications",
        ].map((label) => (
          <button key={label} style={{ padding: "1rem", fontSize: "1rem", width: "100%" }}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

