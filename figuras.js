// Codigo del cuadrado
//console.group("Square");

function squarePerimeter(squareSide){
    return squareSide * 4;
} 

function squareArea(squareSide){
    return squareSide * squareSide;
}

//console.groupEnd();

// Codigo del triangulo
//console.group("Triangle");

function trianglePerimeter(side1, side2, side3){
    return side1 + side2 + side3;
}

function triangleArea(side1, side2, side3){
    const SP = trianglePerimeter(side1, side2, side3) / 2; //Semiperimeter
    return ((SP*(SP-side1)*(SP-side2)*(SP-side3)) ** (1/2));
}
//console.groupEnd();

// Codigo del circulo
//console.group("Circle");
const pi = Math.PI;

function circlePerimeter(diameter){
    return pi * diameter;
}

function circleArea(diameter){
    return pi * ((diameter/2) ** 2);
}
//console.groupEnd();

function sPerimeter(){
    const input = document.getElementById("squareSide");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert("El perimetro del cuadrado es : " + perimeter + " cm");
}

function sArea(){
    const input = document.getElementById("squareSide");
    const value = input.value;
    const area = squareArea(value);
    alert("El area del cuadrado es : " + area + " cm^2");    
}