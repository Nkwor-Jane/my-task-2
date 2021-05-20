function convertFahrToCelcius(fahr){
    let fahrTemp = fahr;
    let celcius = ((fahrTemp - 32)/ 1.8).toFixed(4);
    let result =   `${fahrTemp} = ${celcius}`;
    let error = `${fahr} is not a valid number but a/an ${typeof fahr}`

    if(typeof fahr === ''){
        return result  
    } else if(isNaN(fahr)){
        console.log(error)
    }
    console.log(result);

}

convertFahrToCelcius(20);
convertFahrToCelcius("20");
convertFahrToCelcius(0);
convertFahrToCelcius("0");

convertFahrToCelcius([1,2,2,2]);
convertFahrToCelcius("fizzbuzz is meh");
convertFahrToCelcius({temp:0});









function checkYuGiOh(num){
    let yuGiOhAns = [];
    for(let i =1; i<=num; i++){
        let temp = "";
        if(i % 2 === 0){
            temp += "yu";
        }
        if(i % 3 === 0){
            temp += temp != "" ? "-gi" : "gi";
        }
        if(i % 5 === 0){
            temp += temp != "" ? "-oh" : "oh";
        }
        if(temp === ""){
            temp =  i;
        }
        yuGiOhAns.push(temp)
    }
    console.log(yuGiOhAns);
    return yuGiOhAns;
}

checkYuGiOh(10);
checkYuGiOh(30);
checkYuGiOh("10");
checkYuGiOh(5);
checkYuGiOh("5");

checkYuGiOh("fizzbuzz is meh");


