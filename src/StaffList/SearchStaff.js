import { STAFFS } from './staffs';
import { useState } from 'react';




function SearchStaff() {
    const newStaff = [];
    const [inputStaff, setInputStaff] = useState('')
    
    
    const handleSearchStaff = () => {
        for(var i = 0; i<STAFFS.length; i++) {
             if (inputStaff === STAFFS[i].name) {
              newStaff.push(STAFFS[i])
            } 
          }
        console.log(newStaff)
    }
    console.log(newStaff)
    // }
    return(
        <div className="input-group mb-3 container" id="searchStaff">
            <input type="text" className="form-control" placeholder="Nguyễn Văn A" onChange={e => setInputStaff(e.target.value)}></input>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearchStaff}>Tìm Kiếm</button>
            {newStaff}
        </div>
    )
}

export default SearchStaff;