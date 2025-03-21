console.log("Hello World");

/*------------------------Conditions and Loops ------------------------------*/

/*Write a JavaScript program that displays the largest integer among two integers.*/

// let largest_number = (a,b)=>{
//     if(a > b) {
//         console.log("Largest Number : " + a);
//     } else {
//         console.log("Largest Number : " + b);
//     }
    
// }

// largest_number(2,5)


/*Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.*/

// function signchanger(a,b,c){
//     if(a*b*c > 0) {
//         console.log("Sign is positive (+)")
//     }
//     else{
//         console.log("Sign is Negativer (-)")
//     }
// }

// signchanger(3,-9,5)

/*Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.*/
// function sorter(a,b,c){
//     if(a > b && a > c){
//         if(c > b){
//             console.log(a,c,b)
//         }
//         else{
//             console.log(a,b,c)
//         }
//     }
//     else if(b>a && b > c){
//         if(a > c){
//             console.log(b,a,c)
//         }
//         else{
//             console.log(b,c,a)
//         }
//     }
//     else if(c> a && c > b){
//         if(a > b){
//             console.log(c,a,b)
//         }
//         else{
//             console.log(c,b,a)
//         }
//     }
// }

// sorter(10,11,12)

/*Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.*/

// function even_odd_finder(){
//     for(let x =1; x<=15; x++){
//         if(x%2==0){
//             console.log("Even Value "+  x)
//         }
//         else{
//             console.log("Odd Value : " + x)
//         }
//     }
// }

// even_odd_finder()

/*Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
*/

// let average_marking = (student)=>{
//     let average = 0;
//     let total_val = 0
//     for(let data of student){
//         total_val  += data[1]
        
//     }
//     average =  total_val / student.length 
//     console.log(average)

//     if(average > 90 && average <= 100 ){
//         console.log("Average Grade is A")
//     }
//     else if(average > 80 && average <=90){
//         console.log("Average Grade is B")
//     }
//     else if(average > 70 && average <=80){
//         console.log("Average Grade is C")
//     }
//     else if(average > 60 && average <= 70 ){
//         console.log("Average Grade is D")
//     }
//     else if(average > 60 ){
//         console.log("Average Grade is F")
//     }
// }

// let student_data = [["David", 80], ["Vinoth", 77], ["Divya",88],["Ishitha",95],["Thomas", 68]]

// average_marking(student_data)



/*According to Wikipedia a happy number is defined by the following process :

"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".

*/


// function HappyNummber(num){
//     let numberCollection =[]
//     if(num){
//         while(num !== 1 ){
//             if(numberCollection.includes(num)){
//                 console.log("Its Not a Happy Number");
//                 console.log(numberCollection);
//                 return
//             }


//             numberCollection.push(num);


//             num = num.toString().split('').map((e)=> e**2).reduce((total, val)=> total + val, 0)
//         }
//     }

//     console.log("Number is Happy Number");
//     console.log(numberCollection)
// }

// HappyNummber(49)


/*Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".*/

// function fizzBuzz(){
//     for(let x = 1; x<=100; x++){
//         if(x%3==0 && x%5==0){
//             console.log("FizzBuzz " + x)
//         }else if(x%5==0){
//             console.log("Buzz " + x)
//         }else if(x%3==0){
//             console.log("Fizz " + x)
//         }
//     }
// }

// fizzBuzz()


/*Write a JavaScript program to find the Armstrong numbers of 3 digits.

Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.*/

// function Armstrong(num){
//     if(num){
//     let  result = num.toString().split('').map((val)=>val**3).reduce((total, val)=>total + val, 0);
//         if(num === result){
//             console.log("Its an Armstrong Number")
//         }
//         else{
//             console.log("Its not an Armstrong Number")
//         }
//     }
// }

// Armstrong(371)

/*Write a JavaScript program to construct the following pattern, using a nested for loop.*/

// function pattern(num){
//     let str ="";
//     for(let x=0; x<=num; x++){
//         for(let y = 1; y<=x; y++ ){
//             str += "*"
//         }
//         str += "\n"
//     }

//     console.log(str)
// }

// pattern(6)


/*Write a JavaScript program to sum 3 and 5 multiples under 1000.*/
function sum3_5(){
   let result = 0;
    for(let x = 1; x<=1000; x++){
       
        if(x%5 ==0 && x%3==0){
            console.log(x)
            result += x
        }
    }
    console.log(result)
}

sum3_5()