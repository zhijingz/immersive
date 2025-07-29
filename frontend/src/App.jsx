// App.jsx
import React, { useState, useRef, useEffect } from 'react';
import Home from './pages/Home.jsx';
import Pond from './pages/Pond.jsx';
import Star from './pages/Star.jsx';
import Fire from './pages/Fire.jsx';
import SceneSection from './pages/SceneSection.jsx';
import { useInView } from 'react-intersection-observer';

export default function App() {

  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      <SceneSection>
        <Home />
      </SceneSection>
      <SceneSection>
        <Pond />
      </SceneSection>
      <SceneSection>
        <Star />
      </SceneSection>
      <SceneSection>
        <Fire />
      </SceneSection>
    </div>
  );
}
