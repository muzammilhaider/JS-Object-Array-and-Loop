//Arrays
// ques 1
// var names = [];

// ques 2
// var names = new Array();

// ques 3
// var string_array = ['name','email','age','phone_number'];

// ques 4
// var number_array = [2,4,6,8,10];

// ques 5
// var boolean_array = [true,false,true,false];

// ques 6
// var mixed_array = ['name','email',25,123465798,true];

// ques 7
// var qualifications = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD'];
// for(var i = 0; i < qualifications.length; i++){
//     document.write((i+1)+") "+qualifications[i]+"<br>");
// }

// ques 8
// var stdName = ['Michael','John','Tony'];
// var score = [320,230,480];
// for(var i = 0; i < stdName.length; i++){
//     var percentage = (score[i] / 500) * 100;
//     document.write("Score of " + stdName[i] + " is " + score[i] + ". Percentage: " 
//     + percentage + "%" + "<br>");
// }

// ques 9
// var color = ['red','blue','yellow','green'];
// var userInput = prompt("Enter color");
// a)
// color.unshift(userInput);
// var flag = true;
// for(var i = 0; i < color.length; i++){
//     document.write(color);
//     break;
// }

// b)
// color.push(userInput);
// var flag = true;
// for(var i = 0; i < color.length; i++){
//     document.write(color);
//     break;
// }

// c)
// var userColor = 2;
// var arr = [];
// for(var i = 1; i <= userColor; i++){
//     arr.push(prompt("Enter Color"));
// }
// color.unshift(arr.join(','));
// document.write(color);

// d)
// color.shift();
// document.write(color);

// e)
// color.pop();
// document.write(color);

// f)
// var userIndex = +prompt("Enter Index Number");
// var userColor = prompt("Enter color");
// color.splice(userIndex,0,userColor);
// document.write(color);


// ques 10
// var scores = [320,230,480,120];
// document.write("Scores of Students : " + scores);
// scores.sort();
// document.write("<br>Ordered scores of Students : " + scores);

// ques 11
// var cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
// document.write("Cities list:<br>" + cities);
// var selectCities = cities.slice(2,4);
// document.write("<br><br>Selected cities list: <br>"+selectCities);

// ques 12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array:<br>"+arr);
// // arr.join(" , ");
// document.write("<br><br>String:<br>"+arr.join(" "));

// ques 13
// var arr = ['keyboard','mouse','printer','monitor'];
// document.write("Devices:<br>"+arr+"<br>");
// for(var i = 0; i < arr.length; i++){
//     document.write("<br>Out:<br>" + arr[i]);
// }

// ques 14
// var arr = ['keyboard','mouse','printer','monitor'];
// document.write("Devices:<br>"+arr+"<br>");
// for(var i = arr.length - 1; i >= 0; i--){
//     document.write("<br>Out:<br>" + arr[i]);
// }

// ques 15
// var phones = ['Apple','Samsung','Motorola','Nokia','Sony','Haier'];
// document.write("<select>");
// for(var i = 0; i < phones.length; i++){
//     document.write("<option>"+ phones[i] +"</option>");
// }
// document.write("</select>");


//Arrays and Loops
// ques 1
// var arr = [[],[]];

// ques 2
// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// ques 3
// for(var i = 1; i <= 10; i++){
//     document.write(`${i} <br>`);
// }

// ques 4
// var table = +prompt("Enter a number to show its multiplication table");
// var tableLength = +prompt("Enter length multiplication table");
// document.write(`Multiplication table of ${table} of Length ${tableLength}`);
// for(var i = 1; i <= tableLength; i++){
//     document.write(`${table} x ${i} = ${table * i} <br>`);
// }

// ques 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     document.write(`${fruits[i]} <br> `);
// }
// document.write("<br>");
// for(var i = 0; i < fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`);
// }

// ques 6
// a)
// for(var i = 1; i <= 15; i++){
//     document.write(`${i},`);
// }
// b)
// for(var i = 10; i >= 1; i--){
//     document.write(`${i},`);
// }
// c)
// for(var i = 0; i <= 20; i = i+2){
//     document.write(`${i},`);
// }
// d)
// for(var i = 1; i <= 20; i = i+2){
//     document.write(`${i},`);
// }
// e)
// for(var i = 0; i <= 20; i = i+2){
//     document.write(`${i}k,`);
// }

// ques 7
// var arr = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("What do you want to order?");
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] == search){
//         document.write(`${arr[i]} is <b>available</b> at index ${i} in our bakery`);
//     }
//     else{
//         document.write(`We are sorry. ${search} is <b>not available</b> in our bakery.`);
//         break;
//     }
// }

// ques 8
// var arr = [24,53,78,91,12];
// document.write(`Array items ${arr} <br>`);
// document.write(`Largest number is ${Math.max(...arr)}`);

// ques 9
// var arr = [24,53,78,91,12];
// document.write(`Array items ${arr} <br>`);
// document.write(`Smallest number is ${Math.min(...arr)}`);

// ques 10
// for(var i = 5; i <= 100; i = i+5){
//     document.write(`${i},`);
// }