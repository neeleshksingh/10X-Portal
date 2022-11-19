let btn = document.querySelectorAll("button");
let eggcount = document.getElementById("eggs-qty");
let riceount = document.getElementById("rice-qty");
let buttercount = document.getElementById("butter-qty");
let milkcount = document.getElementById("milk-qty");
let inp = document.querySelectorAll("input");
let prices = document.querySelectorAll("tbody>tr>td:last-child");
let totalprice = document.getElementById("t-price");

for (let i = 0; i < 8; i++) {
  btn[i].addEventListener("click", function () {
    document.querySelector("tfoot").style.display = "table-footer-group";
    if (i % 2 == 0) {
      if (i == 0 && milkcount.value > 0) {
        --milkcount.value;
        let x = parseInt(prices[0].innerText);
        let ans = x - 16;
        prices[0].innerHTML = `${ans}`;
        totalprice.innerHTML = parseInt(totalprice.innerText) - 16;
      } else if (i == 2 && buttercount.value > 0) {
        --buttercount.value;
        let x = parseInt(prices[1].innerText);
        let ans = x - 20;
        prices[1].innerHTML = `${ans}`;
        totalprice.innerHTML = parseInt(totalprice.innerText) - 20;
      } else if (i == 4 && riceount.value > 0) {
        --riceount.value;
        let x = parseInt(prices[2].innerText);
        let ans = x - 50;
        prices[2].innerHTML = `${ans}`;
        totalprice.innerHTML = parseInt(totalprice.innerText) - 50;
      } else if (i == 6 && eggcount.value > 0) {
        --eggcount.value;
        let x = parseInt(prices[3].innerText);
        let ans = x - 8;
        prices[3].innerHTML = `${ans}`;
        totalprice.innerHTML = parseInt(totalprice.innerText) - 8;
      }
    } else {
      if (i == 1) {
        ++milkcount.value;
        let x = parseInt(prices[0].innerText);
        let ans = x + 16;
        prices[0].innerHTML = `${ans}`;
        totalprice.innerHTML = parseInt(totalprice.innerText) + 16;
      } else if (i == 3) {
        ++buttercount.value;
        let x = parseInt(prices[1].innerText);
        let ans = x + 20;
        prices[1].innerHTML = `${ans}`;
        totalprice.innerHTML = parseInt(totalprice.innerText) + 20;
      } else if (i == 5) {
        ++riceount.value;
        let x = parseInt(prices[2].innerText);
        let ans = x + 50;
        prices[2].innerHTML = `${ans}`;
        totalprice.innerHTML = parseInt(totalprice.innerText) + 50;
      } else if (i == 7) {
        ++eggcount.value;
        let x = parseInt(prices[3].innerText);
        let ans = x + 8;
        prices[3].innerHTML = `${ans}`;
        totalprice.innerHTML = parseInt(totalprice.innerText) + 8;
      }
    }
  });
}
