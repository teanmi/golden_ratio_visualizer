import { useState } from "react";
import Header from "./Header";
import Visualizer from "./Visualizer";

function App() {
  const [scaleFactor, setScaleFactor] = useState(5);

  return (


    <div>
      <Header scaleFactor={scaleFactor} setScaleFactor={setScaleFactor}/>
      <Visualizer scaleFactor={scaleFactor}/>
      <footer>
        &copy; 2023 Michael Telakowicz
      </footer>
    </div>
  );
}

export default App;
