import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage} from "./pages/HomePage/ui/HomePage.tsx";


export function App() {
    return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage/>} />
          </Routes>
      </Router>
  )
}