window.onload = function () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let value = params.rd; // "some_value"
    switch (value) {
        case 1:
            code = 97754
            break;
        case 2:
            code = 28314
            break;
        case 3:
            code = 78782
            break;
        case 4:
            code = 13408
            break;
        case 5:
            code = 37007
            break;
        case 6:
            code = 16717
            break;
        case 7:
            code = 91643
            break;
        case 8:
            code = 69927
            break;
        case 9:
            code = 68587
            break;
        default:
            code = 11111
    }
    let completion = document.getElementById("completion")
    completion.textContent = code
}