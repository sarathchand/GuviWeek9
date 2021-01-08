var div1 = document.createElement('div');
div1.setAttribute('class','container');
var row = document.createElement('div');
row.setAttribute('class','row');
var col = document.createElement('div');
col.setAttribute('class','col-4');
var col2 = document.createElement('div');
col2.setAttribute('class','col-4');

var table = document.createElement('table');
var tbody = document.createElement('tbody');
var tr1 = document.createElement('tr');
var td1 = document.createElement('td');
td1.setAttribute('class','Scoredisp');
var tr2 = document.createElement('tr');
var td2 = document.createElement('td');
var tr3 = document.createElement('tr');
var td3 = document.createElement('td');
var tr4 = document.createElement('tr');
var td4 = document.createElement('td');
var tr5 = document.createElement('tr');
var td5 = document.createElement('td');
td1.innerText=sessionStorage.getItem("temp");
var input = document.createElement('input');
input.setAttribute('id','username');
input.setAttribute('class','form-control');
input.setAttribute('onkeyup','EnableDisable()')
input.setAttribute('placeholder','UserName');


td2.appendChild(input);
var button = document.createElement('button');
button.setAttribute('id','save');
button.setAttribute('class','btn btn-info');
button.setAttribute('value','Save');

button.setAttribute('disabled','true');
button.setAttribute('onclick','Save()');
button.innerText='Save'
td3.appendChild(button);
var anc = document.createElement('a');
anc.setAttribute('href','game.html');

 button = document.createElement('button');
button.setAttribute('id','PlayAgain');
button.setAttribute('class','btn btn-info');
button.setAttribute('value','PlayAgain');
button.innerText='PlayAgain'
anc.appendChild(button);
td4.appendChild(anc);

var anc1 = document.createElement('a');
anc1.setAttribute('href','index.html');

button = document.createElement('button');
button.setAttribute('id','GoHome');
button.setAttribute('class','btn btn-info');
button.setAttribute('value','GoHome');
button.innerText='Go Home'
anc1.appendChild(button);
td5.appendChild(anc1);



tr1.appendChild(td1);
tr2.appendChild(td2);
tr3.appendChild(td3);
tr4.appendChild(td4);
tr5.appendChild(td5);
tbody.appendChild(tr1);
tbody.appendChild(tr2);
tbody.appendChild(tr3);
tbody.appendChild(tr4);
tbody.appendChild(tr5);
table.appendChild(tbody);



col2.appendChild(table);
var col3 = document.createElement('div');
col3.setAttribute('class','col-4');
row.appendChild(col);
row.appendChild(col2);
row.appendChild(col3);

div1.appendChild(row);
document.body.append(div1);
function EnableDisable()
{
    var btnSubmit = document.getElementById("save");
 
      
        if (username.value.trim() != "") {
            
            btnSubmit.disabled = false;
        } else {
        
            btnSubmit.disabled = true;
        }
}

function Save()
{
    localStorage.setItem(username.value.trim(),sessionStorage.getItem("temp"));
    alert('Saved Sucessfully');


}