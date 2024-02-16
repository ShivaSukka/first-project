/*let name="shivasikka"
console.log(name.replace("sikka","sukka"))*/

/*let num=5n;
console.log(num/2)*/

/*let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
console.log(hex, oct, bin)*/

/*let num=Number.MAX_SAFE_INTEGER 
console.log(num)*/ 

/*let num=Number.MIN_SAFE_INTEGER 
console.log(num)*/ 

/*let num=1.65;
console.log(num.toExponential(2))*/

/*let x=123.2233;
console.log(x.toFixed(1))*/ 

//console.log(parseInt("-10"))

//console.log(Number.isInteger(10))
//console.log(Number.isInteger(10.33))

//console.log(Number.isSafeInteger(10))

//console.log(Number.isInteger(1044546466464646464646464552125478411255))

/*console.log(Number.parseInt("-10"));
console.log(Number.parseInt("-10.33"));
console.log(Number.parseInt("10"));
console.log(Number.parseInt("10.33"));
console.log(Number.parseInt("10.33"));
console.log(Number.parseInt("10 20 30"));
console.log(Number.parseInt("10 years"));
console.log(Number.parseInt("years 10"));*/ 


//console.log(Number.EPSILON)
/*console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)*/ 

/*let x=123;
console.log(x.MAX_VALUE)*/ 

/*console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);*/ 

//console.log(1/0)
//console.log(12/"us")

/*const cars=["tata", "suzuki", "honda"]
console.log(cars)*/

/*const bikes=[];
bikes[0]="harley";
bikes[1]="tvs";
bikes[2]="bajaj";
console.log(bikes)*/ 

//const bikes= new Array("re", "suzuki", "triumph");
//console.log(bikes)

//const movies=["rrr","kgf","svsc"];
//console.log(movies[0])

/*const movies=["rrr","kgf","svsc"];
movies[3]="hanuman"
console.log(movies)*/ 

/*const movies=["rrr","kgf","svsc"];
console.log(movies.toString())*/ 

//const animal=["pig","chamaleon","monkey","ape"];
//console.log(animal.length)

//const colors=["black", "white", "green","yellow"];
//console.log(colors[0]);

//const fruits=["orange","kiwi","apple","mango"];
//console.log(fruits.length-1);

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  console.log(text += "<li>" + fruits[i] + "</li>");
}
text += "</ul>";*/ 

/*const cities=["hyder","bang","kkt","wdt"];

let text="<ul>"
cities.forEach(myFunction);
text+="</ul>";

function myFunction(value){
    console.log(text+= "<li>" + value +"</li>")
}*/ 

/*const villages=["wdt","abkl","krp","pal"];
villages.push("srpr");
villages[villages.length]="crp";
console.log(villages)*/ 

/*const lappy=["hp","asus","msi"];
lappy[5]="dell";
console.log(lappy)*/ 

/*const person=[];
person[0]="jack";
person[1]="sparrow";
person[2]="captain";
console.log(person.length);
console.log(person[0]);*/ 


/*let person=[];
person["fName"]="jack";
person["sName"]="sparrow";
person["honor"]="captain";
console.log(person);
console.log(person[0]);
console.log(person.fName);*/ 

/*const leh= new Array();
console.log(leh);

const kashmir=[];
console.log(kashmir)*/ 

/*const age= new Array(25,65,56,45);
console.log(age);


const cas=[75,56,85,65,44];
console.log(cas);*/ 

/*const kgf= new Array(40);
console.log(kgf)

const kgf2=new Array(56,45);
console.log(kgf2)*/ 

/*const watch=["rolex","roadster","timex","titan"];
console.log(typeof(watch))

let klg=Array.isArray(watch);
console.log(klg)*/ 

/*const watch=["h&m","fossil","fastrack"];
let matt= watch instanceof Array 
console.log(matt)*/ 


/*let relations=["father","mother","sister","friend"];
console.log(relations.length)

console.log(relations.toString());

console.log(relations.at(1));
console.log(relations[2]);
console.log(relations.at(-1))*/ 

/*const names=["shiva","sambar","npm","javaragi"];
let jss= names.join("*");
console.log(jss)
names.pop()
console.log(names);
names.push("hari")
console.log(names)*/ 

/*const tiffins=["idli","dosa","parotta","uggani"];
tiffins.shift();
console.log(tiffins);

tiffins.unshift("chapati");
console.log(tiffins)*/

/*const curries=["chicken","mutton","paneer","capcicum"];
curries[0]="gongura";
console.log(curries);
curries[curries.length]="fish";
console.log(curries)*/

/*const numbes=[1,2,3,2,1,2,4];
delete numbes[0];
console.log(numbes) leaves an empty holes
use shift() or push or pop*/

/*const friends=["jake","jack","tony"];
const enemies=["thanos","davyjones","sniper"];
const actors=friends.concat(enemies);
console.log(actors) ;
const superheroes=["ironman","batman","spiderman"];
const holly= friends.concat(enemies, superheroes);
console.log(holly)*/ 
/*const superheroes=["ironman","batman","spiderman"];
let he=superheroes.concat("thor");
console.log(he)*/ 
/*const friends=["jake","jack","tony"];
friends.copyWithin(3,0);
console.log(friends)*/ 

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(1 , 0);
console.log(fruits)*/ 

/*const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
console.log(fruits)*/ 

/*const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(myArr);
console.log(newArr) Flattening an array is the process of reducing the dimensionality of an array.

Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.*/

/*const fruits=["apple","lemon","watermelon","pear"];
fruits.splice(2,0,"orange", "kiwi");
console.log(fruits);
fruits.splice(2,2,"guava","pomegranate");
console.log(fruits);

fruits.splice(0,2);
console.log(fruits)*/ 

/*const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

const teluguMonths=["Chaitram","Vaishakham","jyeshtam","pushyam"];
const mart=teluguMonths.toSpliced(0,1);
console.log(mart);*/ 

/*const countries=["Bharat","USA","USSR","Japan"];
const co=countries.slice(1);
console.log(co)
const coo=countries.slice(2);
console.log(coo)
The slice() method creates a new array.
The slice() method does not remove any elements from the source array.
*/ 

/*const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 5);
console.log(citrus);
console.log(fruits.indexOf("Banana"))*/

/*const insects=["mosquito","cricket","flies","mosquito","cricket"];
let position= insects.lastIndexOf("mosquito");
console.log(position);
let pos=insects.indexOf("mosquito");
console.log(pos);*/ 

/*const areas=["manikonda","shaikpet","ameerpet","musapet"];
console.log(areas.includes("ameerpet")*/


/*const numbers=[2,5,6,7,8];
let more=numbers.find(myFunction);

function myFunction(value,index,array){
    return value>7
    
}
console.log(more)*/ 

/*const numbers=[2,5,6,8,9];
let go=numbers.findIndex(myFunction);

function myFunction(value,index,array){
    return value>8
}
console.log(go)*/

/*const temp=[25,45,55,64];
let sky=temp.findLast(x=>x>60);
console.log(sky)
let oro=temp.find(x=>x>55);
console.log(oro)*/ 

/*const temp=[25,45,55,64];
let sky=temp.findLastIndex(x=>x>60);
console.log(sky)*/ 

//const cricketers=["gayle","devilliers","dhoni","virat"];
//console.log(cricketers.sort());

/*const cricketers=["sachin","dravid","laxman","ganguly"];
console.log(cricketers.sort())
console.log(cricketers.reverse());
console.log(cricketers.toSorted())*/ 

/*const numbers=[1,2,3,4,5,1000,100,15];
console.log(numbers.sort());

console.log(numbers.sort(function(a,b){return a-b}));
console.log(numbers.sort(function(a,b){return b-a}));*/ 

/*const numbers=[45,54,21,14,15,64,5];
console.log(numbers.sort(function(){return 0.5-Math.random()}))*/ 

//Fisher Yates Method 
/*const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
} 
console.log(points)*/ 

/*const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points[0]);
console.log(points[points.length-1]);*/ 

//console.log(Math.min(1,5,55));
//console.log(Math.max(65,545,589,646))

//home made method 
/*const coins=[25,100,5,55]

function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }
console.log(myArrayMin(coins));

const rupees=[1,5,10,25,50]

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }

console.log(myArrayMax(rupees))*/ 

/*const cars=[
    {type:"tata", year:2020},
    {type:"Volvo",year:2024},
    {type:"hond",year:2024}


];
console.log(cars.sort(function(a,b){return a.year-b.year}))*/ 

/*const numbers=[1,55,65,45,44];
 let txt="";
 numbers.forEach(myFunction);
 
 function myFunction(value,index,array){
    txt+=value + "<br>";
    console.log(value)
 }*/ 

 /*const numbers=[1,8,77,9,54,66];
 let txt="";
 numbers.forEach(myFunction);

 function myFunction(value){
    txt+=value+"<br>";
    console.log(value)
 }*/ 

 /*const numbers1=[45,65,54,25,12,35];
 const numbers2=numbers1.map(myFunction);

 function myFunction(value,index,array){
    return value*2
 }
 console.log(numbers2)*/ 

 /*const primes=[2,3,5,7,9,11,13];
 const nums=primes.map(myFunction);

 function myFunction(value){
    return value**2;
 }
 console.log(nums)*/ 

 /*const even=[2,4,6,8,12,14];
 const odd=even.flatMap(x=>x+1);
 console.log(odd)*/ 

 /*const nums=[1,55,54,65,45,95];
 const moreNums=nums.filter(myFunction);

 function myFunction(value){
    return value>18
 }
 console.log(moreNums)*/ 

 /*const nums=[5,55,555,2,22,222,222];
 const newnums=nums.reduce(myFunction);

 function myFunction(total,value,index,array){
    return total+value;
 }
console.log(newnums)*/ 

/*const nums=[1,2,3,4,5];
const newnums=nums.reduce(myFunction);

function myFunction(total,value){
    return total+value;
}
console.log(newnums);*/ 

/*const nums=[1,2,3,4,5,6,7];
const sum=nums.reduceRight(myFunction);

function myFunction(total,value,index,array){
    return total+value;
}
console.log(sum);*/ 

/*const nums=[1,2,3,4,5,6,7,11];
const sum=nums.reduceRight(myFunction);

function myFunction(total,value){
    return total+value;
}
console.log(sum);*/ 

/*const nums=[1,2,3,4,5,6,7];
const sum=nums.every(myFunction);

function myFunction(value,index,array){
    return value>0;
}
console.log(sum);*/ 

/*const nums=[1,2,3,4,5,6,7];
const sum=nums.some(myFunction);

function myFunction(value,index,array){
    return value>15;
}
console.log(sum)*/

//const shiv=Array.from('ABCDEFG');
//console.log(shiv)

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text=""
for (let x of keys) {
  text += x + "<br>";
  console.log(text)
}*/

/*const months=["January","February","March","Apr"];
const myMonths=months.with(3,"April");
console.log(myMonths)*/ 

/*const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year=[...q1,...q2,...q3,...q4];
console.log(year)*/

//const cars=["bmw","honda","lamborghini","ferrari","tesla"];
//cars=["tata","royce"];
//console.log(cars)

/*cars=["bmw","honda","lamborghini","ferrari","tesla"];
cars[0]="rollsRoys";
cars.push("tata");
console.log(cars);*/ 

/*const cars;
cars=["vibha"];
console.log(cars);*/

/*cars=["tata","maruti","hmt","bajaj"];
var cars;
console.log(cars);*/ 
//const d=new Date();
//console.log(d);

//const d= new Date("2024-02-07");
//console.log(d);
/*const d = new Date("2021-03-25");
d.getDate();
console.log(d);*/ 
/*const d = new Date("2021-03-25");
d.getMinutes();
console.log(d)*/ 
/*const d = new Date("2024-02-07");
d.getSeconds();
console.log(d);*/ 

//console.log(Math.PI);
//console.log(Math.round(4.56));
//console.log(Math.ceil(3.1));rounded up
//console.log(Math.floor(5.9));rounded down;

//console.log(Math.trunc(5.55)); Gives Integral part of a number;

//console.log(Math.sign(-4));

//console.log(Math.pow(8,2));
//console.log(Math.SQRT1_2);
//console.log(Math.abs(-4.8));gives positive value of that number;

//console.log(Math.min(0, 150, 30, 20, -8, -200));
//console.log(Math.max(0, 150, 30, 20, -8, -200));

//console.log(Math.random())

//console.log(Math.log(10));

//console.log(Math.floor(Math.random()*10));
//console.log(Math.random()*10);
/*console.log(getRndInteger(5,9))
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};*/ 

//console.log(Boolean(10>9));
//console.log(10<9);

//let x=0;
//console.log(Boolean(x));

//let x=-1;
//console.log(Boolean(x));

/*let x="";
console.log(Boolean(x));

let y="Shiva";
console.log(Boolean(y));*/

/*if (new Date().getHours()<10){
  console.log("go and do some work");

}else{
  console.log("Good morning");
};*/ 

/*if (new Date().getTime()<10){
  console.log("gm");
} else if(new Date().getTime()<15){
  console.log("gafn");
} else{
  console.log("ge")
}*/ 

/*switch (new Date().getDay()){
  case 0:
    console.log(day="Sunday");
    break;
  case 1:
    day=console.log("Monday");
    break;
  case 2:
    day=console.log("Tuesday");
    break;
  case 3:
    day=console.log("Wednesday");
    break; 
  case 4:
    day=console.log("Thursday");
    break;
  case 5:
    day=console.log("Friday");
    break;
  case 6:
    day=console.log("Saturday");
    break;
}*/ 

/*let x=1;

switch (x){
  case 0:
    text=console.log("OFF");
    break;
  case 1:
    text=console.log("ON");
    break;
  default:
    text=console.log("No Value");
}*/

//document.getElementById("demo1").innerHTML="Hello World"
/*const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;*/


/*const x=document.forms["newton"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;*/ 

/*switch(new Date().getDay()){
  case 0:
    day="Sunday";
    console.log(day);
    break;
    case 1:
    day="Monday";
    console.log(day);
    break;
    case 2:
    day="Tuesday";
    console.log(day);
    break;
    case 3:
    day="Wednesday";
    console.log(day);
    break;
    case 4:
    day="Thursday";
    console.log(day);
    break;
    case 5:
    day="Friday";
    console.log(day);
    break;
    case 6:
    day="Saturday";
    console.log(day);
    break;
}*/ 

/*switch(new Date().getDay()){
  case 0:
    day="Saturday";
    console.log(day);
    break;
  case 6:
    day="Sunday";
    console.log(day);
    break;
  default:
    console.log("looking forward to the day")
}*/

/*let x=1;

switch(x){
  case 0:
    text="OFF";
    console.log(text);
    break;
  case 1:
    text="ON";
    console.log(text);
    break;
  default:
    console.log("looking for value")
}*/

/*const cars=["audi","benz","bmw","tata"];

let text="";

for(let i=0; i<cars.length; i++){
  text+=console.log(cars[i] )+"<br>"
let image= document.getElementById("image").addEventListener("change", function(event){
  var file=event.target.files[0];
  var reader=new FileReader();

  reader.onload=function(e){
    var previewImage=document.getElementById("previewImage");
    previewImage.src=e.target.result;
    previewImage.style.display='block';
  };
  reader.readAsDataURL(file);

})
}*/ 

let image=document.getElementById("image").addEventListener('change', function(event){
  var file=event.target.files[0];
  var reader= new FileReader();

  reader.onload=function(e){
    var previewImage=document.getElementById("previewImage");
    previewImage.src= e.target.result;
    previewImage.style.display='block'
  };
  reader.readAsDataURL(file)
})

function onSubmit(){
  let fname= document.getElementById("fname").value;
  let phone= document.getElementById("mobile").value;
  let lname= document.getElementById("lname").value;
  let valid=document.getElementById("demo");
  let validln=document.getElementById("remo");
  let validmn=document.getElementById("bemo");
  let validsu=document.getElementById("memo");
 
  if (fname.length<4){
    valid.innerHTML="Please Enter First Name";
    valid.style.backgroundColor="brown";

  } else if (fname.length>=4){
    valid.style.display="none";
  };

   if(lname.length<1) {
    validln.innerHTML="Please Enter Last Name";
    validln.style.backgroundColor="brown";
  }else if(lname.length>=1){
    validln.style.display="none";
  };
   if(phone.length!=10){
    validmn.innerHTML="Please Enter Valid Mobile Number";
    validmn.style.backgroundColor="brown"
  } else if(phone.length==10){
    validmn.style.display="none";

  };
  if (fname.length>=4 && lname.length>=1 && phone.length==10){
    validsu.innerHTML="form is submitted";
    validsu.style.backgroundColor="green";
  };
}
  


















    




