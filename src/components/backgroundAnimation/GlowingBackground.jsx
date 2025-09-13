import React from 'react';

export default function GlowingBackground({ zIndex = -1 }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: zIndex, // default to -1 so glows behind stars (z=0)
        background: 'radial-gradient(circle, rgba(159,87,255,0.7) 100%, rgba(59,30,76,0.2) 70%, rgba(34,14,54,0.2) 100%)',
        borderRadius: '90%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }}
    />
  );
}
