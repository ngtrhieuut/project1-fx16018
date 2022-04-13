import { STAFFS } from './staffs';
import dateFormat, { masks } from "dateformat";
import { Link } from 'react-router-dom'

function Staff() {
    return(
        <div className='container-flud'>
            <div className='container fw-bold fs-3 mb-3'>Nhân viên</div>
            <div className='row g-2 m-2'>
                {STAFFS.map(staffinfo => (
                    <div className="col-6 col-md-4 main col-lg-2" key={staffinfo.id}>
                        <div className="p-3 border bg-light accordion" id="accordionExample">
                            <div className="accordion-item" //onClick={() => {
                                // const setShow = document.getElementById(staffinfo.id)
                                // console.log(setShow)
                                // if (setShow.style.display === 'block') {
                                //     document.getElementById(staffinfo.id).style.display = 'none';
                                // } else {
                                //     document.getElementById(staffinfo.id).style.display = 'block';
                                // }
                            //}}
                            >
                            <p className='fs-6 fw-bold staffname'>
                                <Link className="text-decoration-none" to={"/staff/" + staffinfo.id}>
                                    <img src={staffinfo.image} alt={staffinfo.name} />{staffinfo.name}
                                </Link></p>
                            <div>
                                <div className="staffinfo" id={staffinfo.id}>
                                    <p><strong>Ngày sinh: </strong>{dateFormat(staffinfo.doB, "dd/mm/yyyy")}</p>
                                    <p><strong>Ngày vào công ty: </strong>{dateFormat(staffinfo.startDate, "dd/mm/yyyy")}</p>
                                    <p><strong>Phòng ban: </strong>{staffinfo.department.name}</p>
                                    <p><strong>Số ngày nghỉ còn lại: </strong>{staffinfo.annualLeave}</p>
                                    <p><strong>Số ngày đã làm thêm: </strong>{staffinfo.overTime}</p>
                                    <p><img src={staffinfo.image} alt={staffinfo.name} /></p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Staff;


