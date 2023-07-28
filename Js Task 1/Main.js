// Question 1
// var num=window.prompt("Enter a number")
// document.getElementById("first_line").innerHTML=num
//         ------------------------------------------------------------------------------------------------//
// Question 2
// var num=window.prompt("Enter a number")
// if(num%3==0&&num%4==0){
//     document.getElementById("first_line").innerHTML="Yes"
// }
// else{
//     document.getElementById("first_line").innerHTML="No"

// }
// //         ------------------------------------------------------------------------------------------------//
// // Question 3
// var num1=window.prompt("Enter Num 1")
// var num2=window.prompt("Enter Num 2")
// var max=Math.max(num1,num2)
//  document.getElementById("first_line").innerHTML=max
// //          ------------------------------------------------------------------------------------------------//
// Question 4
// var num1=window.prompt("Enter a number")
// if(num1<0){
//      document.getElementById("first_line").innerHTML="negative"

// }
// else {
//     document.getElementById("first_line").innerHTML="positive"

// }
// //          ------------------------------------------------------------------------------------------------//
// // Question 5
// var num1=window.prompt("Enter number 1")
// var num2=window.prompt("Enter number 2")
// var num3=window.prompt("Enter number 3")
// document.getElementById("first_line").innerHTML= "Max number is "+Math.max(num1,num2,num3)
// document.getElementById("Second_line").innerHTML="Min number is "+Math.min(num1,num2,num3)
// //          ------------------------------------------------------------------------------------------------//
// Question 6 & 7
// var num1=window.prompt("Enter a number")
// if(num1%2==0){
//      document.getElementById("first_line").innerHTML="even"

// }
// else {
//     document.getElementById("first_line").innerHTML="odd"

// }
// //          ------------------------------------------------------------------------------------------------//
// // Question 8
// var vowels =['a',"e","i","o","u"]
// var character=window.prompt("Enter a character")
// var isvowel=false
// for(let i=0;i<vowels.length;i++){
// if(character==vowels[i]){
//     isvowel=true    
//     break
// }
// }
// if(isvowel){
//     window.alert("Vowel")
//     }
// else{
//     window.alert("Consonant")

// }
// //          ------------------------------------------------------------------------------------------------//

// question 9
// var number=window.prompt("Enter a number")
// numbersPrinted=""
// for(let i=1;i<=number;i++){9
//     numbersPrinted+=i+" "
// }

// document.getElementById("first_line").innerHTML=numbersPrinted
// //          ------------------------------------------------------------------------------------------------//
// question 10

// var number=window.prompt("Enter a number")
// numbersPrinted=""
// for(let i=1;i<=12;i++){
//     numbersPrinted+=number*i+" "
// }

// document.getElementById("first_line").innerHTML=numbersPrinted
// //          ------------------------------------------------------------------------------------------------//

// // Question 11
// var number=window.prompt("Enter a number")
// numbersPrinted=""
// for(let i=1;i<=number;i++){
//     if(i%2==0){
//         numbersPrinted+=i+" "
//     }
// }
// document.getElementById("first_line").innerHTML=numbersPrinted
// //          ------------------------------------------------------------------------------------------------//
// // Question 12 
// var number =window.prompt("Enter a number")
// var power =window.prompt("Enter the power")
// window.alert(Math.pow(number,power))
// //          ------------------------------------------------------------------------------------------------//
// // Question 12 (second one)
// sum=0
// for(let i=1;i<=5;i++){
//     var mark=Number(window.prompt("Enter Mark "+i))
// sum+=mark
// }
// window.alert("Total marks: "+sum)
// window.alert("Average marks: "+sum/5)
// //it will be the same as the above one as the max mark=100
// window.alert("percentage: "+(sum/(5*100))*100)
// //          ------------------------------------------------------------------------------------------------//
// // Question 13
// var monthNumber=window.prompt("Month number ")
// $30DaysMonths=[4,6,9,11]
// is31Days=true;
// if(monthNumber==2){
//     window.alert("Days in Month: "+ 28)
//     is31Days=false
// }
// for(let i=0;i<$30DaysMonths.length;i++){
//     if(monthNumber==$30DaysMonths[i]){
//         is31Days=false
//         window.alert("Days in Month: "+ 30)
//         break
//     }
// }
// if(is31Days){
//     window.alert("Days in Month: "+ 31)

// }
// //          ------------------------------------------------------------------------------------------------//
// // Question 14
// for(let i=0;i<5;i++){
//     var mark=window.prompt("Ener mark "+(i+1))
//     var percentage=(mark/100)*100 //will be the same as mark because we assume the full mark is 100
//     if(percentage>=90){
//         window.alert("Grade A")
//     }
//     else if(percentage>=80){
//         window.alert("Grade B")

//     }
//     else if(percentage>=70){
//         window.alert("Grade C")

//     }
//     else if(percentage>=60){
//         window.alert("Grade D")

//     }
//     else if(percentage>=40){
//         window.alert("Grade E")

//     }
//     else {
//         window.alert("Grade F")

//     }
// }
// //          ------------------------------------------------------------------------------------------------//
// // Question 15
// var monthNumber=Number(window.prompt("Month number "))
// $30DaysMonths=[4,6,9,11]
// switch(monthNumber){
//     case 4:
//         window.alert("Days in Month: "+30)
//         break
//     case 6:
//         window.alert("Days in Month: "+30)
//         break
//     case 9:
//         window.alert("Days in Month: "+30)
//         break
//     case 11:
//         window.alert("Days in Month: "+30)
//         break
//     case 2:
//         window.alert("Days in Month: "+28)
//         break
//     default:
//         window.alert("Days in Month: "+31)
// }
// //          ------------------------------------------------------------------------------------------------//
// // Question 16
// var vowels =["a","e","i","o","u"]
// var character=window.prompt("Enter a character")
// var isvowel=false
// switch (character){
//     case "a":
//         window.alert("Vowel")
//         break
//     case "e":
//         window.alert("Vowel")
//         break
//     case "i":
//         window.alert("Vowel")
//         break
//     case "o":
//         window.alert("Vowel")
//         break
//     case "u":
//         window.alert("Vowel")
//         break
//     default:
//         window.alert("consonant")
// }
// //          ------------------------------------------------------------------------------------------------//
// // Question 17
// var numebr1=window.prompt("Enter number 1 ")
// var numebr2=window.prompt("Enter number 2 ")
// var subtract=numebr1-numebr2
// switch(subtract>0){
//     case true:
//         alert("Max number is "+numebr1)
//         break
//     case false:
//         alert("Max number is "+numebr2)
//         break
// }
// //          ------------------------------------------------------------------------------------------------//

// // Question 18
// var number=Number(window.prompt("Enter a number "))
// switch(number%2==0){
//     case true:
//         window.alert("Even")
//         break
//     case false:
//         window.alert("Odd")
//         break
// }
// //          ------------------------------------------------------------------------------------------------//
// // Question 19
// var number=Number(window.prompt("Enter a number "))
// switch(true){
//     case number>0:
//         window.alert("Positive")
//         break
//     case number<0:
//         window.alert("Negative")
//         break
//     default:
//         window.alert("Zero")
// }
//         //  ------------------------------------------------------------------------------------------------//
// Question 20
// var number1 =Number(window.prompt("Enter number 1 "))
// var number2 =Number(window.prompt("Enter number 2 "))
// var operation=window.prompt("Enter the operation (+,-,*,/)")
// switch(operation){
//     case "+":
//         document.getElementById("first_line").innerHTML=number1+"+"+number2+"="+(number1+number2)
//         break
//     case "-":
//         document.getElementById("first_line").innerHTML=number1+"-"+number2+"="+(number1-number2)
//         break
//     case "*":
//         document.getElementById("first_line").innerHTML=number1+"*"+number2+"="+(number1*number2)
//         break
//     case "/":
//         document.getElementById("first_line").innerHTML=number1+"/"+number2+"="+(number1/number2)
//         break
// }