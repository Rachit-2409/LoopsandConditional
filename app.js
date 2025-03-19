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

