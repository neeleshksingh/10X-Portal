const events = require("events")

const event = new events.EventEmitter()

event.addListener("SayHello", () => {
    console.log("Hello");
})

event.addListener("SayHello", (name, question) => {
    console.log(`Hello ${name} ${question}`);
})
event.emit("SayHello", "Neelesh", "How are you ?")