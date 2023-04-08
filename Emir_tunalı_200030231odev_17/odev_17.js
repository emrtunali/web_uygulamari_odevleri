function toplama() {
    var sayi1=Number(document.getElementById("s1").value);
    var sayi2=Number(document.getElementById("s2").value);
    var sayi3=Number(document.getElementById("s3").value);
    var sayi4=Number(document.getElementById("s4").value);
    var toplam=sayi1+sayi2+sayi3+sayi4;
    document.getElementById("sonuc").innerHTML = "Girilen Sayıların Toplamı: "+toplam;
}