const form = document.querySelector('form')
    form.addEventListener('submit', function (e){
        e.preventDefault()
        const height = parseInt(document.querySelector("#height").value);
        const weight = parseInt(document.querySelector("#weight").value);
        const result = document.querySelector("#result");
    
        if (height === '' || height <0 || isNaN(height)) {
            result.innerHTML = "Please Enter Valid Height";
        }
        else if (weight === '' || weight <0 || isNaN(weight)) {
            result.innerHTML = "Please Enter Valid Height";
        }
        else{
            var bmi = (weight / ((height * height) / 10000)).toFixed(2);
            //show the result
            result.innerHTML = `${bmi}`;  
        }
        if(bmi < 18.6){
            
            const mess = document.createTextNode(" , you are under weight");
            result.appendChild(mess); 
        } else if(bmi < 24.9 && bmi > 18.6){
            const mess = document.createTextNode(" , you are in normal range");
            result.appendChild(mess); 
        } else if (bmi != '' || bmi > 0 || bmi > 24.9){
            const mess = document.createTextNode(" , you are over-weight");
            result.appendChild(mess); 
        }
    });