
import * as React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Staff from '../StaffList/StaffListComponent';
import Department from '../Department/Department';
import Salary from '../Salary/Salary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIdCard, faUsersRectangle, faBuildingUser } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    library.add(faIdCard, faBuildingUser, faMoneyBill, faUsersRectangle);
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                <div className="container-fluid">
                    <h1><FontAwesomeIcon icon="fa-solid fa-id-card" /></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    <FontAwesomeIcon icon="fa-solid fa-users-rectangle" /> Nhân viên
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/department">
                                    <FontAwesomeIcon icon="fa-solid fa-building-user" /> Phòng ban
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/salary">
                                    <FontAwesomeIcon icon="fa-solid fa-money-bill" /> Bảng lương
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Staff />} />
                <Route path="department" element={<Department />} />
                <Route path="salary" element={<Salary />} />
            </Routes>
        </div>
    )
}

export default Navbar;