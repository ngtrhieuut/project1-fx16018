import { DEPARTMENTS } from '../StaffList/staffs'


function Department() {

    return (
        <div className="dep container">
            <div>
                <p id='arrowLong'>
                   Phòng ban
                </p>
            </div>
            <div className='row'>
                {DEPARTMENTS.map(dept => (
                    <div className="card col-12 col-md-6 col-lg-4" key={dept.id}>
                        <div className="card-body">
                            <h5 className="card-title">Phòng ban: {dept.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Số lượng nhân viên: {dept.numberOfStaff}</h6>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
    )
}

export default Department;