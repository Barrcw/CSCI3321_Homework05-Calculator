function display(val) {
    document.getElementById("display").value += val;
}

function calculate() {
    let x = document.getElementById("display").value;
    let z = document.getElementsByClassName("operators").value;
    if (x.length === 0) {
        return "";
    }
    else{
        let y = eval(x);
    document.getElementById("display").value = y;
    }
}

function clr() {
    document.getElementById("display").value = "";
}
