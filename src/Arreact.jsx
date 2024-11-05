import React from 'react';

const ARFurniture = () => {
  return (
    <div style={styles.container}>
      <model-viewer
        src="/assets/furniture-model.glb"  // Path to your 3D model
        ar
        ar-modes="scene-viewer webxr quick-look"
        environment-image="neutral"
        camera-controls
        auto-rotate
        style={styles.modelViewer}
      >
        <button slot="ar-button" style={styles.arButton}>
          View in Your Space
        </button>
      </model-viewer>
    </div>
  );
};

// Styling for the AR viewer and button
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  modelViewer: {
    width: '100%',
    maxWidth: '600px',
    height: '500px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  arButton: {
    padding: '10px 20px',
    backgroundColor: '#6200EE',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ARFurniture;
