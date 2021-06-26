function bmiCalculator(weight,height) {
    var bmi; 
    bmi = Math.round(weight/(height*height))  ;
    return bmi;
}

var q = bmiCalculator(65,1.8);
console.log(q);