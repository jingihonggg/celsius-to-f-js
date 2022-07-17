
document.getElementById('submitBtn').onclick = function(){
    let temperature;

if(document.getElementById("celsius").checked){
    temperature = document.getElementById('textBox').value;
    temperature = Number(temperature);
    temperature= toCelsius(temperature);
    document.getElementById('tempLabel').innerHTML = temperature + "celsius";
} else if (document.getElementById("farenheit").checked) {
    temperature = document.getElementById('textBox').value;
    temperature = Number(temperature);
    temperature= toFarenheit(temperature);
    document.getElementById('tempLabel').innerHTML = temperature + "farenheit";
} else{
    document.getElementById('tempLabel').innerHTML = 'select a unit';
}
}


temperature = toCelsius(temperature);
console.log(temperature);

function toCelsius(temperature){
    return (temperature - 32)*(5/9);
}

function toFarenheit(temperature){
    return (temperature* 9/5) +32;
}