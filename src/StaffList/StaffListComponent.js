import { STAFFS} from './staffs';
import dateFormat, { masks } from "dateformat";

function Staff() {
    const handleColumn1 = () => {
        const mapColumns = document.querySelectorAll(".main")
        console.log(mapColumns.length)
            for (var i = 0; i < mapColumns.length; i++) {
                if (mapColumns[i].classList[2] === "col-lg-6") {
                    mapColumns[i].classList.remove('col-lg-6')
                    mapColumns[i].classList.add('col-lg-12')
                    console.log(mapColumns[i].classList)
                } else if (mapColumns[i].classList[2] === "col-lg-4") {
                    mapColumns[i].classList.remove('col-lg-4')
                    mapColumns[i].classList.add('col-lg-12')
                    console.log(mapColumns[i].classList)
                } else {
                    mapColumns[i].classList.remove('col-lg-12')
                    mapColumns[i].classList.add('col-lg-12')
                    console.log(mapColumns[i].classList)
                }                
            } 
    }

    const handleColumn2 = () => {
        const mapColumns = document.querySelectorAll(".main")
        console.log(mapColumns.length)
            for (var i = 0; i < mapColumns.length; i++) {
                if (mapColumns[i].classList[2] === "col-lg-6") {
                    mapColumns[i].classList.remove('col-lg-6')
                    mapColumns[i].classList.add('col-lg-6')
                    console.log(mapColumns[i].classList)
                } else if (mapColumns[i].classList[2] === "col-lg-4") {
                    mapColumns[i].classList.remove('col-lg-4')
                    mapColumns[i].classList.add('col-lg-6')
                    console.log(mapColumns[i].classList)
                } else {
                    mapColumns[i].classList.remove('col-lg-12')
                    mapColumns[i].classList.add('col-lg-6')
                    console.log(mapColumns[i].classList)
                }                
            } 
    }

    const handleColumn3 = () => {
        const mapColumns = document.querySelectorAll(".main")
        console.log(mapColumns.length)
            for (var i = 0; i < mapColumns.length; i++) {
                if (mapColumns[i].classList[2] === "col-lg-6") {
                    mapColumns[i].classList.remove('col-lg-6')
                    mapColumns[i].classList.add('col-lg-4')
                    console.log(mapColumns[i].classList)
                } else if (mapColumns[i].classList[2] === "col-lg-4") {
                    mapColumns[i].classList.remove('col-lg-4')
                    mapColumns[i].classList.add('col-lg-4')
                    console.log(mapColumns[i].classList)
                } else {
                    mapColumns[i].classList.remove('col-lg-12')
                    mapColumns[i].classList.add('col-lg-4')
                    console.log(mapColumns[i].classList)
                }                
            } 
    }
    return(
        <div className='container'>
            <div className="dropdown" id="dropdownmenu">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Số cột hiển thị
                </button>
                <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1">
                    <li onClick={handleColumn1}>1</li>
                    <li onClick={handleColumn2}>2</li>
                    <li onClick={handleColumn3}>3</li>
                </ul>
            </div>
            <div className='row g-2'>
                {STAFFS.map(staffinfo => (
                    <div className="col-md-12 main col-lg-6" key={staffinfo.id}>
                        <div className="p-3 border bg-light accordion" id="accordionExample">
                            <div className="accordion-item" onClick={() => {
                                const setShow = document.getElementById(staffinfo.id)
                                console.log(setShow)
                                if (setShow.style.display === 'block') {
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
                                        <p><strong>Ngày sinh: </strong>{dateFormat(staffinfo.doB, "dd/mm/yyyy")}</p>
                                        <p><strong>Ngày vào công ty: </strong>{dateFormat(staffinfo.startDate, "dd/mm/yyyy")}</p>
                                        <p><strong>Phòng ban: </strong>{staffinfo.department.name}</p>
                                        <p><strong>Số ngày nghỉ còn lại: </strong>{staffinfo.annualLeave}</p>
                                        <p><strong>Số ngày đã làm thêm: </strong>{staffinfo.overTime}</p>
                                        <p><img src={staffinfo.image} /></p>
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


