//CONVERSION FROM CELCIUS TO KELVIN
console.log('---CONVERSION FROM CELCIUS TO KELVIN=----')
function convertCelciusToKelvin(temp){
    let TempInKelFromCel = temp + 273
    
    console.log(TempInKelFromCel)

}


//CONVERSION FROM KELVIN TO CELCIUS
console.log('---CONVERSION FROM KELVIN TO CELCIUS')

function convertKelvinToCelcius(temp){
    let TempInCelFromK = temp - 273
    
    console.log(TempInCelFromK)
}


//CONVERSION FROM CELCIUS TO FAHRENHEIT
console.log('---CONVERSION FROM CELCIUS TO FAHRENHEIT---')
function convertCelciusToFahrenheit(Temp){
    let TempInFahrFromCel = (Temp * 9/5) + 32

    console.log(TempInFahrFromCel)

}




//CONVERSION FROM  FAHRENHEIT TO CELCIUS 

console.log('---CONVERSION FROM  FAHRENHEIT TO CELCIUS ---')
function convertFahrenheitToCelcius(Temp){
    let TempInCelfromFahr = (Temp - 32)  * 9/5

    console.log(TempInCelfromFahr)

}


//CONERSION FROM KELVIN TO FAHRENHEIT
console.log('-----CONVERSION FROM KELVIN TO FAHRENHEIT')
function convertKelvinToFahrenheit(Temp){
    let TempInFahrFromKel = (Temp - 273) * 9/5 + 32 

    console.log(TempInFahrFromKel)

}



//CONERSION FROM FAHRENHEIT TO KELVIN 
console.log('-----CONVERSION FROM FAHRENHEIT KELVIN')
function convertFahrenheitToKelvin(Temp){
    let TempInKelFromFahr = (Temp - 32) * 5/9 + 273 

    console.log(TempInKelFromFahr)

}

