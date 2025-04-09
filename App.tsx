import React from 'react';
import { Canvas } from '@react-three/fiber/native';

import Horse from './assets/Horse';
const App = () => {
  return (
    <Canvas shadows={true}>
      <ambientLight intensity={Math.PI / 2} />
      <Horse />
    </Canvas>
  );
};

export default App;
