window.onload = function () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let value = params.rd; // "some_value"
    value = Number(value)
    let completionDiv = document.getElementById("completion")
    switch (value) {
        case 1:
            completionDiv.textContent = "Your completion code is 52531. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 2:
            completionDiv.textContent = "Your completion code is 52537. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 31:
            completionDiv.textContent = "Your completion code is 52532. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 32:
            completionDiv.textContent = "Your completion code is 52539. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 41:
            completionDiv.textContent = "Your completion code is 52538. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 42:
            completionDiv.textContent = "Your completion code is 52531. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 51:
            completionDiv.textContent = "Your completion code is 52537. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 52:
            completionDiv.textContent = "Your completion code is 52530. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 61:
            completionDiv.textContent = "Your completion code is 52537. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 62:
            completionDiv.textContent = "Your completion code is 52532. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 7:
            completionDiv.textContent = "Your completion code is 52533. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 8:
            completionDiv.textContent = "Your completion code is 52537. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        case 9:
            completionDiv.textContent = "Your completion code is 52539. You may now return to the survey, and after you enter your code, please close this tab."
            break;
        default:
            code = 11111
    }
}