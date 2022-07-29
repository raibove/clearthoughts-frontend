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

function App() {

  return (
    <div>
        <div className="App">
          <div className='header'>
            <img src={logo} className='logo'/>
            {localStorage.getItem('userName') && <p className='username'>{localStorage.getItem('userName')}</p>}
          </div>

          <BrowserRouter>
            <Routes>
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