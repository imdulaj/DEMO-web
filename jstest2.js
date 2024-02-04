//===================Array

var data = [12, 45, 78, 90, 89];

console.log(data);

var multiData = [1, 2, "dulaj", true, 80, 98, 100];

console.log(multiData);

//console.log(multiData[2]);

for (var i = 0; i < 5; i++) {
    console.log(multiData[i]);
}


//---------------------------------------------------------------------

var studentMarks = [50, 90, 10, 20, 30];
var total = 0;
for (var i = 0; i < 5; i++) {
    total = total + studentMarks[i];
}


average = total / 5;

console.log(total);
console.log(average);



//----------------------------------------------------------------------------

var markss = [56, 90, 78, 50];
console.log(markss);

markss.push(100);

console.log(markss);

//===============================================================

var salaryOfCompnay = [35000.00, 56000.00, 25000.00, 42000.00, 89000.00];

var netSalary = [];

for (var i = 0; i < 5; i++) {
    netS = salaryOfCompnay[i] * 0.2;
    netSalary.push(netS);

}

console.log(netSalary);




//=====================================================================

var data3 = 10;

while (data3 < 15) {
    console.log("dulaj");
    data3++;
}



//===================================================

var numberr = 567;

console.log(Math.floor(numberr / 10)); // output 56
console.log(numberr % 10);//output 7


//====================================================


function getSUM() {
    var number = document.getElementById("num").value;
    number = parseInt(number);
    var total = 0;
    var digit = 0;

    while (number == 0) {
        digit = number % 10;
        total = total + digit;
        number = Math.floor(number / 10);
    }

    alert(total);
}

getSUM();


//=====================================================================

//do while loop

var datay = 5;

do {
    console.log(" hi dulaj ");
    datay--;
} while (datay > 0);

// for each

var vehicles = ["bmw", "toyota", "lambogini", "mitsubishi"];

for (var v of vehicles) {
    console.log(v);
}


//for each use with arrays.


//======================================================================

//normal type of function creation

function createf() {

}
createf();


// other types of function creation


// first
var createfA = function () {

}
createfA();


//second - arrow function
var createfB = () => {

}
createfB();

//===========================================================================

/////////////////////////////////////////////////////////////////

//method parameters
var saveCar = (name, year) => {
    console.log(name);
    console.log(year);
}
//method arguments
saveCar("toyota", 2024);




/////////////////////////////////////////////////////////////////////


var arr = [12, 54, 32, 65, 12, 34, 32];
var removeDuplicates = (arr) => {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);


}
removeDuplicates(arr);

/////////////////////////////////////////////////////////////////////////

function getAllData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {console.log(json[0]);
        });
}
getAllData();

////////////////////////////////////////////////////////////////////////////

var savePOST = () => {

    var text1 = document.getElementById("test1").value;
    var text2 = document.getElementById("test2").value;
    var text3 = document.getElementById("test3").value;
    text3 = parseInt(text3);



    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'text1',
            body: 'text2',
            userId: 'text3',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
 
}
savePOST();


/////////////////////////////////////////////////////////////////////////////////

function norml(){
    console.log("hiiiiiiiiiiiii.........");
}
norml();




/////////////////////////////////////////////////////////////////////////////

