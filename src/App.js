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
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
