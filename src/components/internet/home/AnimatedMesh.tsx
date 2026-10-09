import React from 'react';

interface AnimatedMeshProps {
  withGrid?: boolean;
  className?: string;
}

const AnimatedMesh: React.FC<AnimatedMeshProps> = ({ withGrid = true, className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="bn-mesh" />
      {withGrid && <div className="absolute inset-0 bn-grid-bg opacity-60" />}
    </div>
  );
};

export default AnimatedMesh;
