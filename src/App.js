import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Staff from './StaffList/StaffListComponent';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/footer';


function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
