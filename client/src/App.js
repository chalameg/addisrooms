
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './screens/Home';
import Booking from './screens/booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/booking/:id" element={<Booking/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
