import './App.css';
import DesignerToolContainer from './components/DesignerToolContainer';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Demo from "./pages/Demo"
import Specs from "./pages/Specs"
import ErrorPage from "./pages/ErrorPage"

import * as React from "react";

function App() {
  
  return (
    <div className="App">
      <Router>
        <DesignerToolContainer />
        <nav>
         <Link to="/">demo</Link>
         <Link to="/specs">specs</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Demo />}>
          </Route>
          
          <Route path="/specs" element={<Specs />}>
          </Route>

          <Route path="*" element={<ErrorPage />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

// function Demo() {
//   return (
//     <div>
//       <main>
//         <h2>Welcome to the demo page!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/specs">specs</Link>
//       </nav>
//     </div>
//   );
// }

// function Specs() {
//   return (
//     <div>
//       <main>
//         <h2>Welcome to the Specs page!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/">demo</Link>
//       </nav>
//     </div>
//   );
// }

export default App;