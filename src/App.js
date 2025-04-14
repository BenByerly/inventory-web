import React, { useState } from 'react';
import LoginPage from './LoginPage'; // Make sure this path is correct

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // State to track login status

  const handleLogin = () => {
    setIsLoggedIn(true);  // Set logged in state to true after successful login
  };

  return (
    <div style={{ minHeight: "100vh", padding: "2rem", backgroundColor: "#f7fafc" }}>
      {!isLoggedIn ? (
        // Render the LoginPage if not logged in
        <LoginPage onLogin={handleLogin} />
      ) : (
        // Render the inventory page once logged in
        <div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
            Inventory Management Hub
          </h1>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              maxWidth: "1000px",
              margin: "0 auto"
            }}
          >
            {[
              "Inventory",
              "Add Inventory",
              "Subtract Inventory",
              "Reports",
              "Barcode Creator",
              "Parent Hub",
              "Notifications"
            ].map((label) => (
              <button key={label} style={{ padding: "1rem", fontSize: "1rem", width: "100%" }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

