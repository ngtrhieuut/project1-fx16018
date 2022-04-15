import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIdCard, faUsersRectangle, faBuildingUser } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

library.add(faIdCard, faBuildingUser, faMoneyBill, faUsersRectangle);

const Footer = () => {
  return (
    <footer className="bg-black mt-5">
        <div className="container py-5">
            <div className="row py-4">
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><FontAwesomeIcon icon="fa-solid fa-id-card" className="mb-3" id ="footerlogo" />
                    <p className="font-italic text-muted">Project 2 - RJS101x_01-A_VN_DN Lập trình Web Front-End với React - hieuntFX16018</p>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                    <h6 className="text-uppercase font-weight-bold mb-4">Nhân viên</h6>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                    <h6 className="text-uppercase font-weight-bold mb-4">Phòng ban</h6>
                </div>
                <div className="col-lg-4 col-md-6 mb-lg-0">
                    <h6 className="text-uppercase font-weight-bold mb-4">Bảng lương</h6>
                    <div className="p-1 rounded border">
                    
                        <div className="input-group">
                            <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                            <div className="input-group-append">
                                <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;