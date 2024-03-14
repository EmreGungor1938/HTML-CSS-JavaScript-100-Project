function topla() {
var sayi1 = document.getElementById("sayi1").value;
var sayi2 = document.getElementById("sayi2").value;
var sonuc = parseInt(sayi1)+parseInt(sayi2);
document.getElementById("sonuc").innerHTML = sonuc;
}

function cikart() {
var sayi1 = document.getElementById("sayi1").value;
var sayi2 = document.getElementById("sayi2").value;
var sonuc = parseInt(sayi1)-parseInt(sayi2);
document.getElementById("sonuc").innerHTML = sonuc;
}

function carp() {
var sayi1 = document.getElementById("sayi1").value;
var sayi2 = document.getElementById("sayi2").value;
var sonuc = parseInt(sayi1)*parseInt(sayi2);
document.getElementById("sonuc").innerHTML = sonuc;
}

function bol() {
var sayi1 = document.getElementById("sayi1").value;
var sayi2 = document.getElementById("sayi2").value;
var sonuc = parseInt(sayi1)/parseInt(sayi2);
document.getElementById("sonuc").innerHTML = sonuc;
}