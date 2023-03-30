function find(a) {
    output.textContent += a;
}

function del() {
    let d = output.textContent;
    output.textContent = d.substring(0, d.length - 1);
}

function clearall() {
    output.textContent = "";
    result.textContent = "";
}

function clear() {
    output.textContent = " ";
    result.textContent = "";
}

function sqrt() {
    var squareroot = output.textContent;
    var sqresult = Math.sqrt(squareroot);
    result.textContent = sqresult;
}

function ans() {
    result.textContent = eval(output.textContent);
}

function per() {
    var percentage = output.textContent;
    var temp = eval(percentage);
    var p = temp * 100 + "%";
    result.textContent = p;
}

function sqrt() {
    let values = output.textContent;
    let store = Math.sqrt(values);
    result.textContent = store;
}

function enter() {
    result.textContent = eval(output.textContent);
}