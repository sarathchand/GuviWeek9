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
td1.setAttribute('class','Quizhead');
var tr2 = document.createElement('tr');
var td2 = document.createElement('td');
var tr3 = document.createElement('tr');
var td3 = document.createElement('td');
td1.innerText='Quick Quiz';
var anc = document.createElement('a');
anc.setAttribute('href','game.html');
var button = document.createElement('button');
button.setAttribute('id','play');
button.setAttribute('class','btn btn-info');
button.setAttribute('value','play');
button.innerText='PLAY'
anc.appendChild(button);
td2.appendChild(anc);
var anc1 = document.createElement('a');
anc1.setAttribute('href','highscore.html');

button = document.createElement('button');
button.setAttribute('id','highscores');
button.setAttribute('class','btn btn-info');
button.setAttribute('value','highscores');
button.innerText='High Scores'
anc1.appendChild(button);
td3.appendChild(anc1);


tr1.appendChild(td1);
tr2.appendChild(td2);
tr3.appendChild(td3);
tbody.appendChild(tr1);
tbody.appendChild(tr2);
tbody.appendChild(tr3);
table.appendChild(tbody);



col2.appendChild(table);
var col3 = document.createElement('div');
col3.setAttribute('class','col-4');
row.appendChild(col);
row.appendChild(col2);
row.appendChild(col3);

div1.appendChild(row);
document.body.append(div1);

//document.body.append(final);