import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from "./sections/Project"
import Resume from "./sections/Resume"
import Home from "./sections/Home"


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/personal-website" element={<Home />} />
          <Route path="/personal-website/project" element={<Project />} />
          <Route path="/personal-website/resume" element={<Resume />} />
        </Routes>
      </Router>
  );
}

export default App;
