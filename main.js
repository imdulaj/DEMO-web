// there are 3 variable types -------> var , const , let

var age = 26;
var gfAge = 26;

var myname = "dulaj";

 console.log(age+ gfAge);
 console.log(myname);

 // aritmatic operators -----> + , - ,/ ,* ,%

 var val1 = 20;
 var val2 = 10;

 console.log(val1+val2);

 /* this is
 multiline comment*/

 //js object

 var student1 = {"brand":"bmw", "model":"x1", "year":2022, "isItBrandnew":true }


 //js array

 var marks=[78,89,90, "dulaj",'B'];

//---------------------------------------------------

 //functions

 function myFunc(){
    console.log("hello my function");
 }

 //call to function

 myFunc();

 //---------------------------------------------------

 //concat  -----------> its mean string + integer

 var mynamne = "dulaj";
 var num1 = 10;

 console.log(mynamne + num1);





//--------------------------------------------------------------------

function multinumbers(){
     var num1= document.getElementById("num1").value;
     var num2= document.getElementById("num2").value;

     var answer = num1 - num2;

     console.log(answer);

}
multinumbers();


// sample function----------------

function greetUs(){

    var date = 8;

    console.log("Hello Good Morning.. Today is "+date);
}

greetUs();


// parameter function---------------------------------

function modifyName(name, age){
    console.log("your name is "+name);
    console.log("your age is "+age);
}

modifyName("indula",23);







//======================================================================================
//task 1

function generateAge(){
    var num = document.getElementById("age").value;

    var final = num + 5;

    console.log("After 5 years, your age is "+final);
}

generateAge();






//=========================================================================================

var test= 6;

if(test<4){
    console.log("hello if...");
}else{
    console.log("hello else...");
}



//======================================================



function matching(){

    var age1= document.getElementById("uAge").value;
    age1= parseInt(age1);
    var age2= document.getElementById("gAge").value;
    age2= parseInt(age2);
    var uname= document.getElementById("namee").value;


    if(age1>age2){
        alert(uname+ " you both match...");
    }else{
        alert(uname+ " you both mismatched...");
    }
    
}

matching();



//=============================================================

function calAve(){

    var html = document.getElementById("marks1").value;
    html = parseInt(html);
    var css = document.getElementById("marks2").value;
    css = parseInt(css);
    var js = document.getElementById("marks3").value;
    js = parseInt(js);

    ave = (html + css + js)/3;

    //alert("Average is " + ave);

    if(ave>75){
        alert("A");
    }else if(ave>65){
        alert("B");
    }else if(ave>55){
        alert("C");
    }else if(ave>35){
        alert("S");
    }else{
        alert("F");
    }
}

calAve();



//========================================================================================

function checkName(){

    var name1 = document.getElementById("gf").value;
    console.log(name1.charAt(0));
    var name2 = document.getElementById("bf").value;
    console.log(name2.charAt(0));

    if(name1==name2){
        alert("you both matched");
    }else{
        alert("you both mismatched");
    }
}

checkName();



//===========================================================================================

function relation(){

    var email = "admin@gmail.com";
    var password = "admin123";

    var userEmail = document.getElementById("mail").value;
    var userps = document.getElementById("ps").value;

    if(email==userEmail){
        alert("Login success");
    }else{
        alert("relogin");
    }


}

relation();