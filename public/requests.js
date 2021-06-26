let clickables = $(".clickable")

// for (let i = 0; i < clickables.length; i++) {
//     clickables[i].addEventListener('click', getData(parseInt(clickables[i].innerText)), true);
// }

// function getData(dateValue) {
//     $.get(`/api/get/${dt.getFullYear()}-${dt.getMonth()}-${dateValue}`)
// }

clickables.click((event) => {
    let mon = dt.getMonth();
    if(mon.toString().length === 1) {
        mon = 0 + (mon+1).toString();
    }
    let da = event.target.innerText;
    if(da.toString().length === 1) {
        da = 0 + da.toString();
    }
    $.get(`/api/get/${dt.getFullYear()}-${mon}-${da}`, function(classes) {
        $(".display-classes").empty();
        if(classes.status === "found") {
            for(i of classes.data) {
                $(".display-classes").append(createPlates(i));
            }
        }
        else {
            $(".display-classes").append($(`<div>No classes on this day</div>`));
        }
    })
    console.log(`${dt.getFullYear()}-${mon}-${da}`)
})

function createPlates(data) {
    return $(`
    <div>
        ${data.teacherName}<br>
        ${data.subjectName}<br>
        ${data.classDate}<br>
        ${data.classStartTime}<br>
        ${data.classEndTime}
    </div>
    `);
}

$("#btnAdd").click(() => {
    $.post("/api/add/", {
        teacherName: $("#t-name").val(),
        subjectName: $("#s-name").val(),
        classDate: $("#c-date").val(),
        classStartTime: $("#c-s-time").val(),
        classEndTime: $("#c-e-time").val()
    }, function(res){
        if(res.status === "success") {
            alert("Data Added :", res.data);
        }
    })
})