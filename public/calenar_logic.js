var dt = new Date();

function render() {

    dt.setDate(1);


    var prev_date = new Date(dt.getFullYear(),
        dt.getMonth(),
        0).getDate();

    var today = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    document.getElementById("datestr").innerHTML = dt.toDateString();
    document.getElementById("month").innerHTML = months[dt.getMonth()];//dt.getMOnth returns a number 

    var endDate = new Date(dt.getFullYear(),
        dt.getMonth() + 1,
        0).getDate();//we pass year last date of month and zero

    var day = dt.getDay();
    var cells = "";
    for (x = day; x > 0; x--) {
        cells += `<div class="prevdays">` + (prev_date - x + 1) + "</div>";
    }
    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
            cells += `<div class="today clickable">` + i + "</div>";
        }
        else {
            cells += `<div class="clickable">` + i + "</div>";
        }
    }

    document.getElementsByClassName("days")[0].innerHTML = cells;

}
function moveDate(para) {
     if(para == 'prev')
     {
         dt.setMonth(dt.getMonth()-1);
     }
     else if(para == 'next')
     {
         dt.setMonth(dt.getMonth() + 1);
     }
     render();
}

render()