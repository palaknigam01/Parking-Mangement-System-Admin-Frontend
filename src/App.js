
import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Viewslots from './components/Viewslots';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import Viewfloor from './components/View-floors';
import Addslots from './components/Addslots';
import Addfloors from './components/Addflor';




function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="" element={<Dashboard/>}/>
     <Route path="/slots-lists" element={<Viewslots/>} />
     <Route path="/booking-list" element={<Booking/>} />
     <Route path="/view-flors" element={<Viewfloor/>} />
     <Route path="/add-flors" element={<Addfloors/>}/>
     <Route path="/add-slots" element={<Addslots/>}/>
     <Route path="" element={<Addfloors/>}/>
    </Routes>
    </div>
  );
}


export default App;
