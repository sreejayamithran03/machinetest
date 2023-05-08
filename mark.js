var rowNo = 1
var rNo = 1
var currentTr
function addmark() {
    var Maths = document.getElementById("m")
    var Chemistry = document.getElementById("c")
    var Biology = document.getElementById("b")
    var Physics = document.getElementById("p")
    var MarkTable = document.getElementById("table_mark")

    var newTr = document.createElement("tr")
    newTrId = "row" + rowNo
    newTr.setAttribute("id", newTrId)
    rowNo++

    var rollno = document.createElement("td")
    rollno.innerHTML = rNo
    rNo++
    var mathstd = document.createElement("td")
    var chemistrytd = document.createElement("td")
    var biologytd = document.createElement("td")
    var physicstd = document.createElement("td")
    var actiontd = document.createElement("td")

    mathstd.innerHTML = Maths.value
    chemistrytd.innerHTML = Chemistry.value
    biologytd.innerHTML = Biology.value
    physicstd.innerHTML = Physics.value
    actiontd.innerHTML = "<button onclick='deleteMraks()'>Delete</button>"
        + "<button type='button'  data-bs-toggle='modal' data-bs-target='#exampleModal' onclick=' editMark()'>Edit</button>"

    newTr.appendChild(rollno)
    newTr.appendChild(mathstd)
    newTr.appendChild(chemistrytd)
    newTr.appendChild(biologytd)
    newTr.appendChild(physicstd)
    newTr.appendChild(actiontd)

    MarkTable.appendChild(newTr)

    let m = parseInt(document.getElementById("m").value);
    let c = parseInt(document.getElementById("c").value);
    let b = parseInt(document.getElementById("b").value);
    let p = parseInt(document.getElementById("p").value);

    if (m >= 45 && c >= 45 && b >= 45 && p >= 45) {
        document.getElementById("msg").style.color = "green";
        document.getElementById("msg").innerHTML = " Congratulations! You are eligible for higher studies"

    } else {
        document.getElementById("msg").style.color = "red";
        document.getElementById("msg").innerHTML = " sorry. you are not eligible for higher studies"
    }


    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'number') {
            inputs[i].value = '';
        }
    }
}

function deleteMraks() {
    var dele = document.getElementById("table_mark")
    var selectedRow = event.target.parentNode.parentNode
    dele.deleteRow(selectedRow.rowIndex)
    for (let i = 0; i < dele.rows.length; i++) {
        dele.rows[i + 1].cells[0].innerHTML = i + 1
    }
}

function editMark() {
    var selectedRow = event.target.parentNode.parentNode
    document.getElementById("maths").value = selectedRow.children[1].innerHTML
    document.getElementById("chemistry").value = selectedRow.children[2].innerHTML
    document.getElementById("biology").value = selectedRow.children[3].innerHTML
    document.getElementById("physics").value = selectedRow.children[4].innerHTML
    currentTr = selectedRow


}
function updateMark() {

    var newM = document.getElementById("maths").value
    currentTr.children[1].innerHTML = newM
    var newC = document.getElementById("chemistry").value
    currentTr.children[2].innerHTML = newC
    var newB = document.getElementById("biology").value
    currentTr.children[3].innerHTML = newB
    var newP = document.getElementById("physics").value
    currentTr.children[4].innerHTML = newP

    if (newM >= 45 && newC >= 45 && newB >= 45 && newP >= 45) {
        document.getElementById("msg").style.color = "green";
        document.getElementById("msg").innerHTML = " Congratulations! You are eligible for higher studies"
    } else {
        document.getElementById("msg").style.color = "red";
        document.getElementById("msg").innerHTML = " sorry. you are not eligible for higher studies"
    }
}