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
var user1 = new Student([false], "Valera", "Kokoko", 1998, [50, 24, 75]);

var user2 = new Student([true], "Lesha", "Lololo", 1988, [50, 50, 50]);
var user3 = new Student([false], "Petya", "Trololo", 1988, [10, 90, 30]);


function Group(){
	this.push.apply(this, arguments);
	this.poss = [];
	this.ocenki = [];
	this.lastName = '';
}
Group.prototype = Object.create(Array.prototype);
Group.prototype.constructor = Group;

Group.prototype.attendance = function(){
	var ALL = this.length;
	var dayCounter = 0;
	var passCounter = 0;
	var passArr = [];
	var person = 0;
	var id = 0;
	if(arguments.length === 0){
		for(var i = 0; i < this.length; i++){
			for(var y = 0; y < this[i].poss.length; y++){
				if(this[i].poss[y]){
					dayCounter++;
				}
			}
		}
		return(+(dayCounter/ALL*100).toFixed(0));
	}else if(typeof(arguments[0] === "string")){
		for(var k = 0; k < this.length; k++){
			for(var l = 1; l < this.poss.length; l++){
				passArr.push(this[k].poss[l]);
				console.log(passArr)
			}
		}
		passArr.sort(function(a, b){
			if (a < b) return 1;
			if (a > b) return -1;
		});
		passArr.forEach(function(elem, i){
			if(elem === person){
				id = i + 1;
			}
		});
		return id;
	}else{
		console.log("EEERRROOORRR");
	}
};

Group.prototype.perfomance = function(){
	var ALL = this.length;
	var ocenkiCounter = 0;
	var ocenkiArr = [];
	var person = 0;
	var id = 0;
	if(arguments.length === 0){
		for(var i = 0; i < this.length; i++){
			for(var y = 1; y < 2; y++){
				if(this[i].ocenki[y]){
					passCounter += this[i].ocenki[y];
				}
			}
		}
		console.log(ALL);
		console.log(passCounter)
		return(+(passCounter/ALL).toFixed(0));
	}else if(typeof(arguments[0] === "string")){
		for(var k = 0; k < this.length; k++){
			for(var l = 0; l < this[k].ocenki.length; l++){
				if(this[k].lastName === arguments[0]){
					if(l === this[k].ocenki.length -1){
						ocenkiCounter += this[k].ocenki[l];
						person += this[k].ocenki[l];
						ocenkiArr.push(ocenkiCounter);
						ocenkiCounter = 0;
					}else{
						person += this[k].ocenki[l];
						ocenkiCounter += this[k].ocenki[l];
					}
				}else{
					if(l === this[k].ocenki.length -1){
						ocenkiCounter += this[k].ocenki[l];
						ocenkiArr.push(ocenkiCounter);
						ocenkiCounter = 0;
					}else{
						ocenkiCounter += this[k].ocenki[l];
					}
				}
			}
		}
		ocenkiArr.sort(function(a, b){
			if (a < b) return 1;
			if (a > b) return -1;
		});
		ocenkiArr.forEach(function(elem, i){
			if(elem === person){
				id = i + 1;
			}
		});
		return id;
	}else{
		console.log("EEERRROOORRR");
	}
}

var group = new Group(user1, user2, user3);
console.log(group.attendance("Kokoko"));



