function perimeter() {
    var sideA = document.getElementById("sideA").value;
    var sideB = document.getElementById("sideB").value;
    var sideC = document.getElementById("sideC").value;
    var perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
    var resultPerimeter = document.getElementById("resultPerimeter");
    resultPerimeter.innerHTML =  "Perimeter is " + perimeter;
}

function area() {
    var height = parseFloat(document.getElementById("height").value);
    var base = parseFloat(document.getElementById("base").value);
    var area = (height * base)/2;
    var resultArea = document.getElementById("resultArea");
    resultArea.innerHTML =  "Area is " + area;
}

