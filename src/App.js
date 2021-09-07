import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Pages/Main';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />,
      <Main />,
      <Footer />
    </Router>

  );
}

export default App;
