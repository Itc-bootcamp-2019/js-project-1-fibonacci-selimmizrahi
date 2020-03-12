const presenterorr = document.getElementById("presenterror");
let presentloader = document.getElementById("presentloader");
const displayresults = document.getElementById("displayresults");
let myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", main);

var saveCalculationCheckBox = document.getElementById(
  "saveCalculationBoxInput"
);

function main() {
  showResultTitle();
  appearResultsLoader();
  disappearError();
  appearLoader();
  disappearResultOutput();
  disappearerrorOutput();
  executeFetch();
  executeResultMemories();
}

function showResultTitle() {
  memoriesHeadline.style.display = "inline-block";
}

function disappearError() {
  presenterorr.classList.add("disappear");
}

function appearError() {
  presenterorr.classList.remove("disappear");
}

function disappearLoader() {
  presentloader.classList.remove("spinner-border");
}

function appearLoader() {
  presentloader.classList.add("spinner-border");
}

function appearResultsLoader() {
  loaderResults.classList.add("spinner-border");
}

function disappearResultsLoader() {
  loaderResults.classList.remove("spinner-border");
}

function executeFetch() {
  let input = document.getElementById("input").value;
  if (input > 50) {
    largerThenFifthy();
  } else {
    fetch(`http://localhost:5050/fibonacci/${input}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then(function(data) {
        let answerOutput = document.getElementById("answerOutput").innerHTML;
        let errorOutput = document.getElementById("errorOutput").innerHTML;
        if (data.result) {
          answerOutput = data.result;
          disappearLoader();
          document.getElementById("answerOutput").classList.remove("disappear");
          document.getElementById("answerOutput").innerHTML = answerOutput;
        } else {
          errMessage = "Server Error: ";
          errorOutput = errMessage + data;
          disappearLoader();
          document.getElementById("errorOutput").classList.remove("disappear");
          document.getElementById("errorOutput").innerHTML = errorOutput;
          console.log(errorOutput);
        }
      });
  }
}

function largerThenFifthy() {
  appearError();
  disappearLoader();
  presenterror.innerText = "Can't be larger than 50";
  presenterorr.style.display = "block";
}

function disappearResultOutput() {
  answerOutput.classList.add("disappear");
}

function disappearerrorOutput() {
  errorOutput.classList.add("disappear");
}

function executeResultMemories() {
  fetch("http://localhost:5050/getFibonacciResults")
    .then(response => response.json())
    .then(function(data) {
      disappearResultsLoader();
      let emptyBox = document.getElementById("displayresults");
      emptyBox.innerHTML = "";
      displayData(data.results);
    });
}

function displayData(listOfResults) {
  for (let i = 0; i < listOfResults.length; i++) {
    const resultsWrapper = document.createElement("div");
    resultsWrapper.classList.add("displayResultsInline");

    const listNumber = document.createElement("span");
    listNumber.innerHTML = "Fibonacci of ";
    const boldNumber = document.createElement("strong");
    boldNumber.innerHTML = listOfResults[i].number;
    listNumber.append(boldNumber);
    listNumber.innerHTML += " is ";
    const boldResult = document.createElement("strong");
    boldResult.innerHTML = listOfResults[i].result;
    listNumber.append(boldResult);
    listNumber.innerHTML +=
      ". Calculated at: " + Date(listOfResults[i].createdDate);

    resultsWrapper.append(listNumber);
    displayresults.append(resultsWrapper);
  }
}

function disappearResultMemories() {
  memoriesHeadline.classList.add("disappear");
}
