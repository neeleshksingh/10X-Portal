const express = require("express");
const mongooose = require("mongoose");
require("./index");
const table = require("./models/Blog");
const app = express();

// Import routes

const blogRoute = require("./routes/blog");

blogRoute.post("/blog", async (req, res) => {
  try {
    let data = await table.create(req.body);
    res.status(201).json({ status: "Sucess", data });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});

blogRoute.get("/blog", async (req, res) => {
  const { page = 1, pagesize = 5, search = "" } = req.query;
  console.log(req.query);
  try {
    let data = await table
      .find({ topic: req.query.search })
      .skip(pagesize * (page - 1))
      .limit(pagesize);
    res.status(200).json({ status: "Sucess", data });
  } catch (e) {}
});

blogRoute.put("/blog/:id", async (req, res) => {
  let data =await table.updateOne(
    { _id: req.params.id },
    {
      $set: {
        topic: req.body.topic,
        description: req.body.description,
        posted_at: req.body.posted_at,
        posted_by: req.body.posted_by,
      },
    }
  );
  res.json({status:"Sucess",data});
});

blogRoute.delete("/blog/:id", async (req, res) => {
    let data =await table.deleteOne({_id: req.params.id})
    res.json({status:"Sucess",data});
  });



//Router MIddlewares
app.use(express.json());
app.use("/", blogRoute);

app.listen(3000);
module.exports = app;
