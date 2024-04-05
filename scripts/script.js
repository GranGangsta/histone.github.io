function imageChecker() {
    let imageCheck = document.getElementById("btnCheckImages")
    if (imageCheck.checked) {
        return 299
    }
    else {
        return 0
    }
}
function musicChecker() {
    let musicCheck = document.getElementById("btnCheckMusic")
    if (musicCheck.checked) {
        return 799
    }
    else {
        return 0
    }
}
function videoChecker() {
    let videoCheck = document.getElementById("btnCheckVideo")
    if (videoCheck.checked) {
        return 899
    }
    else {
        return 0
    }
}
function progChecker() {
    let progCheck = document.getElementById("btnCheckProgs")
    if (progCheck.checked) {
        return 399
    }
    else {
        return 0
    }
}
function checkCalc() {
    let price = (imageChecker() + musicChecker() + videoChecker() + progChecker()) / 100
    let editText = document.getElementById("calculatedNumbs")
    let textContainer = document.getElementById("containerWithText")
    editText.innerHTML = "Стоимость " + price + "$ в месяц"
    if (price <= 0) {
        textContainer.style.display = "none"
    } else {
        textContainer.style.display = "block"
    }
}
var numInput = document.getElementById("numInput");
numInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
});
