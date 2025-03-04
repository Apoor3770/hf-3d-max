import React, { useState } from 'react';
import axios from 'axios';

const UploadModel = ({ onUpload }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !file) {
      return alert('Please fill all fields and select a file.');
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('modelFile', file);

      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      onUpload(response.data); // Callback to close modal or update UI after upload
      setName('');
      setDescription('');
      setFile(null);
      e.target.reset();
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload model.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="file"
          accept=".gltf,.glb"
          onChange={handleFileChange}
          required
          style={{ width: '100%', padding: '10px', border: 'none' }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          padding: '10px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#0056b3'}
        onMouseLeave={e => e.currentTarget.style.background = '#007bff'}
      >
        {loading ? 'Uploading...' : 'Upload Model'}
      </button>
    </form>
  );
};

export default UploadModel;
