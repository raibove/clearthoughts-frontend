import logo from './clearthoughts-logo2bg.png';
import './App.css';
import Why from './pages/why/Why';
import Home from './pages/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Practice from './pages/practice/Practice';
import Demo from './pages/demo/Demo';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element = {<Home />} />
              <Route path="/why" element={<Why />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/practice" element={<Practice />} />
            </Routes>
          </BrowserRouter>
          <Footer/>
        </div>

    </div>
  );
}

export default App;