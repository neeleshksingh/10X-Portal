let sum = document.getElementById("total").value;
let bt = document.getElementById("but").addEventListener("click", function () {
    let b = document.getElementById("Item-name").value;
    let a = document.getElementById("price").value;
    if (b == "" || a == "") {
        alert("enter details");
        return;
    }
    let table = document.getElementsByTagName("table")[0];
    let newRow = table.insertRow(table.rows.length - 1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = b;
    cell2.innerHTML = a;

    if (sum == undefined) {
        sum = a;
    } else sum = parseFloat(sum) + parseFloat(a);
    document.getElementById("total").innerHTML = sum;
});
console.log(sum);