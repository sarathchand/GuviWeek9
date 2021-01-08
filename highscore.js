function SortLocalStorage(){
    if(localStorage.length > 0){
       var localStorageArray = new Array();
       for (i=0;i<localStorage.length;i++){
           localStorageArray[i] = localStorage.key(i)+":"+localStorage.getItem(localStorage.key(i));
       }
    }
    var sortedArray = localStorageArray.sort();
    return sortedArray;
 }

var temp = SortLocalStorage();
console.log(temp);

var div = document.createElement('div');
div.setAttribute('class','container');
var div1 = document.createElement('div');
div1.setAttribute('class','row');

var col = document.createElement('div');
col.setAttribute('class','col-12 colum');

col.innerText = 'HIGH SCORES';

for(var j = 0 ;j <temp.length;j++ )
{
    var a = temp[j].split(':');
    var p = document.createElement('p');
    p.innerText = a[0] + ':' +a[1];
    col.appendChild(p);
}
div1.appendChild(col);
div.appendChild(div1);
document.body.append(div);


// for(var i = 0 ; i < Object.keys(localStorage).length;i++)
// {
//     console.log(Object.keys(localStorage)[i]);
//     console.log(localStorage.getItem(Object.keys(localStorage)[i]));
//     var temp1 = Object.keys(localStorage)[i] + ':'
// }