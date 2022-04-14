import { STAFFS } from '../StaffList/staffs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";


function Salary() {
    library.add(faArrowRightLong);

    function showSalary(scale, time) {
        const show = scale*3000000 + time*200000;
        return show.toLocaleString('vi-VN')
    }

    return (
        <div className="dep container">
            <div>
                <p id='arrowLong'>
                   Nhân viên <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /> Bảng lương
                </p>
            </div>
            <div className='row'>
                {STAFFS.map(salary => (
                    <div className="card col-12 col-md-6 col-lg-4 salary" key={salary.id}>
                        <div className="card-body">
                            <h5 className="card-title">{salary.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Mã nhân viên: {salary.id}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Hệ số lương: {salary.salaryScale}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Số giờ làm thêm: {salary.overTime}</h6>
                            <div id='showSalary'>
                                <h6 className="card-subtitle mb-2 text-muted">Lương {showSalary(salary.salaryScale, salary.overTime)} đồng</h6>
                            </div>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
    )
}

export default Salary;