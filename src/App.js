import { Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Staff from './StaffList/StaffListComponent';
import Department from './Department/Department';
import Salary from './Salary/Salary';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
