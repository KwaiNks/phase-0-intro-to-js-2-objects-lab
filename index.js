// Write your solution in this file!
const employee = {name: "Richmond", streetAddress:"2161 Southern Blvd"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    
    return { ...employee, [key]: value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){  
    employee[key] = value;
    return  employee;
}

function deleteFromEmployeeByKey(employee,key){
    const newArray =  {...employee};
    delete newArray[key];  
        return newArray;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key];
 return employee;
}
