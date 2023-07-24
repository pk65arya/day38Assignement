const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

function getWorkingHours(empcheck){
    switch(empcheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            case  IS_FULL_TIME:
                return FULL_TIME_HOURS;
                default:
                    return 0;
    }
}


const MAX_HRS_IN_MONTH=100;
const NUM_OF_WORKING_DAYS=10;
let totalEmpHrs=0;
let totalWorkingdays=0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH&&totalWorkingdays<NUM_OF_WORKING_DAYS){
    totalWorkingdays++;
    let empcheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs +=getWorkingHours(empcheck);
}
let empwage=totalEmpHrs*WAGE_PER_HOUR;
console.log("UC5 -Total days:"+totalWorkingdays + "Total Hrs: " +totalEmpHrs + "Emp Wage: "+empwage);