function totalEnemies(){
	let P0 = parseFloat((prompt("Enter the initial population"));
	let r = parseFloat((prompt("Enter the rate of growth"));
	let t = parseFloat((prompt("Enter the time(in hours)"));
	
	let finalPopulation=Math.round(P0*Math.pow(Math.E,r*t));
	
	let region = (prompt("Enter a region"));
	let nameEnemy =(prompt("Enter the enemies' name"));
	
	let enemyInfo = (region + ' ' + nameEnemy).toUpperCase;
	
	document.getElementById("result").innerHTML = 'After' + t + 'hours, the population of ' + region + nameEnemy + 'has increased by' + finalPopulation '!';
	
	
	
