import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to get the model ID
import ModelViewer from './ModelViewer';  // Make sure the viewer is imported

function ModelDetailPage({ models }) {
  const { id } = useParams();  // Get model ID from the URL
  const model = models.find(model => model.id === id);  // Find the model by ID

  if (!model) return <div>Model not found</div>;  // Handle model not found case

  return (
    <div className="model-detail-container">
      <div className="model-box">
        <ModelViewer modelUrl={model.url} /> {/* Display 3D model */}
        <h3>{model.name}</h3>  {/* Display model name */}
        <p>{model.description}</p>  {/* Display model description */}
      </div>
    </div>
  );
}

export default ModelDetailPage;
