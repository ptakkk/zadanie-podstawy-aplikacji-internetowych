var submitted = false;
var imieError = false;
var nazwiskoError = false;
var emailError = false;
var dataError = false;
var hasloError = false;
var haslo2Error = false;
var opisError = false;


function hideAllErrors() {
    document.getElementById("imieError").style.display = "none";
	document.getElementById("nazwiskoError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
	document.getElementById("dataError").style.display = "none";
	document.getElementById("hasloError").style.display = "none";
	document.getElementById("haslo2Error").style.display = "none";
	document.getElementById("opisError").style.display = "none";
	document.getElementById("imieMarker").style.display = "none";
	document.getElementById("nazwiskoMarker").style.display = "none";
    document.getElementById("emailMarker").style.display = "none";
	document.getElementById("dataMarker").style.display = "none";
	document.getElementById("hasloMarker").style.display = "none";
	document.getElementById("haslo2Marker").style.display = "none";
	document.getElementById("opisMarker").style.display = "none";
}

function box(status) {
	if (status == true) document.getElementById("box").style.border = "none";
	else document.getElementById("box").style.border = "dotted red";
}

function checkemail(str){
var filter=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i
return (filter.test(str));
}

function checkpassword1(str){
var filter=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i
var passwd = document.getElementById('haslo').value;
  if (passwd.length >= 8 && passwd.length <= 20 ) {

return true;
} else return false;
}

function checkpassword2(str){
var filter=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i
var passwd = document.getElementById('haslo2').value;
  if (passwd.length >= 8 && passwd.length <= 20 ) {

return true;
} else return false;
}


function formCheck(isSubmitting, field) {
    if (isSubmitting) submitted = true;
    imie = document.getElementById("imie").value;
    nazwisko = document.getElementById("nazwisko").value;
    email = document.getElementById("email").value;
    data = document.getElementById("data").value;
    haslo = document.getElementById("haslo").value;
    haslo2 = document.getElementById("haslo2").value;
    opis = document.getElementById("opis").value;
    var form = true;

    if (isSubmitting || field == "imie") {
        if (imie == "") {
            document.getElementById("imieError").style.display = "inline";
            document.getElementById("imieMarker").style.display = "inline";
            document.getElementById("imie").style.border = "1px solid red";
            imieError=true
            form = false;
            console.log("xd");
        } else {
            document.getElementById("imieError").style.display = "none";
            document.getElementById("imieMarker").style.display = "none";
            document.getElementById("imie").style.border = "1px solid black";
            imieError=false
        } 
    }

    if (isSubmitting || field == "nazwisko") {
        if (nazwisko == "") {
            document.getElementById("nazwiskoError").style.display = "inline";
            document.getElementById("nazwiskoMarker").style.display = "inline";
            document.getElementById("nazwisko").style.border = "1px solid red";
            nazwiskoError=true;
            form = false;
            console.log("xd");
        } else {
            document.getElementById("nazwiskoError").style.display = "none";
            document.getElementById("nazwiskoMarker").style.display = "none";
            document.getElementById("nazwisko").style.border = "1px solid black";
            nazwiskoError=false;
        }   
     }

    if (isSubmitting || field == "email") {
        if (!checkemail(email)) {
            document.getElementById("emailError").style.display = "inline";
            document.getElementById("emailMarker").style.display = "inline";
            document.getElementById("email").style.border = "1px solid red";
            emailError=true;
            form = false;
            console.log("xd");
        } else {
            document.getElementById("emailError").style.display = "none";
            document.getElementById("emailMarker").style.display = "none";
            document.getElementById("email").style.border = "1px solid black";
            emailError=false;
        }
    }

    if (isSubmitting || field == "data") {
        if (data=="") {
            document.getElementById("dataError").style.display = "inline";
            document.getElementById("dataMarker").style.display = "inline";
            document.getElementById("data").style.border = "1px solid red";
            dataError=true;
            form = false;
            console.log("xd");
        } else {
            document.getElementById("dataError").style.display = "none";
            document.getElementById("dataMarker").style.display = "none";
            document.getElementById("data").style.border = "1px solid black";
            dataError=false;
        }
    }

    if (isSubmitting || field == "haslo") {
        if (haslo == "") {
            document.getElementById("hasloError").style.display = "inline";
            document.getElementById("hasloMarker").style.display = "inline";
            document.getElementById("haslo").style.border = "1px solid red";
            hasloError=true;
            form = false;
            console.log("xd");
        } else {
            document.getElementById("hasloError").style.display = "none";
            document.getElementById("hasloMarker").style.display = "none";
            document.getElementById("haslo").style.border = "1px solid black"
            hasloError=false;;
        }
    }

    if (isSubmitting || field == "haslo2") {
        if (haslo2 !== haslo || haslo2 == "") {
            document.getElementById("haslo2Error").style.display = "inline";
            document.getElementById("haslo2Marker").style.display = "inline";
            document.getElementById("haslo2").style.border = "1px solid red";
            haslo2Error=true;
            form = false;
            console.log("xd");
        } else {
            document.getElementById("haslo2Error").style.display = "none";
            document.getElementById("haslo2Marker").style.display = "none";
            document.getElementById("haslo2").style.border = "1px solid black";
            haslo2Error=false;
        }
    }

    if (isSubmitting || field == "opis") {
        if (opis=="") {
            document.getElementById("opisError").style.display = "inline";
            document.getElementById("opisMarker").style.display = "inline";
            document.getElementById("opis").style.border = "1px solid red";
            opisError=true;
            form = false;
            console.log("xd");
        } else {
            document.getElementById("opisError").style.display = "none";
            document.getElementById("opisMarker").style.display = "none";
            document.getElementById("opis").style.border = "1px solid black";
            opisError=false;
        }
    }
    if (
            imieError ||
            nazwiskoError || 
            emailError || 
            dataError|| 
            hasloError || 
            haslo2Error ||
            opisError
        ) {
        form = false;
    };
    box(form);
    return form;
}


function addRow() {
    var table = document.getElementById("tabela");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.setAttribute("contenteditable","true");
    cell2.setAttribute("contenteditable","true");
    cell3.setAttribute("contenteditable","true");

    cell1.innerHTML = "Wiersz";
    cell2.innerHTML = "Wiersz";
    cell3.innerHTML = "Wiersz";

    var button = document.createElement("input");
    button.type = "button";
    button.value = "Usuń";
    button.setAttribute("onclick","deleteRow(this)")
    cell4.appendChild(button);
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.setAttribute("class","select")
    cell5.appendChild(checkbox);
    var up = document.createElement("input");
    var down = document.createElement("input");
    up.type = "button";
    up.value = "↑";
    up.setAttribute("onclick","arrow_direction('gora', this);");
    cell6.appendChild(up);
    down.type = "button";
    down.value = "↓";
    down.setAttribute("onclick","arrow_direction('dol', this);");
    cell7.appendChild(down);
    updateRowCount()
}

function deleteRow(row) {
    var index = row.parentNode.parentNode.rowIndex;
    document.getElementById("tabela").deleteRow(index);
    updateRowCount()
}

function deleteRows() {
    document.querySelectorAll('#tabela .select:checked').forEach(e => {
        e.parentNode.parentNode.remove();
    });
    updateRowCount()
}

function updateRowCount() {
    rowCount = document.getElementById("tabela").rows.length;
    document.getElementById("rowNum").innerHTML = "Liczba rzędów: " + rowCount;
}

function arrow_direction(direction, row) {
    var index = row.parentNode.parentNode.rowIndex;
    var rows = document.getElementById("tabela").rows;
    var parent = rows[index].parentNode;
    if(direction === "gora")
    {
        if(index > 0){
            parent.insertBefore(rows[index],rows[index - 1]);
            index--;
        }
    }

    if(direction === "dol")
    {
        if(index < rows.length -1){
            parent.insertBefore(rows[index + 1],rows[index]);
            index++;
        }
    }
}

