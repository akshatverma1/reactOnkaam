import React from "react";
import Bottomnavfunction from "./Bottom_nav";
const ComingSoon = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Exciting Features Coming Soon!</h1>
        <p style={styles.subtitle}>
          Stay tuned for amazing updates and new features.
        </p>
      </div>

      <div style={styles.featureSection}>
        <h2 style={styles.sectionTitle}>What's Next?</h2>
        <ul style={styles.featureList}>
          <li style={styles.featureItem}>🔧 Feature 1: Enhanced User Dashboard</li>
          <li style={styles.featureItem}>📱 Feature 2: Booking History</li>
          <li style={styles.featureItem}>🔍 Feature 3: Advanced Search Functionality</li>
          <li style={styles.featureItem}>🚀 Feature 4: Performance Improvements</li>
        </ul>
      </div>

      <div style={styles.footer}>
        <p>Thanks for being part of our journey!</p>
        <p style={styles.date}>Expected Release: December 2024</p>
      </div>
      <Bottomnavfunction></Bottomnavfunction>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
  },
  featureSection: {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  featureList: {
    listStyleType: "none",
    padding: 0,
    fontSize: "1.1rem",
    color: "#555",
  },
  featureItem: {
    marginBottom: "15px",
    fontSize: "1.2rem",
  },
  footer: {
    textAlign: "center",
    fontSize: "1.1rem",
    color: "#555",
  },
  date: {
    marginTop: "10px",
    fontSize: "1rem",
    color: "#888",
  },
};

export default ComingSoon;
