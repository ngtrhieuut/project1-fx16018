import { STAFFS } from './staffs';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

function Staff() {
    const newStaff = [];

    const [inputStaff, setInputStaff] = useState('')
    const [staffArr, setStaffArr] = useState(STAFFS)
    
    const handleSearchStaff = () => {
        for(var i = 0; i<STAFFS.length; i++) {
             if (inputStaff == STAFFS[i].name) {
              newStaff.push(STAFFS[i])
            }
          }
          console.log(newStaff);
        
        if (newStaff == []) {
            return setStaffArr(STAFFS)
        } else {
            setStaffArr(newStaff)
        }
    }

    return(
        <div className='container-flud'>
            <div className="input-group mb-3 container" id="searchStaff">
                <input type="text" className="form-control" placeholder="Nguyễn Văn A" id='inputS' onChange={e => setInputStaff(e.target.value)}></input>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearchStaff}>Tìm Kiếm</button>
            </div>
            <div className='container fw-bold fs-3 mb-3'>Nhân viên</div>
            <div className='row g-2 m-2'>
                {staffArr.map(staffinfo => (
                    <div className="col-6 col-md-4 main col-lg-2" key={staffinfo.id}>
                        <div className="p-3 border bg-light accordion" id="accordionExample">
                            <div className="accordion-item" //onClick={() => StaffInfomation(staffinfo.id)} => {
                                // return (
                                //     <Routes>
                                //         <Route path={"/staff/" + staffinfo.id} element={<StaffInfomation />} />
                                //     </Routes>
                                // )
                                // const setShow = documesnt.getElementById(staffinfo.id)
                                // console.log(setShow)
                                // if (setShow.style.display === 'block') {
                                //     document.getElementById(staffinfo.id).style.display = 'none';
                                // } else {
                                //     document.getElementById(staffinfo.id).style.display = 'block';
                                // }
                            //}}
                            
                            >
                                <Link
                                    to={`/staff/${staffinfo.id}`}>
                                        <div className='fs-6 fw-bold staffname'>
                                            <img src={staffinfo.image} alt={staffinfo.name} />
                                            <p>{staffinfo.name}</p>
                                        </div>
                                </Link>
                            {/* <div>
                                <div className="staffinfo" id={staffinfo.id}>
                                    <p><strong>Ngày sinh: </strong>{dateFormat(staffinfo.doB, "dd/mm/yyyy")}</p>
                                    <p><strong>Ngày vào công ty: </strong>{dateFormat(staffinfo.startDate, "dd/mm/yyyy")}</p>
                                    <p><strong>Phòng ban: </strong>{staffinfo.department.name}</p>
                                    <p><strong>Số ngày nghỉ còn lại: </strong>{staffinfo.annualLeave}</p>
                                    <p><strong>Số ngày đã làm thêm: </strong>{staffinfo.overTime}</p>
                                    <p><img src={staffinfo.image} alt={staffinfo.name} /></p>
                                </div>
                            </div> */}
                            {/* <Routes>
                                <Route path="staff/0" element={<StaffInfomation />} />
                            </Routes> */}
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            <Outlet />
        </div>
    )
}

export default Staff;


