window.onload = function () {
    let code = Math.floor(Math.random() * 90000) + 10000;
    let completion = document.getElementById("completion")
    completion.textContent = code
}