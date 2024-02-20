document.getElementById("bmiform").addEventListener('submit',function(e){
    e.preventDefault(e);
    const gender=document.getElementById('gender').value;
    const age=parseInt(document.getElementById('age').value); 
    const heigthFeet=parseInt(document.getElementById('height-feet').value); 
    const heigthInches=parseInt(document.getElementById('height-inches').value); 
    const weight=parseFloat(document.getElementById('weight').value);

    if(gender && age && heigthFeet && heigthInches && weight){
        const heightInMeters=((heigthFeet *12)+heigthInches)*0.0254;
        const bmi=weight / (heightInMeters * heightInMeters);
        const resultElement = document.getElementById("result");
        let category='';
        if(bmi<=18.5){
            category="Under Weight";
        }
        else if(bmi>18.5 && bmi<24.9){
            category="Normal Weight";
        }
        else if(bmi>25 && bmi <29){
            category="Over Weight";
        }
        else{category="Obese"}
        let resultMessage='Your BMI:'+bmi.toFixed(2)+'<br>';
        resultMessage+='Category:'+category;
        
        resultElement.innerHTML=resultMessage;
    }
})