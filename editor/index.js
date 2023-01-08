const htmlCode = document.querySelector("#html-code");
const cssCode = document.querySelector("#css-code");
const jsCode = document.querySelector("#js-code");
const output = document.querySelector("#output");

// console.log(htmlCode,cssCode,jsCode,output);

function run() {
    let html = htmlCode.value;
    let css = "<style>"+cssCode.value+"</style>";
    let js = jsCode.value;
    
    output.contentDocument.body.innerHTML = html+css;
    output.contentWindow.eval(js);
}

htmlCode.addEventListener("keyup",run);
cssCode.addEventListener("keyup",run);
jsCode.addEventListener("keyup",run);
