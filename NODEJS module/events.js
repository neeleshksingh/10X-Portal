const events = require("events")

const event = new events.EventEmitter()

event.addListener("SayHello", () => {
    console.log("Hello");
})

event.emit("SayHello")