function saveData (){
    var date = document.getElementById("date").value;
    var number = document.getElementById("number").value;
    var distance = document.getElementById("distance").value;
    var time = document.getElementById("time").value;

    var tbody = document.querySelector("#savedData");
    var tr = document.createElement('tr');
    tr.innerHTML = "<td>" + date + "</td>" + "<td>" + number + "</td>" + "<td>" + distance + "</td>" + "<td>" + time + "</td>";
    tbody.appendChild(tr);
    resetForm();
}

function resetForm () {
    document.getElementById("date").value = "";
    document.getElementById("number").value = "";
    document.getElementById("distance").value = "";
    document.getElementById("time").value = "";
}

