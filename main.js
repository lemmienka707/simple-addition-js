document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
    //Input
    const num1 = parseFloat(document.getElementById("num1-in").value);
    const num2 = parseFloat(document.getElementById("num2-in").value);

    //Process
    let total = num1 + num2;
    //Output
    document.getElementById("output").innerHTML = total;
}