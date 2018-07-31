var a = +process.argv[2];
var b = +process.argv[3];
var c = +process.argv[4];
var d = +process.argv[5];
var e = +process.argv[6];
var f = +process.argv[7];
var g = +process.argv[8];
var h = +process.argv[9];
var i = +process.argv[10];
var j = +process.argv[11];
var k = +process.argv[12];
var l = +process.argv[13];
var m = +process.argv[14];
if (!a) {
    console.log("Неверный ввод. Введите через пробел длинну каждой стороны фигуры. Количество заданных сторон - характер фигуры");
    console.log("Например 10 10 10 - треугольник, с тремя сторонами, каждая из которой равняется 10");
} else if (!b) {
    console.log("У фигуры не может быть одной стороны.");
    console.log("Например 10 10 10 - треугольник, с тремя сторонами, каждая из которой равняется 10");
} else if (!c) {
    console.log("У фигуры не может быть две стороны.");
    console.log("Например 10 10 10 - треугольник, с тремя сторонами, каждая из которой равняется 10");
} else if (!d) {
    var perimetr = a + b + c;
    var p = perimetr / 2;
    var teorema = p * ((p - a) * (p - b) * (p - c));
    var plosha = Math.sqrt(teorema);
    console.log("Это треугольник, периметр которого - " + perimetr + " , а площадь - " + plosha);
} else if (!e) {
    var perimetr = a + b + c + d;
    console.log("Это четырехугольник, периметр которого - " + perimetr);
} else if (!f) {
    var perimetr = a + b + c + d + e;
    console.log("Это пятиугольник, периметр которого - " + perimetr);
} else if (!g) {
    var perimetr = a + b + c + d + e + f;
    console.log("Это шестиугольник, периметр которого - " + perimetr);
} else if (!h) {
    var perimetr = a + b + c + d + e + f + g;
    console.log("Это семиугольник, периметр которого - " + perimetr);
} else if (!i) {
    var perimetr = a + b + c + d + e + f + g + h;
    console.log("Это восьмиугольник, периметр которого - " + perimetr);
} else if (!j) {
    var perimetr = a + b + c + d + e + f + g + h + i;
    console.log("Это девятиугольник, периметр которого - " + perimetr);
} else if (!k) {
    var perimetr = a + b + c + d + e + f + g + h + i + j;
    console.log("Это десятиугольник, периметр которого - " + perimetr);
} else if (!l) {
    var perimetr = a + b + c + d + e + f + g + h + i + j + k;
    console.log("Это одинадцатиугольник, периметр которого - " + perimetr);
} else if (!m) {
    var perimetr = a + b + c + d + e + f + g + h + i + j + k + l;
    console.log("Это двенадцатиугольник, периметр которого - " + perimetr);
} else {
    console.log("Неверный ввод. Введите через пробел длинну каждой стороны фигуры. Количество заданных сторон - характер фигуры");
    console.log("Например 10 10 10 - треугольник, с тремя сторонами, каждая из которой равняется 10");
}

// Определяет фигуру и периметр в зависимости от введенных значений через пробел
// Например 10 10 10 - треугольник, с тремя сторонами, каждая из которой равняется 10