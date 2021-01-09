//Chunk

const chunk = (arr,size) =>{
  var temp =[];
  var main = [];
  var p = 0;
  
  for (const element of arr) {
      
      if(p < size)
      {
          temp.push(element);
          p++;
      }
      if(p == size)
      {
        main.push(temp);
        temp = [];
        p=0;

      }
     
   
    }
    main.push(temp);
    console.log(main);

}

chunk([1,2,3,4,5],2);

//Reduce

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue


console.log(array1.reduce(reducer));

//FIlter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = (words)=>{
  var temp1= [];
  for(const element of words)
  {
    if(element.length>6)
    {
      temp1.push(element);
    }

  }
  console.log(temp1);

}

result(words);

//FInd
const array2 = [5, 12, 8, 130, 44];

const found = (array2,cond,value)=>{
  for(const ele of array2){
    if(cond == '>')
    {
      if (ele > value)
      {
        return ele;

      }

    }
    if(cond == '<')
    {
      if (ele < value)
      {
        return ele;

      }

    }
    if(cond == '=')
    {
      if (ele == value)
      {
        return ele;

      }

    }
  }

}

console.log(found(array2,'>',10));


//Sum
const array3 = [5, 12, 8, 130, 44];

const sum = (array2)=>{
  var temp = 0;
  for(var ele of array2){
    temp = temp + ele;

  }
  return temp;

}

console.log(sum(array3));