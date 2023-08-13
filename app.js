const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// const { handler } = require("./routes");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");

const errorsController = require("./controllers/errors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorsController.get404);

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
