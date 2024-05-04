import './App.css';
import Portfolio from './components/Portfolio';
import {projects} from './projects';

function App() {
  return (
    <div className="container">
      <Portfolio projects={projects}/>
    </div>

  );
}

export default App;
