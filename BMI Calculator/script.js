function bmi(){
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;


    let bmi = w / (h/100 * h/100);
    let total = bmi.toFixed(2);
 
    if (bmi<18.1){
        document.getElementById("result").style.color = "white"
        document.getElementById("result").innerHTML = "Underweight, 🫡 Your BMI is" + total;
    }else if(18.5<=bmi&&bmi<=24.9){
        document.getElementById("result").innerHTML = "Healthy, 😍 Your BMI is" + total
        document.getElementById("result").style.color = "white"
    }else if(25<=bmi&&bmi<=29.9){
        document.getElementById("result").innerHTML = "Overweight, 💀 Your BMI is " + total; 
        document.getElementById("result").style.color = "white"
    }else if(30<=bmi&&bmi<=34.9){
        document.getElementById("result").innerHTML = "Obese, ❌ Your BMI is " + total; 
        document.getElementById("result").style.color = "white"
    }else if(35<=bmi){
        document.getElementById("result").innerHTML = "Extreme Obese, 🚫 Your BMI is " + total; 
        document.getElementById("result").style.color = "white"
    }else {
        document.getElementById("result").innerHTML = "Your BMI is, ⭕" + total; 
        document.getElementById("result").style.color = "white"
    }

}
