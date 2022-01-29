const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>home page</h1>");
});
app.get("/about", (req, res) => {
  res.status(200).send([
    {
      name: "Ayansh",
      id: 3,
    },
    {
      name: "Dhanashri",
      id: 4,
    },
  ]);
});
app.get("/contact-us", (req, res) => {
  res.status(200).json([
    {
      name: "Rahul",
      id: 1,
    },
    {
      name: "Ishika",
      id: 2,
    },
  ]);
});
app.get("/temp", (req, res) => {
  res.status(200).send("temp page");
});

app.listen(4000, () => {
  console.log(`my port is running`);
});
