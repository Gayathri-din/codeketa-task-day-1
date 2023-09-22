//part 1

/*alert("I’m invoked!");
alert("I'm JavaScript!");
alert('Hello'); // this line is not having semicolon
alert('World');
alert(3 +1+2); // this is multiple line code and its working*/


/*let admin=9; fname=10.5; 
fname = "Guvi";
lname = "geek";
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"*/

/*let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( `hello ${name}` );*/

/*let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);*/


/*var a = 2 > 12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

beacuse number is in the string */


/*var b = (prompt("Enter a number?"));
a=parseInt(b)
//Don't modify any code below this
if (a){
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}*/

/*let value =parseInt( prompt('How many runs you scored in this ball'));
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}*/

/*let message;
if (null || 2 || undefined )
{
   message = "welcome employee";
}
else
{
  message = "Go away";
}
  console.log(message);
  
  // You cant change the value of the msg
let message;
let lock=null;
if (null || lock || undefined )
{
  message = "welcome boss";
}
else
{
  message = "Go away";
}
  console.log(message);*/
  /*let i = 3;
while (i) {
  console.log( i-- );
}*/

 /* let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)*/

/*var lemein = '0';
var lemeout = 0;
var msg = '';
if (lemein) {
 msg += 'hi';
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);*/
//You are allowed to modify only one character 
/*for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}*/

//part 2
/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);*/


/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = new String(numsArr[0]);
 
for (var i = 1; i < 11; i++) {
 new_string += "," +numsArr[i] 
}
console.log(new_string);*/


/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = new String(numsArr[10]);
 
for (var i = 9; i >= 0; i--) {
 new_string += " "+ numsArr[i] 
}
console.log(new_string);*/

/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);*/


/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if((i+1) %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);*/

/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 
 sum += numsArr[i]
}
console.log(sum);*/


/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0);
 sum += numsArr[i]
}
console.log(sum);*/

/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);*/

/*var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="0";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);*/
