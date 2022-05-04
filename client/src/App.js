
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './screens/Home';
import Booking from './screens/booking';
import Register from './screens/Register';
import Login from './screens/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/book/:id" element={<Booking/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
