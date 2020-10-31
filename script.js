let amountPerDay = 4000;
let amountPerExtraHrs = 200;

function total(workingHrs,extraHrs) {let noOfDays = 30;
    let salary = 0;
    let totalWorkingHrs = workingHrs + extraHrs;
    if (totalWorkingHrs>workingHrs) {
        salary=amountPerDay+(amountPerExtraHrs*extraHrs)*noOfDays
        
    } else {
        salary=amountPerDay*noOfDays
         }; 
   return salary;};

   let finalSalaries = total(4,2);

   var employeeSalary = 'Employee salary earning = #'+finalSalaries;
   document.write(employeeSalary);
