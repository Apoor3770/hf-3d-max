import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const ModelViewerWindow = () => {
  const { id } = useParams(); // Getting the model ID from the URL
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Simulate fetching the model data
    const models = [
      { id: '1', name: 'Model 1', description: 'Description of Model 1', url: '/model1.gltf' },
      { id: '2', name: 'Model 2', description: 'Description of Model 2', url: '/model2.gltf' },
      // Add more models as needed
    ];

    // Find the model based on the id passed via URL params
    const selectedModel = models.find((m) => m.id === id);
    setModel(selectedModel);
  }, [id]);

  if (!model) return <div>Model not found</div>;  // Handle case where model is not found

  return (
    <div className="model-detail-container">
      <div className="model-box">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Model modelUrl={model.url} />
          </Suspense>
        </Canvas>
        <h3>{model.name}</h3>
        <p>{model.description}</p>
      </div>
    </div>
  );
};

// The 3D Model component to render the model
const Model = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} />;
};

export default ModelViewerWindow;
