
// dropdown.addEventListener("mouseover", function () {
//     this.classList.add("show")
// })


var div = document.querySelector("div")

var x = ["bg_1", "bg_2", "bg_3"]


// for (var i = 0; i < 1; i++) {
//     setTimeout(function () {
//         div.classList.add(x[0])
//     }, 3000)
//     setTimeout(function () {
//         div.classList.remove(x[0])
//         div.classList.add(x[1])
//     }, 3000)
//     setTimeout(function () {
//         div.classList.remove(x[1])
//         div.classList.add(x[2])
//     }, 3000)
// }
var i = 0;
setInterval(function () {
    if (i === 0) {
        div.classList.remove(x[2])
        div.classList.add(x[i])
        i++;
    }
    else if (i === 1) {
        div.classList.remove(x[0])
        div.classList.add(x[i])
        i++;
    }
    else if (i === 2) {
        div.classList.remove(x[1])
        div.classList.add(x[i])
        i = 0;
    }
}, 4000)