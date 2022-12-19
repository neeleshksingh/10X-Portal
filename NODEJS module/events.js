// const events = require("events")
// const event = new events.EventEmitter()

//Another method

const { EventEmitter } = require("events")
const event = new EventEmitter()


event.addListener("SayHello", () => {
    console.log("Hello");
})

event.addListener("SayHello", (name, question) => {
    console.log(`Hello ${name} ${question}`);
})
event.emit("SayHello", "Neelesh", "How are you ?")