import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DrawerControls from './components/DrawerControls';
import ModelViewer from './components/ModelViewer';
import UploadModel from './components/UploadModel';
import ModelDetailPage from './components/ModelDetailPage'; // Model detail page import

function App() {
  const [models, setModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showUpload, setShowUpload] = useState(false); // For showing the upload modal

  useEffect(() => {
    axios.get('http://localhost:5000/models')
      .then(response => {
        setModels(response.data);
      })
      .catch(error => console.error('Error fetching models:', error));
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Header Ribbon */}
        <div className="header-ribbon">
          <button className="drawer-toggle" onClick={() => setDrawerOpen(!drawerOpen)}>
            {drawerOpen ? <i className="fa fa-times" /> : <i className="fa fa-bars" />}
          </button>
          <div className="header-title">HF-3D Max</div>
          <button className="upload-btn" onClick={() => setShowUpload(true)}>
            <i className="fa fa-upload" />
          </button>
        </div>

        {/* Drawer */}
        <DrawerControls
          drawerOpen={drawerOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          models={models}
          closeDrawer={() => setDrawerOpen(false)}
        />

        {/* Landing Page Content */}
        <div className="landing-page">
          <div className="video-row">
            <div className="video-wrapper">
              <video src="/video1.mp4" autoPlay loop muted playsInline />
            </div>
            <div className="video-wrapper">
              <video src="/video2.mp4" autoPlay loop muted playsInline />
            </div>
            <div className="video-wrapper">
              <video src="/video3.mp4" autoPlay loop muted playsInline />
            </div>
          </div>
          <h2 style={{ fontFamily: 'Poppins', fontSize: '1.5rem', color: '#fff' }}>
            Welcome to HF-3D Max! Browse and view 3D models.
          </h2>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/model/:id" element={<ModelDetailPage models={models} />} />
        </Routes>

        {/* Upload Modal */}
        {showUpload && (
          <div className="upload-modal-overlay">
            <div className="upload-modal">
              <h3>Upload a Model</h3>
              <UploadModel onUpload={() => setShowUpload(false)} />
              <button
                style={{
                  marginTop: '10px',
                  padding: '8px 16px',
                  background: '#555',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => setShowUpload(false)} // Close modal
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <h3 style={{ textAlign: 'center', color: '#fff' }}>Welcome to HF-3D Max</h3>
    </div>
  );
}

export default App;
