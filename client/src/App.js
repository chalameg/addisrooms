
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
