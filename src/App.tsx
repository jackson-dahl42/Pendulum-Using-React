import Canvas from './Canvas';

let velocity = 0
let angle = 10
let gravity = 9.8
let damping = 0.1
let length = 10

function App() {

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        let acceleration = (-gravity / length) * Math.sin(angle) - (damping * velocity)
        velocity += acceleration
        angle += velocity
        const pivotx = 100;
        const pivoty = 100;
        const bobX = pivotx + length * Math.sin(angle);
        const bobY = pivoty + length * Math.cos(angle);
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
    
        <Canvas draw={draw} />
  );
}

export default App;
