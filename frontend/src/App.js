import './App.css';
import LoginPage from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/Register';
import Dashboard from './components/Dashboard';

export const config = {
  endpoint: "http://localhost:8082/v1"
}

function App() {
  return (
    <div className="App">
        <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />                    
        <Route path="/register" element={<RegisterPage />} />                    
        {/* <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/podcast/:id/edit" element={<EditPodcast />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
