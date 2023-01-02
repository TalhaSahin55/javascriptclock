let userName = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");
if (userName.length > 0) {
    myName.innerHTML = `${userName}`.toUpperCase();
}else {
    alert("İSİM GİRMEDİNİZ! LÜTFEN BİR İSİM GİRİNİZ...")
    location.reload();
}

function showTime(){
    var date = new Date().toLocaleString('tr-TR');
    document.querySelector("#myClock").innerHTML = date;
    setTimeout(showTime, 1000);
}
showTime();
