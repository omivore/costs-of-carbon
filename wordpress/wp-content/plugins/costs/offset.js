// offset.js

class Travel {
    constructor() {
        this.page = 1;
        this.type = null;
        this.subtype = null;
        this.passengers = 0;
        this.distance = 0;
        typePage();
    }

    typePage() {
        clearPlug();
        var offsetType = document.createElement('div');
        var travelTypeHeader = document.createElement('h1');
        travelTypeHeader.innerHTML = "How are you traveling?";
        var images = ["car.png", "plane.png", "train.png", "bus.png"];
        var tbl = document.createElement("table");
        // creates a <tbody> element
        var tblBody = document.createElement("tbody");
        var count = 0;

        // creating all cells
        for (var i = 0; i < 2; i++) {

            // creates a table row
            var row = document.createElement("tr");

        for (var j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createElement("img");
            cellText.src = "wp-content/plugins/costs/imgs/" + images[count];
            cellText.height = "50";
            if(count == 0){
                cellText.addEventListener("click", function(event){
                    document.getElementById("offsetCalculator").innerHTML = "";
                    document.getElementById("offsetCalculator").appendChild(carType).appendChild(buttons);
                    page = 1.5;
                });
            } else if(count == 1){
                cellText.addEventListener("click", function(event){
                    document.getElementById("offsetCalculator").innerHTML = "";
                });
            } else if(count == 2){
                cellText.addEventListener("click", function(event){
                    document.getElementById("offsetCalculator").innerHTML = "";
                    document.getElementById("offsetCalculator").appendChild(trainType).appendChild(buttons);
                    page = 1.5;
                });
            }

            cell.appendChild(cellText);
            row.appendChild(cell);
            count++;
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
        }
 
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);

        offsetType.appendChild(travelTypeHeader);
        offsetType.appendChild(tbl);
        /*offsetType.appendChild(backButton);
        offsetType.appendChild(nextButton);*/

        function generate_table() {
        }
    }

    subTypePage() {

    }

    passengersPage() {

    }

    distancePage() {

    }
}
var page = 1;

var buttons = document.createElement("div");

var backButton = document.createElement('span');
backButton.className = "previous round";
backButton.innerHTML = "&#8249;";
backButton.addEventListener("click", function(event){
    if(page == 2){
        document.getElementById("offsetCalculator").innerHTML = "";
        document.getElementById("offsetCalculator").appendChild(offsetType);
        page--;
    } else if (page == 3){
        document.getElementById("offsetCalculator").innerHTML = "";

        page--;
    }
});

var nextButton = document.createElement('span');
nextButton.className = "next round";
nextButton.innerHTML = "&#8250;";

buttons.appendChild(backButton);
buttons.appendChild(nextButton);


/************************************/
//type of transportation, page 1
alert("YEP");
var offsetType = document.createElement('div');
var travelTypeHeader = document.createElement('h1');
travelTypeHeader.innerHTML = "How are you traveling?";
var images = ["car.png", "plane.png", "train.png", "bus.png"];
var tbl = document.createElement("table");
generate_table();

offsetType.appendChild(travelTypeHeader);
offsetType.appendChild(tbl);
/*offsetType.appendChild(backButton);
offsetType.appendChild(nextButton);*/

function generate_table() {
    // creates a <tbody> element
    var tblBody = document.createElement("tbody");
    var count = 0;

    // creating all cells
    for (var i = 0; i < 2; i++) {

        // creates a table row
        var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createElement("img");
        cellText.src = "wp-content/plugins/costs/imgs/" + images[count];
        cellText.height = "50";
        if(count == 0){
            cellText.addEventListener("click", function(event){
                document.getElementById("offsetCalculator").innerHTML = "";
                document.getElementById("offsetCalculator").appendChild(carType).appendChild(buttons);
                page = 1.5;
            });
        } else if(count == 1){
            cellText.addEventListener("click", function(event){
                document.getElementById("offsetCalculator").innerHTML = "";

            });
        } else if(count == 2){
            cellText.addEventListener("click", function(event){
                document.getElementById("offsetCalculator").innerHTML = "";
                document.getElementById("offsetCalculator").appendChild(trainType).appendChild(buttons);
                page = 1.5;
            });
        }

        cell.appendChild(cellText);
        row.appendChild(cell);
        count++;
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("offsetCalculator").appendChild(offsetType);
});

/***********************************/
//car type, page 1.5
var carType = document.createElement('div');
var carButtonTbl = document.createElement("table");
var carTypeHeader = document.createElement('h1');
carTypeHeader.innerHTML = "What type of car?";
var cars = ["Passenger",
                        "Light Truck",
                        "Motorcycle"];
carType.appendChild(carTypeHeader);
var name = "carType";
generate_radiobuttons("car");
carType.appendChild(carButtonTbl);

function generate_radiobuttons(type) {
    var tblBody = document.createElement("tbody");
    var count = 0;

    // creating all cells
    for (var i = 0; i < 3; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            if(j == 0){
                var cellText = document.createElement("INPUT");
                cellText.setAttribute("type", "radio");
                cellText.setAttribute("name", name);
            } else {
                if(type === "car"){
                    var cellText = document.createTextNode(cars[count]);
                } else if(type === "train"){
                    var cellText = document.createTextNode(trains[count]);
                }
            }

            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        count++;

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    if(type === "car") {
        carButtonTbl.appendChild(tblBody);
    } else if(type === "train") {
        trainButtonTbl.appendChild(tblBody);
    }
}

/*****************************************/
//type of train, page 1.5
var trainType = document.createElement('div');
var trainButtonTbl = document.createElement("table");
var trainTypeHeader = document.createElement('h1');
trainTypeHeader.innerHTML = "What type of train?";
var trains = ["Intercity Rail",
              "Commuter Rail",
              "Transit Rail"];
trainType.appendChild(trainTypeHeader);
var name = "trainType";
generate_radiobuttons("train");
trainType.appendChild(trainButtonTbl);

/********************************************/
//distance traveled in airplane, page 1.5
var airplaneType = document.createElement('div');
var airplaneButtonTbl = document.createElement("table");
var airplaneTypeHeader = document.createElement('h1');
airplaneTypeHeader.innerHTML = "How far did you travel?";
var airplaneDistances = ["Less than 300 miles", 
                         "Between 300 and 2,300 miles",
                         "More than 2,300 miles"];
trainType.appendChild(trainTypeHeader);
var name = "trainType";
generate_radiobuttons("train");
trainType.appendChild(trainButtonTbl);

/****************************************/
//hoe many passengers

