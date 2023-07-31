function displayInAlert(text){
window.alert(text)
}
function displayResult(text){
    document.getElementById("first_line").innerHTML=text
    }
function displayInH2(text){
    document.getElementById("Second_line").innerHTML=text

}
function GetInput(text){
    return window.prompt("Enter "+text)
}

function isVowel(character) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
     var flag=false
    for(var i=0;i<vowels.length;i++){
        if(vowels[i]==character){
            return true
        }
    }
    if(flag==false){
        return false
    }
}

// function question1() {
//     var num = GetInput("a number");
//     displayResult(num);
// }

// function question2() {
//     var num = GetInput("a number");
//     if (num % 3 == 0 && num % 4 == 0) {
//         displayResult("Yes");
//     } else {
//         displayResult("No");
//     }
// }

// function question3() {
//     var num1 = GetInput("Num 1");
//     var num2 = GetInput("Num 2");
//     var max = Math.max(num1, num2);
//     displayResult(max);
// }

// function question4() {
//     var num1 = GetInput("a number");
//     if (num1 < 0) {
//         displayResult("negative");
//     } else {
//         displayResult("positive");
//     }
// }

// function question5() {
//     var num1 = GetInput("number 1");
//     var num2 = GetInput("number 2");
//     var num3 = GetInput("number 3");
//     var maxNumber = Math.max(num1, num2, num3);
//     var minNumber = Math.min(num1, num2, num3);
//     displayResult("Max number is " + maxNumber);
//     document.getElementById("Second_line").innerHTML = "Min number is " + minNumber;
// }

// function question6&7() {
//     var num1 = GetInput("a number");
//     if (num1 % 2 == 0) {
//         displayResult("even");
//     } else {
//         displayResult("odd");
//     }
// }


// function question8() {
//     var character = GetInput("a character");
//     if (isVowel(character)) {
//         displayInAlert("Vowel")
//     } else {
//         displayInAlert("Consonant");
//     }
// }


// function question9() {
//     var number = GetInput("a number");
//     var numbersPrinted = "";
//     for (let i = 1; i <= number; i++) {
//         numbersPrinted += i + " ";
//     }
//     displayResult(numbersPrinted)
// }

// function question10() {
//     var number = GetInput("a number");
//     let numbersPrinted = "";
//     for (let i = 1; i <= 12; i++) {
//         numbersPrinted += number * i + " ";
//     }
//     displayResult(numbersPrinted);
// }

// function question11() {
//     var number = GetInput("a number");
//     let numbersPrinted = "";
//     for (let i = 1; i <= number; i++) {
//         if (i % 2 == 0) {
//             numbersPrinted += i + " ";
//         }
//     }
//     displayResult(numbersPrinted);
// }

// function question12() {
//     var number = GetInput("a number");
//     var power = GetInput("the power");
//     displayInAlert(Math.pow(number, power));
// }

// function question12Second() {
//     var sum = 0;
//     for (let i = 1; i <= 5; i++) {
//         var mark = Number(GetInput("Mark " + i));
//         sum += mark;
//     }
//     var totalMarks = "Total marks: " + sum;
//     var averageMarks = "Average marks: " + (sum / 5);
//     var percentage = "Percentage: " + (sum / (5 * 100)) * 100;
//     displayResult("Total marks: "+sum)
//     displayResult("Average marks: "+sum/5)
//         //it will be the same as the above one as the max mark=100
//     displayResult("percentage: "+(sum/(5*100))*100)
//         }

// function question13() {
//     var monthNumber = GetInput("Month number");
//      $30DaysMonths = [4, 6, 9, 11];
//     let daysInMonth;

//     if (monthNumber == 2) {
//         daysInMonth = 28;
//     } else if ($30DaysMonths.includes(parseInt(monthNumber))) {
//         daysInMonth = 30;
//     } else {
//         daysInMonth = 31;
//     }
//     displayResult("Days in Month: " + daysInMonth);
// }

// function getGrade(mark) {
//     var percentage = (mark / 100) * 100; // Assuming full mark is 100
//     if (percentage >= 90) {
//         return "Grade A";
//     } else if (percentage >= 80) {
//         return "Grade B";
//     } else if (percentage >= 70) {
//         return "Grade C";
//     } else if (percentage >= 60) {
//         return "Grade D";
//     } else if (percentage >= 40) {
//         return "Grade E";
//     } else {
//         return "Grade F";
//     }
// }
// function question14() {
//     for (let i = 0; i < 5; i++) {
//         var mark = GetInput("mark " + (i + 1));
//         var grade = getGrade(mark);
//         displayInAlert(grade);
//     }
// }

// function question15() {
//     var monthNumber = Number(GetInput("Month number"));
//     $30DaysMonths = [4, 6, 9, 11];
//     let daysInMonth;

//     switch (monthNumber) {
//         case 4:
//             daysInMonth = 30;
//             break;
//         case 6:
//             daysInMonth = 30;
//              break;
//         case 9:
//             daysInMonth = 30;
//             break;
//         case 11:
//             daysInMonth = 30;
//             break;
//         case 2:
//             daysInMonth = 28;
//             break;
//         default:
//             daysInMonth = 31;
//     }

//     displayResult("Days in Month: " + daysInMonth);
// }

// function question16() {
//     var character = GetInput("a character");
//     switch(character){
//         case "a":
//             displayInAlert("Vowel")
//             break
//         case "e":
//             displayInAlert("Vowel")
//             break
//         case "i":
//             displayInAlert("Vowel")
//             break
//         case "o":
//             displayInAlert("Vowel")
//             break
//         case "u":
//             displayInAlert("Vowel")
//             break
//         default:
//             displayInAlert("constonant")

//     }
// }

// function question17() {
//     var number1 = GetInput("number 1");
//     var number2 = GetInput("number 2");
//     var subtract = number1 - number2;
//     switch(true){
//         case subtract>0:
//             displayResult("Max number is " + number1)
//             break
//         case subtract<0:
//             displayResult("Max number is " + number2);
//             break
//         default:
//             displayResult("Max number is " + number1);
//     }   
// }
 
// function question18() {
//     var number = GetInput("a number");
//     switch(number%2==0){
//             case true:
//                 window.alert("Even")
//                 break
//             case false:
//                 window.alert("Odd")
//                 break
//         }
// }

// function question19() {
//     var number = GetInput("a number");
//     if (number > 0) {
//         window.alert("Positive");
//     } else if (number < 0) {
//         window.alert("Negative");
//     } else {
//         window.alert("Zero");
//     }
// }

function Question20(){
var number1 =(GetInput("number 1 "))
var number2 =(GetInput("number 2 "))
var operation=GetInput("Enter the operation (+,-,*,/)")
switch(operation){
    case "+":
        displayResult(number1+"+"+number2+"="+(number1+number2))
        break
    case "-":
        displayResult(number1+"-"+number2+"="+(number1-number2))
        break
    case "*":
        displayResult(number1+"*"+number2+"="+(number1*number2))
        break
    case "/":
        displayResult(number1+"/"+number2+"="+(number1/number2))
        break
}
}









function addText(id,counter,text){
    var currentDiv=document.getElementById(id)
    var senetce =""
    for(var i=0;i<counter;i++){
        senetce+="<h1>"+ text +"</h2>"
    }
    currentDiv.innerHTML=senetce
}
addText("firstdiv",10,"ITI")
addText("seconddiv",15,"Web ")
addText("thirddiv",20,"FCDS")
addText("fourthdiv",25,"ITI")
addText("fifthdiv",30,"Web ")

function addImage(id,path){
    var currentDiv=document.getElementById(id).innerHTML="<img src=images/ITI.png>"
    
}
addImage("image",123)

Question20()