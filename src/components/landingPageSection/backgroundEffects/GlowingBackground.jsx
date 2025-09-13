import React from 'react';

export default function GlowingBackground({
  zIndex = 0,
  size = 300,
  opacity = 0.6,
  color = 'rgba(159,87,255,0.7)',
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
        zIndex: zIndex,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: opacity,
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }}
    />
  );
}
