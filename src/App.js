import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Staff from './StaffList/StaffListComponent';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
