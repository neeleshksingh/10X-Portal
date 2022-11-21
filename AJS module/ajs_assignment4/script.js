let sum = document.getElementById("total").value;
let bt = document.getElementById("but").addEventListener("click", function () {
    let a = document.getElementById("Item-name").value;
    let b = document.getElementById("price").value;
    if (a == "" || b == "") {
        alert("enter details");
        return;
    }
    let table = document.getElementsByTagName("table")[0];
    let newRow = table.insertRow(table.rows.length - 1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = a;
    cell2.innerHTML = b;

    if (sum == undefined) {
        sum = b;
    } else sum = parseFloat(sum) + parseFloat(b);
    document.getElementById("total").innerHTML = sum;
});
console.log(sum);