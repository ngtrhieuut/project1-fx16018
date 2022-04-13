function DevideColumn () {
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

    return (
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
    )
}