// offset.js

function clearPlug() {
    document.getElementById("xtra_offsetCalculator").innerHTML = "";
}

function setPlug(newPane) {
    document.getElementById("xtra_offsetCalculator").appendChild(newPane);
    alert("??:");
}

class Travel {
    constructor() {
        this.page = 1;
        this.type = null;
        this.subtype = null;
        this.passengers = 0;
        this.distance = 0;
        this.typePage();
    }

    typePage() {
        clearPlug();
        var pane = document.createElement('div');
        var header = document.createElement('h1');
        header.innerHTML = "How are you traveling?";
        var images = ["car.png", "plane.png", "train.png", "bus.png"];
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var count = 0;
        // creating all cells
        for (var i = 0; i < 2; i++) {
            // creates a table row
        alert("1");
            var row = document.createElement("tr");
            for (var j = 0; j < 2; j++) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                var cell = document.createElement("td");
                var cellText = document.createElement("img");
                cellText.src = "wp-content/plugins/costs/imgs/" + images[count];
        alert(images[count].substring(0, images[count].length -4));
                callText.alt = images[count].substring(0, images[count].length - 4);
        alert("3");
                cellText.height = "50";
                cellText.addEventListener("click", function(event) {
                    alert(event.target);
                    this.type = event.target.alt;
                    this.subTypePage();
                });

                cell.appendChild(cellText);
                row.appendChild(cell);
                count++;
            }

            // add the row to the end of the table body
            tblBody.appendChild(row);
        }
        alert("3");
 
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);

        pane.appendChild(travelTypeHeader);
        pane.appendChild(tbl);
        /*offsetType.appendChild(backButton);
        offsetType.appendChild(nextButton);*/
    alert("4");
        setPlug(pane);
    }

    subTypePage() {
        clearPlug();
        var pane = document.createElement('div');
        var typeList = document.createElement("ul");
        var paneHeader = document.createElement('h1');
        paneHeader.innerHTML = "Could you be more specific?";
        var cars = {
            "car": ["Passenger", "Light Truck", "Motorcycle"],
            "train": ["Intercity Rail", "Commuter Rail", "Transit Rail"],
            "plane": ["<300 miles", "between 300 and 2300 miles", ">2300 miles"]
        }
        pane.appendChild(paneHeader);
        pane.appendChild(carButtonTbl);

        if (this.type == "bus") {
            passengersPage();
            return;
        } else {
            var subType, cellText;
            for (item of cars[this.type]) {
                subType = document.createElement("li");
                cellText = document.createElement("input");
                cellText.setAttribute("type", "radio");
                cellText.setAttribute("name", item);

                typeList.appendChild(cellText);
            }
            
            var nextButton = document.createElement('span');
            nextButton.className = "next round";
            nextButton.innerHTML = "&#8250;";
            nextButton.addEventListener("click", passengersPage);
            pane.appendChild(nextButton);
        }

        setPlug(pane);
    }

    passengersPage() {
        alert("We're working");
    }

    distancePage() {

    }
}

new Travel();
/*
var backButton = document.createElement('span');
backButton.className = "previous round";
backButton.innerHTML = "&#8249;";
backButton.addEventListener("click", function(event){
    if(page == 2){
        document.getElementById("xtra_offsetCalculator").innerHTML = "";
        document.getElementById("xtra_offsetCalculator").appendChild(offsetType);
        page--;
    } else if (page == 3){
        document.getElementById("xtra_offsetCalculator").innerHTML = "";

        page--;
    }
});

var nextButton = document.createElement('span');
nextButton.className = "next round";
nextButton.innerHTML = "&#8250;";

buttons.appendChild(backButton);
buttons.appendChild(nextButton);


/************************************
//type of transportation, page 1
var offsetType = document.createElement('div');
var travelTypeHeader = document.createElement('h1');
travelTypeHeader.innerHTML = "How are you traveling?";
var images = ["car.png", "plane.png", "train.png", "bus.png"];
var tbl = document.createElement("table");
generate_table();

offsetType.appendChild(travelTypeHeader);
offsetType.appendChild(tbl);
/*offsetType.appendChild(backButton);
offsetType.appendChild(nextButton);*

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
                document.getElementById("xtra_offsetCalculator").innerHTML = "";
                document.getElementById("xtra_offsetCalculator").appendChild(carType).appendChild(buttons);
                page = 1.5;
            });
        } else if(count == 1){
            cellText.addEventListener("click", function(event){
                document.getElementById("xtra_offsetCalculator").innerHTML = "";

            });
        } else if(count == 2){
            cellText.addEventListener("click", function(event){
                document.getElementById("xtra_offsetCalculator").innerHTML = "";
                document.getElementById("xtra_offsetCalculator").appendChild(trainType).appendChild(buttons);
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
    document.getElementById("xtra_offsetCalculator").appendChild(offsetType);
});

/***********************************
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

/*****************************************
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

/********************************************
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

