
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

let employeeData = [
    {
        employeeName : "ali shah",
        baseSalary : 200000,
        hoursWorked : 22,
        eligibleForBonus : true
    },
        {
        employeeName : "abbas ahmed",
        baseSalary : 200,
        hoursWorked : 60,
        eligibleForBonus : true
    },
        {
        employeeName : "fahad mustafa",
        baseSalary : 350,
        hoursWorked : 44,
        eligibleForBonus : false
    },
]

function overTimePay(hours) {
    //assume base rate is 10$ per hour 
    hours = hours>40 ? hours-40 : false
    return (1.5*10)*hours
}

function Bonus(eligibility, salary) {
    //short statement below can also be used
  //  return eligibility ? salary + (salary * 0.1) : salary;
  switch (eligibility) {
    case true:
        salary = salary + (salary * 0.1)
        break;
  
    default:
        break;
  }
  return salary
}

function highEarnersTax(salary) {
    //short statement below can also be used
 // return  salary = salary>100000 ? salary - (salary*0.3) : salary
  if(salary>100000){
    salary = salary - (salary*0.3)
  }
  return salary
}

function capitalizeFirstLetter(empname) {
   let capitalName =   empname.split(" ").map(name=>{
       return  name.charAt(0).toUpperCase()+ name.slice(1)
    }).join(" ")
  
   return capitalName
 }

function employeePayRollManager() {
   let data =  employeeData.map(employee=>{
       let overtimepay =  overTimePay(employee.hoursWorked)
       let salary = Bonus(employee.eligibleForBonus,employee.baseSalary)
       let tax = highEarnersTax(salary)
    let capitalName =  capitalizeFirstLetter(employee.employeeName)

       return {
        employeeName : capitalName,
        overtime : overtimepay,
        Salary :  salary > 100000 ? tax : salary,
       }

    })
    return data
}



console.log(employeePayRollManager())