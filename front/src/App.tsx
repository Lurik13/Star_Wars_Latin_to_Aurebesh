import StarsBackground from './StarsBackground'
import Hologram from './Hologram'

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <StarsBackground />
      </div>
      <div className="absolute inset-0 z-10">
        <Hologram />
      </div>
    </div>
  );
}

export default App;
