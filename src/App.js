import './App.css';
import { Switch, Route } from 'react-router';
import Navbar from './Components/navbar';
import Homepage from './Components/homepage';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </Switch>
    </div>
  );
}

export default App;
