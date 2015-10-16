
//var arrayAtticus = ["Atticus", "2405", "47000", 3];
//var arrayJem = ["Jem", "62347", "63500", 4];
//var arrayBoo = ["Boo", "11435", "54000", 3];
//var arrayScout = ["Scout", "6243", "74750", 5];

var objAtticus = {
  name: "Atticus",
  emplNum: "2405",
  beforeSalary: "47000",
  emplRating: 3
};

var objJem = {
  name: "Jem",
  emplNum: "62347",
  beforeSalary: "63500",
  emplRating: 4
};
var objBoo = {
  name: "Boo",
  emplNum: "11435",
  beforeSalary: "54000",
  emplRating: 3
};
var objScout = {
  name: "Scout",
  emplNum: "6243",
  beforeSalary: "74750",
  emplRating: 5
};

//Create variables used to write to the DOM
//var newEl, newText, position;
//Capture the position of insertion into the DOM
//position = document.getElementById('content');

 	////newEl = document.createElement('li');
	//newText = document.createTextNode(empObjNew1.name);
  //empObjNew.percentSTI, empObjNew.incomeTotal, empObjNew.bonus);
	//newEl.appendChild(newText);
	//position.appendChild(newEl);
//}
$(document).ready(function(){
  var att = calculateSTI(objAtticus);
  var jem = calculateSTI(objJem);
  var boo = calculateSTI(objBoo);
  var scout = calculateSTI(objScout);
  var emplArray = [att, jem, boo, scout];
  //var showNames = [emplArray[0].name, empObjNew1[1].name];

  for(var i = 0; i < emplArray.length; i++){
    $("#container").append("<div class='emplDiv'></div>");
    var $el = $("#container").children().last();
    $el.append("<p>" + emplArray[i].name + "</p>");
    //$el.append("<p>" + emplArray[i] + "</p>");
    //$el.append("<p>" + emplArray[i] + "</p>");
    $el.append("<button class='someButton'>Show Record</button>");
    console.log(emplArray[i].name);

  }

$('.someButton').on('click',function(){
    console.log($(this).parent().remove());
});


function calculateSTI(myObject){
  var newObject = {};

  newObject.name = myObject.name;

  var employeeNumber = myObject.emplNum;
  var baseSalary = parseInt(myObject.beforeSalary);
  var reviewScore = myObject.emplRating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObject.percentSTI = (bonus.toFixed(2));
  newObject.incomeTotal = Math.round(baseSalary * (1.0 + bonus));
  newObject.bonus = (baseSalary * bonus);

  return newObject;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
  console.log(basePercent);//
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}

});
