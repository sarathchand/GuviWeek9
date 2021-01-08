var scorevalue = 0;

function init(i) {
    var div = document.createElement('div');
    div.setAttribute('class', 'container');
    div.setAttribute('id', 'cont1');

    var div1 = document.createElement('div');
    div1.setAttribute('class', 'row');

    var div2 = document.createElement('div');
    div2.setAttribute('class', 'col-6');
    var prog = document.createElement('progress');
    prog.setAttribute('id', 'progresstext');
    prog.setAttribute('value', i);
    prog.setAttribute('max', '10');
    prog.setAttribute('min', '1');

    var innerdiv = document.createElement('div');
    innerdiv.setAttribute('class', 'topcolor');
    innerdiv.innerText = 'Question' + i + '/' + '10'


    div2.appendChild(innerdiv);
    div2.appendChild(prog);
    var div3 = document.createElement('div');
    div3.setAttribute('class', 'col-6 scorediv');


    var score = document.createElement('div');
    score.setAttribute('class', 'topcolor');
    score.innerText = 'Score';
    div3.appendChild(score);
    var divscore = document.createElement('div');
    divscore.setAttribute('class', 'divscore');
    divscore.innerHTML = '0';
    div3.appendChild(divscore);

    div1.appendChild(div2);
    div1.appendChild(div3);
    div.appendChild(div1);
    document.body.append(div);


}


async function myFetch() {
    var div = document.createElement('div');
    div.setAttribute('class', 'container');
    div.setAttribute('id', 'cont2');


    var div4 = document.createElement('div');
    div4.setAttribute('class', 'row');

    var col = document.createElement('div');
    col.setAttribute('class', 'col-12');
    col.innerText = 'Hai';







    var response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
    var response_data = await response.json();
    console.log(response);
    console.log(response_data);
    console.log(response_data.results)
    console.log(response_data.results[0])
    console.log(response_data.results[0].question);
    var question = await response_data.results[0].question;
    var res = question;
    col.innerHTML = res + "<br/>";

    for (var j = 0; j < response_data.results[0].incorrect_answers.length; j++) {
        var divans = document.createElement('div');
        divans.setAttribute('class', 'btn-group')
        var button_text = document.createElement('button');
        button_text.setAttribute('class', 'btn btn-primary')
        button_text.setAttribute('disabled', 'true');
        button_text.innerHTML = j + 1;
        divans.appendChild(button_text);
        var br = document.createElement('br');
        divans.appendChild(br);
        var button = document.createElement('button');
        button.setAttribute('class', 'btn btn-outline-primary');
        button.setAttribute('id', j);
        button.setAttribute('onclick', 'wrongans()');
        button.innerText = response_data.results[0].incorrect_answers[j];
        divans.appendChild(button);
        col.appendChild(divans);
        var br = document.createElement('br');
        col.appendChild(br);
        col.appendChild(br);
    }

    divans = document.createElement('div');
    divans.setAttribute('class', 'btn-group');
    button_text = document.createElement('button');
    button_text.setAttribute('class', 'btn btn-primary')
    button_text.setAttribute('disabled', 'true');
    button_text.innerHTML = j + 1;
    divans.appendChild(button_text);
    button = document.createElement('button');
    button.setAttribute('class', 'btn btn-outline-primary');
    button.setAttribute('id', '4');
    button.setAttribute('onclick', 'correctans()');
    button.innerText = response_data.results[0].correct_answer;
    divans.appendChild(button);

    col.appendChild(divans);



    div.appendChild(div4);
    div4.appendChild(col);

    document.body.append(div);


}

function init1(i) {
    var div = document.createElement('div');
    div.setAttribute('class', 'container');
    div.setAttribute('id', 'cont1');

    var div1 = document.createElement('div');
    div1.setAttribute('class', 'row');

    var div2 = document.createElement('div');
    div2.setAttribute('class', 'col-6');
    var prog = document.createElement('progress');
    prog.setAttribute('id', 'progresstext');
    prog.setAttribute('value', i);
    prog.setAttribute('max', '10');
    prog.setAttribute('min', '1');

    var innerdiv = document.createElement('div');
    innerdiv.setAttribute('class', 'topcolor');
    innerdiv.innerText = 'Question' + i + '/' + '10'


    div2.appendChild(innerdiv);
    div2.appendChild(prog);
    var div3 = document.createElement('div');
    div3.setAttribute('class', 'col-6 scorediv');


    var score = document.createElement('div');
    score.setAttribute('class', 'topcolor');
    score.innerText = 'Score';
    div3.appendChild(score);
    var divscore = document.createElement('div');
    divscore.setAttribute('class', 'divscore');
    divscore.innerHTML = scorevalue;
    div3.appendChild(divscore);

    div1.appendChild(div2);
    div1.appendChild(div3);
    div.appendChild(div1);
    console.log(div);
    document.getElementById('cont1').innerHTML = '`' + div.innerHTML + '`';
    //document.body.append(div);


}


async function myFetch1() {
    var div = document.createElement('div');
    div.setAttribute('class', 'container');
    div.setAttribute('id', 'cont2');


    var div4 = document.createElement('div');
    div4.setAttribute('class', 'row');

    var col = document.createElement('div');
    col.setAttribute('class', 'col-12');
    col.innerText = 'Hai';







    var response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
    var response_data = await response.json();
    console.log(response);
    console.log(response_data);
    console.log(response_data.results)
    console.log(response_data.results[0])
    console.log(response_data.results[0].question);
    var question = await response_data.results[0].question;
    var res = question;
    col.innerHTML = res + "<br/>";

    for (var j = 0; j < response_data.results[0].incorrect_answers.length; j++) {
        var divans = document.createElement('div');
        divans.setAttribute('class', 'btn-group')
        var button_text = document.createElement('button');
        button_text.setAttribute('class', 'btn btn-primary')
        button_text.setAttribute('disabled', 'true');
        button_text.innerHTML = j + 1;
        divans.appendChild(button_text);
        var br = document.createElement('br');
        divans.appendChild(br);
        var button = document.createElement('button');
        button.setAttribute('class', 'btn btn-outline-primary');
        button.setAttribute('id', j);
        button.setAttribute('onclick', 'wrongans()');
        button.innerText = response_data.results[0].incorrect_answers[j];
        divans.appendChild(button);
        col.appendChild(divans);
        var br = document.createElement('br');
        col.appendChild(br);
        col.appendChild(br);
    }

    divans = document.createElement('div');
    divans.setAttribute('class', 'btn-group');
    button_text = document.createElement('button');
    button_text.setAttribute('class', 'btn btn-primary')
    button_text.setAttribute('disabled', 'true');
    button_text.innerHTML = j + 1;
    divans.appendChild(button_text);
    button = document.createElement('button');
    button.setAttribute('class', 'btn btn-outline-primary');
    button.setAttribute('id', '4');
    button.setAttribute('onclick', 'correctans()');
    button.innerText = response_data.results[0].correct_answer;
    divans.appendChild(button);

    col.appendChild(divans);



    div.appendChild(div4);
    div4.appendChild(col);

    document.getElementById('cont2').innerHTML = div.innerHTML;
    // document.body.append(div);


}
var p = 0;

var test = init(p + 1);

var value_out = myFetch();

// console.log('output ' + value_out.json());

function correctans() {
    p++;
    if (p < 10) {
        scorevalue = scorevalue + 10;
        console.log(document.getElementsByTagName('body')[0]);
        test = init1(p + 1);


        value_out = myFetch1();
        alert('correct');
        console.log(document.getElementsByTagName('body')[0]);

    }
    else{
        scorevalue = scorevalue + 10;
        var anc = document.createElement('a');
        anc.setAttribute('href','score.html');
       
        var sub = document.createElement('button');
        sub.setAttribute('class','btn btn-secondary');
        sub.innerText='Submit';
        anc.appendChild(sub);
        document.body.append(anc);

        sessionStorage.setItem("temp",scorevalue );
    }

}

function wrongans() {
    p++;
    if (p < 10) {
        test = init1(p + 1);


        value_out = myFetch1();
        alert('Wrong');

    }
    else{
        var anc = document.createElement('a');
        anc.setAttribute('href','score.html');
        var sub1 = document.createElement('button');
        sub1.setAttribute('class','btn btn-secondary');
        sub1.innerText='Submit';
        anc.appendChild(sub1);
        document.body.append(anc);
        sessionStorage.setItem("temp",scorevalue );

    }

}



