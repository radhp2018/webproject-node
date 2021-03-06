const express = require("express");
const app = express();
const port = 4000;
app.get('/', (req, res) => {
  res.send("Hi.. reponse from express server");
});

app.get('/about', (req, res) => {
    res.send("Hi.. reponse from about page");
  });
// www.domain.com (server)
/*
API
get - read
post - create
put - update
delete - delete
*/

app.listen(port, () => {
  console.log(`listening from server ${port}`);
});
