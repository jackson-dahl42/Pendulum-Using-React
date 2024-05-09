import React, { useState } from 'react';
import { Slider } from '@mui/material';
import Canvas from './Canvas';

function App() {
  
  let [gravity, setGravity] = useState(9.8);
  let [damping, setDamping] = useState(0.1);
  let [angle, setAngle] = useState(10);
  let [length, setLength] = useState(10);
  let velocity = 0;
  
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        let acceleration = (-gravity / length) * Math.sin(angle * Math.PI /180) - (damping * velocity)
        velocity += acceleration
        angle += velocity
        const pivotx = 100;
        const pivoty = 20;
        const bobX = pivotx + length * Math.sin(angle * Math.PI / 180);
        const bobY = pivoty + length * Math.cos(angle * Math.PI / 180);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.beginPath();
        ctx.arc(bobX, bobY, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'blue';
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(pivotx, pivoty);
        ctx.lineTo(bobX, bobY);
        ctx.strokeStyle = 'black';
        ctx.stroke();
  };
  return (
    <div>
      Gravity
      <Slider
        aria-labelledby="gravity-slider"
        value={gravity}
        min={0}
        max={20}
        step={0.1}
        onChange={(event, newValue) => setGravity(newValue)}
      />
      Damping
      <Slider
        aria-labelledby="damping-slider"
        value={damping}
        min={0}
        max={0.5}
        step={0.01}
        onChange={(event, newValue) => setDamping(newValue)}
      />
      Angle
      <Slider
        aria-labelledby="angle-slider"
        value={angle}
        min={0}
        max={360}
        step={1}
        onChange={(event, newValue) => setAngle(newValue)}
      />
      Length
      <Slider
        aria-labelledby="length-slider"
        value={length}
        min={0}
        max={100}
        step={1}
        onChange={(event, newValue) => setLength(newValue)}
      />
        <Canvas draw={draw} />
      </div>
  );
}

export default App;
