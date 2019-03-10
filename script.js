Student = function(poss, name, lastName, year, ocenki){
	this.poss = poss;
	this.name = name;
	this.lastName = lastName;
	this.year = year;
	this.ocenki = ocenki;
};
Student.prototype.present = function (poss){
	if(this.poss.length < 25){
		return this.poss.push(true)
	}else{
		return "error"
	}
}
Student.prototype.absent = function (poss){
	if(this.poss.length < 25){
		return this.poss.push(false)
	}else{
		return "error"
	}
}
Student.prototype.getYear = function (){
	return this.year
}
Student.prototype.getBal = function (ocenki){
	var result = this.ocenki.reduce(function(prev, curr){
		return prev + curr;
	});
	return result / this.ocenki.length
}
var user1 = new Student([false], "Valera", "Kokoko", 1998, [90, 90, 100]);
console.log(user1);
