const mongoose = require("mongoose");
const express = require("express");
const app = express();
const User = require("./schema");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://0.0.0.0:27017/Student");
const db = mongoose.connection;

db.on("error", () => {
  console.log("Error in connecting to the database");
});
db.once("open", () => {
  console.log("Database is Successfully Connected");
});

// app.use(bodyParser.json);
app.use(cors());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.delete("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  console.log("Received userid:", req.body);
  try {
    const result = await User.deleteOne({ _id: userid });
    console.log(result);
    if (result.deletedCount === 1) {
      res.send({ status: "Ok", data: "Deleted" });
    } else {
      res.status(404).send({ status: "Error", data: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
});


app.post("/signup", (req, res) => {
  var FirstName = req.body.firstname;
  var LastName = req.body.lastname;
  var PRN = req.body.prn;
  var RollNo = req.body.rollno;
  var Email = req.body.email;
  var PhoneNo = req.body.PhoneNo;
  var Department = req.body.department;
  var Address = req.body.address;

  var userData = {
    firstName: FirstName,
    lastName: LastName,
    PRN: PRN,
    RollNo: RollNo,
    Email: Email,
    PhoneNo: PhoneNo,
    Department: Department,
    Address: Address,
  };

  User.collection.insertOne(userData, (error, collection) => {
    if (error) {
      throw error;
    }
    console.log("Record Inserted Succesfully");
  });
  return res.redirect("/index.html");
});
app.get("/getAllUser", async (req, res) => {
  let query = {};
  const searchData = req.query.search;
  if (searchData) {
    query = {
      $or: [
        { firstName: { $regex: searchData, $options: "i" } },
        { lastName: { $regex: searchData, $options: "i" } },
      ],
    };
  }
  try {
    const allUsers = await User.find(query);
    res.send({ status: "ok", data: allUsers });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.send({
    "Allow-access-Allow-Origin": "*",
  });
  return res.redirect("index.html");
})
.listen(3000);

console.log("Listning from port 3000");
