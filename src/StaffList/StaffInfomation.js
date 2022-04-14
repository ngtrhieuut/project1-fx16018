import { STAFFS } from './staffs';
import dateFormat, { masks } from "dateformat";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function StaffInfomation() {
    const params = useParams()
    const staffInfo = STAFFS.find(staff => staff.id.toString() === params.staffId)

    console.log(staffInfo)

    library.add(faArrowRightLong);

    return(
        <div className="staffinfo container">
            <div>
                <p id='arrowLong'>
                   Nhân viên <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /> {staffInfo?.name}
                </p>
            </div>
            <div className='row'>
                <div className='col-12 col-md-4 col-lg-3'>
                    <img src={staffInfo?.image} alt={staffInfo?.name} id='imgStaff'/>
                </div>
                <div className='col-12 col-md-8 col-lg-9' id='staffInfomation'>
                    <p><strong>Ngày sinh: </strong>{dateFormat(staffInfo?.doB, "dd/mm/yyyy")}</p>
                    <p><strong>Ngày vào công ty: </strong>{dateFormat(staffInfo?.startDate, "dd/mm/yyyy")}</p>
                    <p><strong>Phòng ban: </strong>{staffInfo?.department.name}</p>
                    <p><strong>Số ngày nghỉ còn lại: </strong>{staffInfo?.annualLeave}</p>
                    <p><strong>Số ngày đã làm thêm: </strong>{staffInfo?.overTime}</p>
                </div>
            </div>
        </div>
    )
}



export default StaffInfomation;
