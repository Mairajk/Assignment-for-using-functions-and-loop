
let InputNum = +document.querySelector(`#InputNumOS`).value ;
let subject = document.querySelector(`#subject`) ;
let tMarks = +document.querySelector(`#tMarks`) ;
let oMarks = +document.querySelector(`#oMarks`) ;

function numOS() {
    let subject = document.querySelector(`#subject`) ;
    for ( let i = 0 ; i < InputNum ; i++ ) {
        // for (let j = 0; j < Inputnum ; j++) {
            subject.innerHTML = ` <input type="text" id="sub${i}" placeholder="Enter Subject"> `;
            
        // }
        
    }
}