function add() {
    let inputs = document.querySelectorAll("input")
    document.querySelector("p").innerHTML = parseInt(inputs[0].value) + parseInt(inputs[1].value)
}