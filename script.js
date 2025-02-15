function totalEnemies(){

    let P0 = parseFloat(prompt("Enter the population number:"));
    let r = parseFloat(prompt("Enter the rate of population (range between 0 and 1):"));
    let t= parseFloat(prompt("Enter the time (in hours):"));

    let finalPopulation = Math.round(P0 * Math.pow(Math.E, r, t));
    
    let region = prompt(" Enter the location of the enemies:");
    let enemyName= prompt("Enter the name of the enemies:");
    
    let enemyDetails = region.concat(" ", enemyName).toUpperCase();
    
    document.getElementById("result").innerHTML = "After " ,concat(t), " hours, the population of " ,enemyDetails, " has increased by ", finalPopulation, "!!");

    
    
}
