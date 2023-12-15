const express = require("express");
const app = express();
const session = require("express-session");
const nocache = require("nocache");
const routes = require("./Routers/routes");
app.use(
  session({
    secret: "Riswanma@10",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
app.set("view engine", "ejs");
app.use(nocache());
app.use("/validation", express.static("validation"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(9000, () => {
  console.log("Server Started");
});
