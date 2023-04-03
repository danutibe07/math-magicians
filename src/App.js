import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Error from './components/Error';

function App() {
  return (
    <div className="math-magician">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/quotes" element={<Quotes />} />
          <Route path="/quotes" element={<Error />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
