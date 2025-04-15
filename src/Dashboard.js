import React from 'react';

function Dashboard({ onLogout }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Inventory Management Hub</h2>

      {/* Main feature buttons in a 2-row grid */}
      <div style={styles.grid}>
        <button style={styles.button}>Inventory</button>
        <button style={styles.button}>Add Inventory</button>
        <button style={styles.button}>Subtract Inventory</button>
        <button style={styles.button}>Reports</button>
        <button style={styles.button}>Barcode Creator</button>
        <button style={styles.button}>Parent Hub</button>
        <button style={styles.button}>Notifications</button>
      </div>

      {/* Logout button below the grid, centered */}
      <div style={styles.logoutContainer}>
        <button style={styles.logoutButton} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    minHeight: '100vh',
    backgroundColor: '#f7fafc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridAutoRows: 'minmax(60px, auto)',
    gap: '1rem',
    width: '100%',
    maxWidth: '800px',
    marginBottom: '2rem',
  },
  button: {
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: '500',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#3182ce',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  logoutContainer: {
    marginTop: '1rem',
  },
  logoutButton: {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '500',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#e53e3e',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Dashboard;

