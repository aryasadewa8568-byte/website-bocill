```javascript
// Membuat hati yang muncul secara otomatis

function buatHati() {

    const hati = document.createElement("div");

    hati.innerHTML = "❤️";

    hati.style.position = "fixed";
    hati.style.left = Math.random() * 100 + "%";
    hati.style.bottom = "-30px";

    hati.style.fontSize =
        (15 + Math.random() * 25) + "px";

    hati.style.zIndex = "1";

    hati.style.transition =
        "transform 5s linear, opacity 5s linear";

    document.body.appendChild(hati);

    setTimeout(function () {

        hati.style.transform =
            "translateY(-100vh) rotate(360deg)";

        hati.style.opacity = "0";

    }, 100);

    setTimeout(function () {

        hati.remove();

    }, 5500);
}


// Membuat hati setiap 1 detik

setInterval(function () {

    buatHati();

}, 1000);
```
