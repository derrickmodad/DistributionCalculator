"use strict";

var calcTypeMenu = document.getElementById("calculatorType");
var calcArea = document.getElementById("calcArea");

calcTypeMenu.addEventListener("change", function(e) {
    var calcType = e.target.value;
    console.log(calcType); //not needed, just for debugging
    switch (calcType) {
        case "permutation":
            permutationSetup();
            break;
        case "combination":
            combinationSetup();
            break;
        case "binomial":
            binomialSetup();
            break;
        case "poisson":
            poissonSetup();
            break;
    }
});

function permutationSetup() {
    
    var sampleNum = document.createElement("input");
    sampleNum.setAttribute("class", "inputBox");
    sampleNum.setAttribute("id", "sampleBox");
    sampleNum.required = true;
    var textInsert = document.createElement("label");
    textInsert.className = "boxText";
    textInsert.textContent = "Total number of values (n): ";
    textInsert.htmlFor = "sampleBox";
    var divHolder1 = document.createElement("div");
    divHolder1.className = "textandInput";
    divHolder1.appendChild(textInsert);
    divHolder1.appendChild(sampleNum);
    
    var selectionNum = document.createElement("input");
    selectionNum.setAttribute("class", "inputBox");
    selectionNum.setAttribute("id", "selectionBox");
    selectionNum.required = true;
    var textInsert2 = document.createElement("label");
    textInsert2.className = "boxText";
    textInsert2.textContent = "Selection size (r): ";
    textInsert2.htmlFor = "selectionBox";
    var divHolder2 = document.createElement("div");
    divHolder2.className = "textandInput";
    divHolder2.appendChild(textInsert2);
    divHolder2.appendChild(selectionNum);

    var calcBtn = document.createElement("button");
    calcBtn.setAttribute("class", "calcButton");
    calcBtn.innerHTML = "Calculate";
    var divHolder4 = document.createElement("div");
    divHolder4.className = "textandInput";
    divHolder4.appendChild(calcBtn);

    var permNum = document.createElement("input");
    permNum.setAttribute("class", "inputBoxBlocked");
    permNum.setAttribute("id", "permutationBox");
    permNum.disabled = true;
    var textInsert3 = document.createElement("label");
    textInsert3.className = "boxText";
    textInsert3.textContent = "Permutations: ";
    textInsert3.htmlFor = "permutationBox";
    var divHolder3 = document.createElement("div");
    divHolder3.className = "textandInput";
    divHolder3.appendChild(textInsert3);
    divHolder3.appendChild(permNum);

    calcArea.replaceChildren(divHolder1, divHolder2, divHolder4, divHolder3);
    
    calcBtn.addEventListener("click", function() {
        var size = parseInt(document.getElementById("sampleBox").value);
        var selection = parseInt(document.getElementById("selectionBox").value);
        if(selection > size) {
            window.alert("election size can not be greater than total number of values.");
        }
        else if ((size > -1) && (selection > -1)){
            var tmp = permutations(size, selection);
            permNum.value = tmp.toFixed(0); 
        }
    });
}

function combinationSetup() {
    
    var sampleNum = document.createElement("input");
    sampleNum.setAttribute("class", "inputBox");
    sampleNum.setAttribute("id", "sampleBox");
    sampleNum.required = true;
    var textInsert = document.createElement("label");
    textInsert.className = "boxText";
    textInsert.textContent = "Total number of values (n): ";
    textInsert.htmlFor = "sampleBox";
    var divHolder1 = document.createElement("div");
    divHolder1.className = "textandInput";
    divHolder1.appendChild(textInsert);
    divHolder1.appendChild(sampleNum);

    var selectionNum = document.createElement("input");
    selectionNum.setAttribute("class", "inputBox");
    selectionNum.setAttribute("id", "selectionBox");
    selectionNum.required = true;
    var textInsert2 = document.createElement("label");
    textInsert2.className = "boxText";
    textInsert2.textContent = "Selection size (r): ";
    textInsert.htmlFor = "selectionBox";
    var divHolder2 = document.createElement("div");
    divHolder2.className = "textandInput";
    divHolder2.appendChild(textInsert2);
    divHolder2.appendChild(selectionNum);

    var calcBtn = document.createElement("button");
    calcBtn.setAttribute("class", "calcButton");
    calcBtn.innerHTML = "Calculate";
    var divHolder4 = document.createElement("div");
    divHolder4.className = "textandInput";
    divHolder4.appendChild(calcBtn);

    var combNum = document.createElement("input");
    combNum.setAttribute("class", "inputBoxBlocked");
    combNum.setAttribute("id", "combinationBox");
    combNum.disabled = true;
    var textInsert3 = document.createElement("label");
    textInsert3.className = "boxText";
    textInsert3.textContent = "Combinations: ";
    textInsert.htmlFor = "combinationBox";
    var divHolder3 = document.createElement("div");
    divHolder3.className = "textandInput";
    divHolder3.appendChild(textInsert3);
    divHolder3.appendChild(combNum);

    calcArea.replaceChildren(divHolder1, divHolder2, divHolder4, divHolder3);
    
    calcBtn.addEventListener("click", function() {
        var size = parseInt(document.getElementById("sampleBox").value);
        var selection = parseInt(document.getElementById("selectionBox").value);
        if(selection > size) {
            window.alert("Selection size can not be greater than total number of values.");
        }
        else if ((size > -1) && (selection > -1)){ 
            var tmp = combinations(size, selection);
            combNum.value = tmp.toFixed(0);
        }
    });
}

function binomialSetup() {
    
    var trialNum = document.createElement("input");
    trialNum.setAttribute("class", "inputBox");
    trialNum.setAttribute("id", "trialBox");
    trialNum.required = true;
    var textInsert = document.createElement("label");
    textInsert.className = "boxText";
    textInsert.textContent = "Number of trials: ";
    var divHolder = document.createElement("div");
    divHolder.className = "textandInput";
    divHolder.appendChild(textInsert);
    divHolder.appendChild(trialNum);
    
    var successNum = document.createElement("input");
    successNum.setAttribute("class", "inputBox");
    successNum.setAttribute("id", "successBox");
    successNum.required = true;
    var textInsert2 = document.createElement("label");
    textInsert2.className = "boxText";
    textInsert2.textContent = "Number of successes (x): ";
    var divHolder2 = document.createElement("div");
    divHolder2.className = "textandInput";
    divHolder2.appendChild(textInsert2);
    divHolder2.appendChild(successNum);

    var successRateNum = document.createElement("input");
    successRateNum.setAttribute("class", "inputBox");
    successRateNum.setAttribute("id", "successRateBox");
    successRateNum.required = true;
    var textInsert4 = document.createElement("label");
    textInsert4.className = "boxText";
    textInsert4.textContent = "Probability of success: ";
    var divHolder3 = document.createElement("div");
    divHolder3.className = "textandInput";
    divHolder3.appendChild(textInsert4);
    divHolder3.appendChild(successRateNum);

    var calcBtn = document.createElement("button");
    calcBtn.setAttribute("class", "calcButton");
    calcBtn.innerHTML = "Calculate";
    var divHolder5 = document.createElement("div");
    divHolder5.className = "textandInput";
    divHolder5.appendChild(calcBtn);

    var binNum = document.createElement("input");
    binNum.setAttribute("class", "inputBoxBlocked");
    binNum.setAttribute("id", "binomialBox");
    binNum.disabled = true;
    var textInsert3 = document.createElement("label");
    textInsert3.className = "boxText";
    textInsert3.textContent = "Probability (X = x): ";
    var divHolder4 = document.createElement("div");
    divHolder4.className = "textandInput";
    divHolder4.appendChild(textInsert3);
    divHolder4.appendChild(binNum);

    //less than
    var binomialNumLT = document.createElement ("input");
    binomialNumLT.setAttribute("class", "inputBoxBlocked");
    binomialNumLT.setAttribute("id", "binomialBoxLT");
    binomialNumLT.disabled = true;
    var textInsert10 = document.createElement("label");
    textInsert10.className = "boxText";
    textInsert10.textContent = "Probability (X < x): ";
    var divHolder10 = document.createElement("div");
    divHolder10.className = "textandInput";
    divHolder10.appendChild(textInsert10);
    divHolder10.appendChild(binomialNumLT);

    //less than equal to
    var binomialNumLTE = document.createElement ("input");
    binomialNumLTE.setAttribute("class", "inputBoxBlocked");
    binomialNumLTE.setAttribute("id", "binomialBoxLTE");
    binomialNumLTE.disabled = true;
    var textInsert11 = document.createElement("label");
    textInsert11.className = "boxText";
    textInsert11.textContent = "Probability (X ≤ x): ";
    var divHolder11 = document.createElement("div");
    divHolder11.className = "textandInput";
    divHolder11.appendChild(textInsert11);
    divHolder11.appendChild(binomialNumLTE);

    //greater than
    var binomialNumGT = document.createElement ("input");
    binomialNumGT.setAttribute("class", "inputBoxBlocked");
    binomialNumGT.setAttribute("id", "binomialBoxGT");
    binomialNumGT.disabled = true;
    var textInsert12 = document.createElement("label");
    textInsert12.className = "boxText";
    textInsert12.textContent = "Probability (X > x): ";
    var divHolder12 = document.createElement("div");
    divHolder12.className = "textandInput";
    divHolder12.appendChild(textInsert12);
    divHolder12.appendChild(binomialNumGT);

    //greater than equal to
    var binomialNumGTE = document.createElement ("input");
    binomialNumGTE.setAttribute("class", "inputBoxBlocked");
    binomialNumGTE.setAttribute("id", "binomialBoxGTE");
    binomialNumGTE.disabled = true;
    var textInsert13 = document.createElement("label");
    textInsert13.className = "boxText";
    textInsert13.textContent = "Probability (X ≥ x): ";
    var divHolder13 = document.createElement("div");
    divHolder13.className = "textandInput";
    divHolder13.appendChild(textInsert13);
    divHolder13.appendChild(binomialNumGTE);

    calcArea.replaceChildren(divHolder, divHolder2, divHolder3, divHolder5, divHolder4, divHolder10, divHolder11, divHolder12, divHolder13);
    
    calcBtn.addEventListener("click", function() {
        var size = parseInt(document.getElementById("trialBox").value);
        var selection = parseInt(document.getElementById("successBox").value);
        var successRate = parseFloat(document.getElementById("successRateBox").value);
        if (size < 0) {
            window.alert("Number of trials must be at least 1.");
        }
        else if (selection < 0){
            window.alert("Number of successes can not be negative.");
        }
        else if (selection > size) {
            window.alert("Number of successes can not be greater than number of trials.");
        }
        else if (successRate < 0 || successRate > 1) {
            window.alert("Probability of success must be between 0 and 1.");
        }
        else if ((size > -1) && (selection > -1) && (successRate > -1)){
            var bin = binDistribution(size, selection, successRate);
            binNum.value = Number(bin.toFixed(5));

            // Calculate probabilities for less than, less than or equal to, 
            // greater than, and greater than or equal to scenarios
            var cumulativeLessThan = binomialLessThan(size, selection, successRate);
            var cumulativeLessThanOrEqual = cumulativeLessThan + bin;
            var cumulativeGreaterThan = 1 - cumulativeLessThan;
            var cumulativeGreaterThanOrEqual = 1 - cumulativeLessThanOrEqual;
    
            binomialNumLT.value = cumulativeLessThan.toFixed(5);
            binomialNumLTE.value = cumulativeLessThanOrEqual.toFixed(5);
            binomialNumGT.value = cumulativeGreaterThanOrEqual.toFixed(5);
            binomialNumGTE.value = cumulativeGreaterThan.toFixed(5);

            textInsert3.textContent = "Probability (X = " + selection + "): ";
            textInsert10.textContent = "Probability (X < " + selection + "): ";
            textInsert11.textContent = "Probability (X ≤ " + selection + "): ";
            textInsert12.textContent = "Probability (X > " + selection + "): ";
            textInsert13.textContent = "Probability (X ≥ " + selection + "): ";
        } 
    });

    // Function to calculate cumulative probability for less than scenario
    function binomialLessThan(size, selection, successRate) {
        var cumulative = 0;
        for (var i = 0; i < selection; i++) {
            cumulative += binDistribution(size, i, successRate);
        }
        return cumulative;
    }
}

function poissonSetup() {
    
    var eventNum = document.createElement("input");
    eventNum.setAttribute("class", "inputBox");
    eventNum.setAttribute("id", "eventBox");
    eventNum.required = true;
    var textInsert = document.createElement("label");
    textInsert.className = "boxText";
    textInsert.textContent = "Random variable (x): ";
    var divHolder = document.createElement("div");
    divHolder.className = "textandInput";
    divHolder.appendChild(textInsert);
    divHolder.appendChild(eventNum);

    var avgSuccessNum = document.createElement("input");
    avgSuccessNum.setAttribute("class", "inputBox");
    avgSuccessNum.setAttribute("id", "avgSuccessBox");
    avgSuccessNum.required = true;
    var textInsert2 = document.createElement("label");
    textInsert2.className = "boxText";
    textInsert2.textContent = "Average rate of success (µ): ";
    var divHolder2 = document.createElement("div");
    divHolder2.className = "textandInput";
    divHolder2.appendChild(textInsert2);
    divHolder2.appendChild(avgSuccessNum);

    var calcBtn = document.createElement("button");
    calcBtn.setAttribute("class", "calcButton");
    calcBtn.innerHTML = "Calculate";
    var divHolder4 = document.createElement("div");
    divHolder4.className = "textandInput";
    divHolder4.appendChild(calcBtn);

    var poissonNum = document.createElement("input");
    poissonNum.setAttribute("class", "inputBoxBlocked");
    poissonNum.setAttribute("id", "poissonBox");
    poissonNum.disabled = true;
    var textInsert3 = document.createElement("label");
    textInsert3.className = "boxText";
    textInsert3.textContent = "Probability (X = x): ";
    var divHolder3 = document.createElement("div");
    divHolder3.className = "textandInput";
    divHolder3.appendChild(textInsert3);
    divHolder3.appendChild(poissonNum);

    //less than
    var poissonNumLT = document.createElement ("input");
    poissonNumLT.setAttribute("class", "inputBoxBlocked");
    poissonNumLT.setAttribute("id", "poissonBoxLT");
    poissonNumLT.disabled = true;
    var textInsert10 = document.createElement("label");
    textInsert10.className = "boxText";
    textInsert10.textContent = "Probability (X < x): ";
    var divHolder10 = document.createElement("div");
    divHolder10.className = "textandInput";
    divHolder10.appendChild(textInsert10);
    divHolder10.appendChild(poissonNumLT);

    //less than equal to
    var poissonNumLTE = document.createElement ("input");
    poissonNumLTE.setAttribute("class", "inputBoxBlocked");
    poissonNumLTE.setAttribute("id", "poissonBoxLTE");
    poissonNumLTE.disabled = true;
    var textInsert11 = document.createElement("label");
    textInsert11.className = "boxText";
    textInsert11.textContent = "Probability (X ≤ x): ";
    var divHolder11 = document.createElement("div");
    divHolder11.className = "textandInput";
    divHolder11.appendChild(textInsert11);
    divHolder11.appendChild(poissonNumLTE);

    //greater than
    var poissonNumGT = document.createElement ("input");
    poissonNumGT.setAttribute("class", "inputBoxBlocked");
    poissonNumGT.setAttribute("id", "poissonBoxGT");
    poissonNumGT.disabled = true;
    var textInsert12 = document.createElement("label");
    textInsert12.className = "boxText";
    textInsert12.textContent = "Probability (X > x): ";
    var divHolder12 = document.createElement("div");
    divHolder12.className = "textandInput";
    divHolder12.appendChild(textInsert12);
    divHolder12.appendChild(poissonNumGT);

    //greater than equal to
    var poissonNumGTE = document.createElement ("input");
    poissonNumGTE.setAttribute("class", "inputBoxBlocked");
    poissonNumGTE.setAttribute("id", "poissonBoxGTE");
    poissonNumGTE.disabled = true;
    var textInsert13 = document.createElement("label");
    textInsert13.className = "boxText";
    textInsert13.textContent = "Probability (X ≥ x): ";
    var divHolder13 = document.createElement("div");
    divHolder13.className = "textandInput";
    divHolder13.appendChild(textInsert13);
    divHolder13.appendChild(poissonNumGTE);

    calcArea.replaceChildren(divHolder, divHolder2, divHolder4, divHolder3, divHolder10, divHolder11, divHolder12, divHolder13);
    
    calcBtn.addEventListener("click", function() {
        var numEvents = parseInt(document.getElementById("eventBox").value);
        var avgEvents = parseFloat(document.getElementById("avgSuccessBox").value);
    
        if (numEvents < 0 || avgEvents < 0) {
            window.alert("Entered values can not be negative.");
        } else if (avgEvents === 0) {
            window.alert("Average rate of success must be greater than 0");
        } else if ((numEvents > -1) && (avgEvents > -1)) {
            var pois = poiDistribution(numEvents, avgEvents);
            poissonNum.value = pois.toFixed(5);
    
            // Calculate probabilities for less than, less than or equal to, 
            // greater than, and greater than or equal to scenarios
            var cumulativeLessThan = poissonLessThan(numEvents, avgEvents);
            var cumulativeLessThanOrEqual = cumulativeLessThan + pois;
            var cumulativeGreaterThan = 1 - cumulativeLessThan;
            var cumulativeGreaterThanOrEqual = 1 - cumulativeLessThanOrEqual;
    
            poissonNumLT.value = cumulativeLessThan.toFixed(5);
            poissonNumLTE.value = cumulativeLessThanOrEqual.toFixed(5);
            poissonNumGT.value = cumulativeGreaterThanOrEqual.toFixed(5);
            poissonNumGTE.value = cumulativeGreaterThan.toFixed(5);

            textInsert3.textContent = "Probability (X = " + numEvents + "): ";
            textInsert10.textContent = "Probability (X < " + numEvents + "): ";
            textInsert11.textContent = "Probability (X ≤ " + numEvents + "): ";
            textInsert12.textContent = "Probability (X > " + numEvents + "): ";
            textInsert13.textContent = "Probability (X ≥ " + numEvents + "): ";
        }
    });
    
    // Function to calculate cumulative probability for less than scenario
    function poissonLessThan(numEvents, avgEvents) {
        var cumulative = 0;
        for (var i = 0; i < numEvents; i++) {
            cumulative += poiDistribution(i, avgEvents);
        }
        return cumulative;
    }   
}

function permutations(sz, selection) {
    selection = sz - selection;
    var size = sz; //* 1.0 <- Removed this, add back if problems appear
    if (selection === 0)
        return (factorial(size));
    for (var c = size; c > selection + 1; c--) {
        size *= (c - 1);
    }
    return size;
}

function combinations(size, selection) {
    if (size - selection === 0 || selection === 0) {
        return 1;
    }
    return factorial(size) / (factorial(selection) * factorial(size - selection));
}

function factorial(x) {
    if (x == 0)
        return 1;
    var d = x; //* 1.0 <- Removed this, add bck if problems appear
    for (var c = x; c > 1; c--) {
        d *= (c - 1);
    }
    return d;
}

function binDistribution(size, selection, successRate) {
    var comb = combinations(size, selection);
    return (comb * Math.pow(successRate, selection) * Math.pow((1 - successRate), (size - selection)));
}

function poiDistribution(numEvents, avgEvents) {
    return ((Math.pow(avgEvents, numEvents) * (Math.exp(-1 * avgEvents))) / factorial(numEvents));
}

/* old functions - kept in case needed later

function calcDistributionAllEvents(num, successRate, callingID) {
    var distros = [];
    if (callingID) {
        //This is binomial calculations
        for (var c = 0; c < (2 * num); c++) {
            distros[c] = binDistribution(num, c, successRate);
        }
    }
    else {
        //This is poisson calculations
        for (var c = 0; c < (2* num); c++) {
        distros[c] = poiDistribution(c, num);
        }
    }
    return distros;
} 


    // Function to calculate Poisson distribution for a given number of events and average
    function poiDistribution(numEvents, avgEvents) {
        var pois = Math.pow(avgEvents, numEvents) * Math.exp(-avgEvents) / factorial(numEvents);
        return pois;
    }
    
    
    // Function to calculate factorial
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

*/