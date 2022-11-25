//------------------------------------------------------------------------------------------------
//Task 1 Compare Two Json 
var obj1 = {
    "name" : "Person 1",
    "Age" : 5
};
var obj2 = {
    "Age" : 5,
    "name" : "Person 1"
};
if(obj1.Age == obj2.Age) {
if(obj1.name == obj2.name) {
console.log("Object 1 and object 2 both have same property and property value");
}
}
//------------------------------------------------------------------------------------------------
//Task 2 Display all countries flags from the API
var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    console.log("\n Task 2 - Country Flag");

    for(let i = 0; i < result.length; i++){    
            console.log("Country Flag : "+ result[i].flags.png);
    }
//------------------------------------------------------------------------------------------------
//Task 3 Display all countries name, region, sub-region and population from the API
    console.log("\n Task 3 - All Countries");
    for(let i = 0; i < result.length; i++){
        console.log("Name : " + result[i].name.common + ", Region : " + result[i].region + ", SubRegion : " + result[i].subregion + ", Population : " + result[i].population);
    }
}
//------------------------------------------------------------------------------------------------


