import { STAFFS, DEPARTMENTS } from './staffs';

function Staff() {

    return(
        <div className='container'>
            <div className='row g-2'>
                {STAFFS.map(staffinfo => (
                    <div class="col-6">
                        <div class="p-3 border bg-light">
                            <p key={staffinfo.id}>{staffinfo.name}</p>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Staff;
