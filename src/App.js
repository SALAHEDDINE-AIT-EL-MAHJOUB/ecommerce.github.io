import React from "react";
import Nav from './comp/nav';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>  {/* Utilisation de BrowserRouter sous le nom d'alias Router */}
      <Nav />
      {/* Vous pouvez ajouter des Routes ici si nécessaire */}
    </Router>
  );
}

export default App;
