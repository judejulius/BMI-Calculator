    function BMI() {
        var h=document.getElementById('h').value;
        var w=document.getElementById('w').value;
        var bmi=w/(h/100*h/100);
        var bmio=(bmi.toFixed(2));
        document.getElementById("result").innerHTML="Your BMI is " + bmio;

        if(bmio <= 25 && bmio > 40){
            document.getElementById("result1").innerHTML = "You are Overweight"
        }else if(bmio >= 18 && bmio <= 25){
            document.getElementById("result1").innerHTML = "You have a good BMI"
        }else{
            document.getElementById("result1").innerHTML = "You are UnderWeight"
        }
       
    }