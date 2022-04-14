import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Staff from './StaffList/StaffListComponent';
import Department from './Department/Department';
import Salary from './Salary/Salary';
import NotFound from './Notfound/NotFound';
import StaffInfomation from './StaffList/StaffInfomation';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='staff/:staffId' element={<StaffInfomation/>} />
          <Route path="department" element={<Department />} />
          <Route path="salary" element={<Salary />} />
          <Route path="*" element={ <NotFound /> } />
          <Route path="staff" element={<Staff />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
