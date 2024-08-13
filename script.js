function convert() {
    let cmValue = Number(document.getElementById("cmInput").value);
    let inchValue = cmValue / 2.54;
    let result = document.getElementById("output");
    result.innerHTML = inchValue.toFixed(3) + " Inches";
}
