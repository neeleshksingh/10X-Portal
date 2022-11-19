let inp = document.getElementById("inp");
let play = document.getElementById("play");
let rock = document.getElementById("rock");
let tbody = document.getElementById("tbody");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let h3 = document.getElementById("h-3");
let result = document.getElementById("result");
let final = document.getElementById("final");
let x;
let c1 = 0,
    c2 = 0;
let arr = ["rock", "paper", "scissors"];
play.addEventListener("click", function () {
  x = parseInt(inp.value);
  x = x - 1;
  rock.addEventListener("click", function () {
    let val = "rock";
    let y = arr[parseInt(3 * Math.random())];
    if (val == y) {
      tbody.innerHTML += `<tr><td>Tie</td>
        <td>${x--}</td>
        <td>0</td>
        <td>0</td>
        </tr>`;
      h3.innerHTML = `${y}`;
    } else if (val != arr[parseInt(3 * Math.random())] && y == "paper") {
      tbody.innerHTML += `<tr><td>computer Win</td>
        <td>${x--}</td>
        <td>0</td>
        <td>1</td>
        </tr>`;
      c2 += 1;
      h3.innerHTML = `${y}`;
    } else if (val != arr[parseInt(3 * Math.random())] && y == "scissors") {
      tbody.innerHTML += `<tr><td>User Win</td>
        <td>${x--}</td>
        <td>1</td>
        <td>0</td>
        </tr>`;
      h3.innerHTML = `${y}`;
      c1 += 1;
    }
    if (x < 0) {
      rock.setAttribute("disabled", true);
      paper.setAttribute("disabled", true);
      scissors.setAttribute("disabled", true);
    
    }
    if (c1 > c2) {
        result.innerText = `User Won`;
      } else if (c1 == c2) {
        result.innerText = `Tie`;
      } else if (c1 < c2) {
        result.innerText = `Computer won`;
      }
  });

  paper.addEventListener("click", function () {
    let val = "paper";
    let y = arr[parseInt(3 * Math.random())];
    if (val == y) {
      tbody.innerHTML += `<tr><td>Tie</td>
        <td>${x--}</td>
        <td>0</td>
        <td>0</td>
        </tr>`;
      h3.innerHTML = `${y}`;
    } else if (val != arr[parseInt(3 * Math.random())] && y == "rock") {
      tbody.innerHTML += `<tr><td>User Win</td>
        <td>${x--}</td>
        <td>1</td>
        <td>0</td>
        </tr>`;
      h3.innerHTML = `${y}`;
      c1 += 1;
    } else if (val != arr[parseInt(3 * Math.random())] && y == "scissors") {
      tbody.innerHTML += `<tr><td>computer Win</td>
        <td>${x--}</td>
        <td>0</td>
        <td>1</td>
        </tr>`;
      h3.innerHTML = `${y}`;
      c2 += 1;
    }
    if (x < 0) {
      rock.setAttribute("disabled", true);
      paper.setAttribute("disabled", true);
      scissors.setAttribute("disabled", true);
   
    }
    if (c1 > c2) {
        result.innerText = `User Won`;
      } else if (c1 == c2) {
        result.innerText = `Tie`;
      } else if (c1 < c2) {
        result.innerText = `Computer won`;
      }
  });

  scissors.addEventListener("click", function () {
    let val = "scissors";

    let y = arr[parseInt(3 * Math.random())];
    if (val == y) {
      tbody.innerHTML += `<tr><td>Tie</td>
          <td>${x--}</td>
          <td>0</td>
          <td>0</td>
          </tr>`;
      h3.innerHTML = `${y}`;
    } else if (val != arr[parseInt(3 * Math.random())] && y == "paper") {
      tbody.innerHTML += `<tr><td>User Win</td>
      <td>${x--}</td>
      <td>1</td>
      <td>0</td>
      </tr>`;
      h3.innerHTML = `${y}`;
      c1 += 1;
    } else if (val != arr[parseInt(3 * Math.random())] && y == "rock") {
      tbody.innerHTML += `<tr><td>computer Win</td>
    <td>${x--}</td>
    <td>0</td>
    <td>1</td>
    </tr>`;
      h3.innerHTML = `${y}`;
      c2 += 1;
    }
    if (x < 0) {
      rock.setAttribute("disabled", true);
      paper.setAttribute("disabled", true);
      scissors.setAttribute("disabled", true);
     
    }
    if (c1 > c2) {
        result.innerText = `User Won`;
      } else if (c1 == c2) {
        result.innerText = `Tie`;
      } else if (c1 < c2) {
        result.innerText = `Computer won`;
      }
  });
});