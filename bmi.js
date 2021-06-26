function bmiCalculator(weight,height) {
    var bmi; 
    bmi = weight/(height*height)  ;
    return bmi;
}

var q = bmiCalculator(65,1.8);
console.log(q);