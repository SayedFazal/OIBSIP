document.getElementById('convertBtn').addEventListener('click', function(){
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultDiv = document.getElementById('result');
    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = unitSelect.value;
    if(isNaN(temperature)){
        resultDiv.textContent = "Please enter a valid number";
        resultDiv.style.color= '#ff3b30';
        return;
    }
    let convertedResults=[];

    if(fromUnit==='Celsius'){
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;
        convertedResults =[
            `${fahrenheit.toFixed(4)} °F`,
            `${kelvin.toFixed(4)} K`
        ];
    }
    else if(fromUnit==='Fahrenheit'){
        const celsius = (temperature - 32) * 5/9;
        const kelvin = celsius + 273.15;
        convertedResults=[
            `${celsius.toFixed(4)} °C`,
            `${kelvin.toFixed(4)} K`
        ];
    }
    else if(fromUnit === 'Kelvin'){
        const celsius = temperature - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        convertedResults=[
            `${celsius.toFixed(4)} °C`,
            `${fahrenheit.toFixed(4)} °F`
        ];
    }
    resultDiv.textContent = convertedResults[0];
    resultDiv.style.color = '#333';
});

document.getElementById('temperature').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        document.getElementById('convertBtn').click();
    }
});
