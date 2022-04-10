import { STAFFS, DEPARTMENTS } from './staffs';

function Staff() {
    var show = true;

    return(
        <div className='container'>
            <div className='row g-2'>
                {STAFFS.map(staffinfo => (
                    <div className="col-lg-6 col-md-12" key={staffinfo.id}>
                        <div className="p-3 border bg-light accordion" id="accordionExample">
                            <div className="accordion-item" onClick={() => {
                                const setShow = document.getElementById(staffinfo.id)
                                console.log(setShow)
                                if (setShow.style.display == 'block') {
                                    document.getElementById(staffinfo.id).style.display = 'none';
                                } else {
                                    document.getElementById(staffinfo.id).style.display = 'block';
                                }
                            }}>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button">
                                        <p>{staffinfo.name}</p>
                                    </button>
                                </h2>
                                <div>
                                    <div className="staffinfo" id={staffinfo.id}>
                                        <p><strong>Ngày sinh: </strong>{staffinfo.doB}</p>
                                        <p><strong>Ngày vào công ty: </strong>{staffinfo.startDate}</p>
                                        <p><strong>Phòng ban: </strong>{staffinfo.department.name}</p>
                                        <p><strong>Số ngày nghỉ còn lại: </strong>{staffinfo.annualLeave}</p>
                                        <p><strong>Số ngày đã làm thêm: </strong>{staffinfo.overTime}</p>
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


