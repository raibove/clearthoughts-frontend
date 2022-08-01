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
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <div>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path="/" element = {<Home />} />
              <Route path="/why" element={<Why />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/practice" element={<Practice />} />
            </Routes>
          </BrowserRouter>
        </div>

    </div>
  );
}

export default App;