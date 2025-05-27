
// Question # 1

// ✅ 1. Online Course Enrollment Processor
// Scenario:
// An online platform tracks course enrollments for students. Each enrollment includes the
// student's name, selected course, and enrollment date.
// Task:
// Write a function that processes an array of enrollment objects, each containing:
// ● name: Name of the student.
// ● course: The name of the course.
// ● enrollmentDate: The date the student enrolled.

// The system should:
// 1. Use switch to assign a fee to each course:
// ○ Web Development: $200
// ○ Data Science: $250
// ○ Graphic Design: $150
// 2. Use if-else to apply a 10% early bird discount for enrollments made more than 30
// days before the course start date.
// 3. Format student names and courses using string methods (capitalize first letter of each
// word).
// 4. Use date methods to calculate the duration since enrollment.
// 5. Use array methods to generate a summary of enrollments and fees.

// let fee = 0
// let studentsData = [
//     {
//         name : "ali ahmed",
//         course: "web development",
//         enrollmentDate : "2-1-2025"
//     },
//     {
//         name : "hamza",
//         course: "data science",
//         enrollmentDate : "3-1-2025"
//     },
//     {
//         name : "zain",
//         course: "graphic design",
//         enrollmentDate : "4-1-2025"
//     }
// ]


//  function getDaysNumber(coursedate,enrollmentdate) {
//     if (+coursedate === +new Date()) {
//      let   days = Math.floor((coursedate-enrollmentdate) / (1000 * 60 * 60 * 24));
//      let months = days/30
//      console.log(days,months)
//         return {
//             day : days,
//             month : months
//         } 
//  }
//   else {
//          return    Math.floor((coursedate-enrollmentdate) / (1000 * 60 * 60 * 24));
//         } 
// }

//  function capitalizeFirstLetter(studentname,coursename) {
//     let capitalStudent = studentname.split(" ").map(name=>{
//        return  name.charAt(0).toUpperCase()+ name.slice(1)
//     }).join(" ")
//     let capitalCourse = coursename.split(" ").map(name=>{
//        return  name.charAt(0).toUpperCase()+ name.slice(1)
//     }).join(" ")
//     return {
//         name : capitalStudent,
//         course : capitalCourse
//     }

//  }

// function courseEnrollment(coursedate,student) {

//   let done =   student.map(student=>{
//  switch (student.course) {
//         case "web development":
//                fee =  200         
//             break;
//     case "data science":
//                fee =  250           
//             break;
//             case "graphic design":
//                fee =  150           
//             break;
//     }
//  let days =   getDaysNumber(new Date(coursedate),new Date(student.enrollmentDate)) 
 

// if(days > 30){
//  let discount = fee*0.1
//  fee = fee-discount
//       }
    
// let capitalize =   capitalizeFirstLetter(student.name,student.course)

    
// let duration =    getDaysNumber(new Date(),new Date(student.enrollmentDate)) 

// return {
// studentInfo : capitalize,
// courseFee : `${fee}$`,
// duration : duration
// }
//     })
   
// return done

// }




// let result = courseEnrollment("1-1-2025",studentsData)

// console.log(result)


// Question # 2

// ✅ 2. Employee Payroll System
// Scenario:
// You are developing a payroll system for employees. Each employee has a salary, hours worked,
// and bonus eligibility.
// Task:
// Write a function that processes an array of employee objects, each containing:
// ● employeeName: The name of the employee.
// ● baseSalary: The base salary of the employee.
// ● hoursWorked: The total number of hours worked.
// ● eligibleForBonus: Boolean flag indicating if the employee is eligible for a bonus.

// The system should:
// 1. Calculate the overtime pay (1.5x the base rate) for any hours worked beyond 40.
// 2. Use switch to apply a bonus based on eligibility:
// ○ If eligible, apply a 10% bonus to the base salary.
// ○ If not eligible, no bonus.
// 3. Use if-else to check if the total salary exceeds $100,000, applying a tax rate of 30%
// for high earners.
// 4. Use string methods to format employee names.
// 5. Use array methods to calculate and display the total payroll.

// let employeeData = [
//     {
//         employeeName : "ali shah",
//         baseSalary : 200000,
//         hoursWorked : 22,
//         eligibleForBonus : true,
//         id :1
        
//     },
//         {
//         employeeName : "abbas ahmed",
//         baseSalary : 200,
//         hoursWorked : 60,
//         eligibleForBonus : true,
//          id :2
//     },
//         {
//         employeeName : "fahad mustafa",
//         baseSalary : 350,
//         hoursWorked : 44,
//         eligibleForBonus : false,
//          id :3
//     },
// ]


// function overTimePay(hours) {
//     //assume base rate is 10$ per hour 
//     hours = hours>40 ? hours-40 : false
//     return (1.5*10)*hours
// }

// function Bonus(eligibility, salary) {
//     //short statement below can also be used
//   // return eligibility ?  (salary * 0.1) : 0;
//   let bonus =0
//   switch (eligibility) {
//     case true:
//        bonus =  (salary * 0.1)
//         break;
  
//     default:
//         bonus = 0
//         break;
//   }
//   return bonus
// }

// function highEarnersTax(salary) {
//     //short statement below can also be used
//  // return  salary = salary>100000 ?  (salary*0.3) : salary
//  let tax =0 
//   if(salary>100000){
//     tax =  (salary*0.3)
//   }
 
//   return tax
// }

// function capitalizeFirstLetter(empname) {
//    let capitalName =   empname.split(" ").map(name=>{
//        return  name.charAt(0).toUpperCase()+ name.slice(1)
//     }).join(" ")
  
//    return capitalName
//  }

// function employeePayRollManager() {
//     let payments
//     let salary

//     let payments1 = []
//      let payments2 = []
//       let payments3 = []
//    let data =  employeeData.map(employee=>{
//        let overtimepay =  overTimePay(employee.hoursWorked)
//        let bonus = Bonus(employee.eligibleForBonus,employee.baseSalary)
//        let tax = highEarnersTax(employee.baseSalary)
//     let capitalName =  capitalizeFirstLetter(employee.employeeName)
// switch (employee.id) {
//     case 1:
//         payments1.push(overtimepay, bonus, tax , employee.baseSalary);
//         payments = payments1;
//         let tax1 = payments[2]
//        salary =   payments.filter(val => val !== tax1)         // keep everything except tax
//   .reduce((sum, val) => sum + val, 0)-tax1 // add up
//         break;
//     case 2:
//         payments2.push(overtimepay, bonus, tax , employee.baseSalary);
//         payments = payments2;
//           let tax2 = payments[2]
//         salary =  payments.filter(val => val !== tax2)         // keep everything except tax
//   .reduce((sum, val) => sum + val, 0) // add up
//         break;
//     case 3:
//         payments3.push(overtimepay, bonus, tax , employee.baseSalary);
//         payments = payments3;
//           let tax3 = payments[2]
//        salary =   payments.filter(val => val !== tax3)         // keep everything except tax
//   .reduce((sum, val) => sum + val, 0) // add up
//         break;
//     default:
//         payments = [];
//         break;
// }

    

//        return {
//         employeeName : capitalName,
//        pays : payments,
//        totalSalary : salary
       
//        }

//     })
//     return data 
// }



// console.log(employeePayRollManager())



// Question # 3
// ✅ 3. Temperature Converter
// Scenario:
// You are building a temperature converter that converts between Celsius, Fahrenheit, and Kelvin.
// Task:
// Write a function that:
// 1. Takes in a temperature value and a unit (Celsius, Fahrenheit, or Kelvin).
// 2. Use switch to convert the given temperature to the other two units (e.g., Celsius to
// Fahrenheit and Kelvin).
// 3. Return the converted temperature values.


// function temperatureConverter(unit,value) {
//     let temp
//     switch (unit) {
//         case '1':
//             temp = (value * 9/5) + 32 + " F"
//             break;
//      case '2':
//             temp = value + 273.15  + " K"
//             break;
//              case '3':
//             temp = (value - 32) * 5/9 + " C"
//             break;
//              case '4':
//             temp = (value - 32) * 5/9 + 273.15 + " K"
//             break;
//              case '5':
//             temp = (value) - 273.15 + " C"
//             break;
//              case '6':
//             temp = (value) - 273.15 * 9/5 + 32 + " F"
//             break;
//         default:
//             window.alert("invalid input")
//             break;
//     }
//     return temp
// }

// let converter  = window.prompt("Select Converter🔂\n1.celsius to fahrenheit\n2.celsius to kelvin\n3.fahrenheit to celcius\n4.fahreinheit to kelvin\n5.kelvin to celsius\n6.kelvin to fahreinheit")
// let temp = window.prompt("Enter Temperature🌡")
// window.alert(temperatureConverter(converter,temp))


// Question # 4

// ✅ 4. Banking System (Using Switch Case, Functions, and Loops)
// Scenario:
// You are developing a banking system that allows users to check their balance, deposit money,
// withdraw money, and transfer money to other users.
// Task:
// 1. Create an array of users, where each user has:
// ○ name (user’s name),
// ○ balance (user’s current balance).
// 2. Write a function that takes the user’s action (e.g., "deposit", "withdraw",
// "transfer", "checkBalance") and updates the user’s balance accordingly.
// 3. Use switch to handle the user’s action and:
// ○ For "deposit", add the deposit amount to the balance.
// ○ For "withdraw", subtract the withdrawal amount from the balance.
// ○ For "transfer", transfer money between users.
// 4. Return the updated balance after the action is performed.


// let usersData = [
//   { name: "Abdullah", balance: 200, password: 22, accNo: 1912 },
//   { name: "Raiz Saleem", balance: 200, password: 33, accNo: 3421 },
//   { name: "Raheel", balance: 300, password: 44, accNo: 9801 },
//   { name: "Zubair", balance: 400, password: 55, accNo: 7832 }
// ];

// function Bank(data) {
//   while (true) {
//     let password = window.prompt("Enter your password  or press e to exit");

//     if (password === null || password.toLowerCase() === "e") {
//       break; // exit the loop if user cancels or press e
//     }

//     let user = data.find((user) => user.password === Number(password));

//     if (!user) {
//       window.alert("Invalid password. Try again.");
//       continue;
//     }

//     let action = window.prompt(
//       `Welcome ${user.name}!\nChoose an action:\n1. Deposit\n2. Withdraw\n3. Transfer\n4. Check Balance\nType any other key to logout.`
//     );

//     switch (action) {
//       case "1":
//         let depositAmount = Number(window.prompt("Enter amount to deposit:"));
//         if (!isNaN(depositAmount) && depositAmount > 0) {
//           user.balance += depositAmount;
//           window.alert("Deposit successful. New balance: " + user.balance);
//         } else {
//           window.alert("Invalid amount.");
//         }
//         break;

//       case "2":
//         let withdrawAmount = Number(window.prompt("Enter amount to withdraw:"));
//         if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
//           if (withdrawAmount <= user.balance) {
//             user.balance -= withdrawAmount;
//             window.alert("Withdrawal successful. New balance: " + user.balance);
//           } else {
//             window.alert("Insufficient funds.");
//           }
//         } else {
//           window.alert("Invalid amount.");
//         }
//         break;

//       case "3":
//         let transferAmount = Number(window.prompt("Enter amount to transfer:"));
//         let receiverAcc = Number(window.prompt("Enter receiver's account number:"));
//         let receiver = data.find(
//           (u) => u.accNo === receiverAcc && u.password !== user.password
//         );

//         if (!isNaN(transferAmount) && transferAmount > 0 && receiver) {
//           if (transferAmount <= user.balance) {
//             user.balance -= transferAmount;
//             receiver.balance += transferAmount;
//             window.alert(
//               `Transfer successful to ${receiver.name}.\nYour new balance: ${user.balance}`
//             );
//           } else {
//             window.alert("Insufficient balance.");
//           }
//         } else {
//           window.alert("Invalid transfer details.");
//         }
//         break;

//       case "4":
//         window.alert("Your current balance is: " + user.balance);
//         break;

//       default:
//         window.alert("Logging out...");
//         break;
//     }
//   }
// }


// Bank(usersData);

