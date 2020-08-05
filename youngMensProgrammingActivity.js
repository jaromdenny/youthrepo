const axios = require('axios'); 
fs = require('fs');

var name = 'john';

function doSomething(name){
    var stringtoprint = "This is the users name " + name;
    return stringtoprint
} 

var printing = doSomething(name);
console.log(printing);

//axios.get('http://www.7timer.info/bin/api.pl?lon=145&lat=-37.7&product=astro&output=json').then((output)=>{console.log(output.data)});

axios(
  {method:'get',
  url:'https://api.genderize.io',
  responseType: 'json',
  params: {
    name: name
  }})
.then((output) => {console.log(output.data)});


axios(
  {method:'get',
  url:'https://api.nationalize.io',
  responseType: 'json',
  params: {
    name: name
  }})
.then((output) => {console.log(output.data)});

axios(
  {method:'get',
  url:'https://api.agify.io',
  responseType: 'json',
  params: {
    name: name
  }})
.then((output) => {console.log(output.data)});
//axios.get('http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0').then((image)=> {fs.writeFile("image.jpeg", image, ()=> console.log("image written"))}).catch((error)=>{console.log(error)});
