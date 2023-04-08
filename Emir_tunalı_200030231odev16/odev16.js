function f(x) {
    return 2*x;
}
function g(x) {
    return 5*x+6;
}
    document.getElementById("SONUC").innerHTML = "f(g(3)) Sonucu: "+ f(g(3));