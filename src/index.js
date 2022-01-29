const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;
const staticPath = path.join(__dirname, "../public")
//builtin middleware
app.use(express.static(staticPath));

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
