const leapYears = function(year) {
 let isLeapYear = false;
 let paramCheck1 = false;
 let paramCheck2 = false;
 let paramCheck3 = false;

 if (year % 4 == 0)
 {
    paramCheck1 = true;
 }
 else{
        paramCheck1 = false;
 }

 if (year % 400 == 0)
 {
    paramCheck2 = true;
 }
 else{
        paramCheck2 = false;
 }

 if (year % 100 == 0)
 {
    paramCheck3 = true;
 }
 else{
        paramCheck3 = false;
 }

 //If year divisible by 4 and 100 but not 400, it is false
 if ((paramCheck3 == true && paramCheck1 == true && paramCheck2 == false) ||
    paramCheck1 == false
)
 {
    return isLeapYear = false;
 }

 //if it is divisible by 400 only and 4 only
 if ((paramCheck2 == true)
    || (paramCheck1 == true && paramCheck2 == false && paramCheck3 == false)
    )
        {
            return isLeapYear = true;
        }

};

// Do not edit below this line
module.exports = leapYears;
