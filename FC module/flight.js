let fs = require("fs");
const { uptime } = require("process");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(){
		//write your code here
		this.downTime = this.downTime.split(":").map(Number);
        this.upTime = this.upTime.split(":").map(Number);
        return ((this.downTime[0] - this.upTime[0]) * 60 +this.downTime[1] -this.upTime[1])
	}
}

// -------- Do NOT edit anything below this line ----------
let upTime=readLine();
let downTime=readLine();
let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());