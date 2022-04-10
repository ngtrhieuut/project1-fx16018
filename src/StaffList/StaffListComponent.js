import { STAFFS, DEPARTMENTS } from './staffs';

function Staff() {
    const handleInfo = () => {
        console.log(123);
    }

    const departments = DEPARTMENTS

    return(
        <div className='container'>
            <div className='row g-2'>
                {STAFFS.map(staffinfo => (
                    <div className="col-6" key={staffinfo.id}>
                        <div className="p-3 border bg-light accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button">
                                        <p>{staffinfo.name}</p>
                                    </button>
                                </h2>
                                <div>
                                    <div className="staffinfo">
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


