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
// document.write("/<select>");